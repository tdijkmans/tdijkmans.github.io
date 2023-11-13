import { SVGProps, useState } from 'react'
import NewspaperSection from '../NewspaperSection'
import { H3 } from '../Typography'
import Legend from './Legend'
import MapContours from './MapContours'
import ResultsBox from './ResultsBox'
import './UsaMap.css'
import { stateData } from './usaStates'
import { useHoveredState } from './useHoveredState'

function UsaMap(props: SVGProps<SVGSVGElement>) {
    const { handleMouseEnter, handleMouseLeave, hooveredState } =
        useHoveredState()

    const initialStates = stateData.map((state) => ({
        ...state,
        fill:
            state?.party === 'republican'
                ? '#e04b1a'
                : state?.party === 'democrat'
                ? '#0044c9'
                : 'grey',
    }))

    const [states, setStates] = useState(initialStates)

    const handleClick = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
        const id = e.currentTarget.getAttribute('data-id')
        setStates(
            states.map((state) =>
                state.id === id
                    ? {
                          ...state,
                          fill:
                              state.fill === '#e04b1a' ? '#0044c9' : '#e04b1a',
                      }
                    : state
            )
        )
    }

    const sortedStates = states?.sort((a) =>
        hooveredState?.id === a.id ? 1 : -1
    )

    return (
        <NewspaperSection id="USA">
            <H3 className="usa-map__title">
                SPECIAL Intergalactisch Politieke Landschap: Verkiezingskaart
                van de VS
            </H3>
            <Legend />

            <svg
                className="usa-map"
                xmlns="http://www.w3.org/2000/svg"
                id="usa-map-graphic"
                width={1000}
                height={589}
                strokeLinejoin="round"
                stroke="#000"
                fill="none"
                {...props}
            >
                <MapContours />

                {sortedStates?.map((state) => (
                    <g
                        key={state.id}
                        id={state.id}
                        className={`state-group ${
                            hooveredState?.id === state.id ? 'hovered' : ''
                        }`}
                    >
                        <path
                            id={state.id}
                            key={state.id}
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            d={state.d}
                            data-id={state.id}
                            data-name={state.dataName}
                            fill={state.fill}
                            stroke={
                                hooveredState?.id === state.id ? 'white' : ''
                            }
                        />
                        <text
                            x={state?.x}
                            y={state?.y}
                            textAnchor="middle"
                            fontSize="12px"
                            fill="white"
                            stroke="white"
                            strokeWidth="1px"
                        >
                            {state.id}
                        </text>
                        <text
                            x={state?.x}
                            y={state?.y + 16}
                            textAnchor="middle"
                            fontSize="12px"
                            stroke="white"
                        >
                            {state.electoralVotes}
                        </text>
                    </g>
                ))}
            </svg>

            <ResultsBox hooveredState={hooveredState} />
        </NewspaperSection>
    )
}

export default UsaMap
