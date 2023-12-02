import { SVGProps, useState } from 'react'
import { useGameScore } from '../../hooks/useGameScore'
import { useScale } from '../../hooks/useScale'
import { getPartyColor } from '../../utilities'
import ContextMenu from '../ContextMenu'
import MapContours from './MapContours'
import ResultsBox from './ResultsBox'
import './UsaBoard.css'
import { IUsaState, Party, stateData } from './usaStates'
import { useHoveredState } from './useHoveredState'


function UsaBoard(props: SVGProps<SVGSVGElement>) {
    const initialStates = stateData.map((s) => ({ ...s, fill: getPartyColor(s.party), opacity: 0.7, }))
    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [id, setId] = useState('');
    const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });
    const { handleMouseEnter, handleMouseLeave, hooveredState } = useHoveredState()
    const [states, setStates] = useState(initialStates)
    const [clickedState, setClickedState] = useState({} as IUsaState)
    const { winAState } = useGameScore()
    const sortedStates = states?.sort((a) => hooveredState?.id === a.id ? 1 : -1)

    const { scale, handleWheel } = useScale()


    const showContextMenu = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
        e.preventDefault();
        setContextMenuVisible(true);
        setContextMenuPosition({ top: e.clientY - 250, left: e.clientX - 250 });
    };

    const hideContextMenu = () => { setContextMenuVisible(false); };

    const handleOptionClick = (option: Party) => {
        hideContextMenu();
        const updatedStates = states.map((s) => s.id === id ? { ...s, fill: getPartyColor(option), opacity: 1 } : s)
        winAState(option, clickedState)
        setStates(updatedStates)
    };

    const handleClick = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
        const id = e.currentTarget.getAttribute('data-id')
        setClickedState(states.find((s) => s.id === id) || {} as IUsaState)
        setId(id as string);
        showContextMenu(e);
    }

    return (
        <>




            <svg
                onWheel={handleWheel}
                className="board"
                xmlns="http://www.w3.org/2000/svg"
                id="board-graphic"
                width={1000}
                height={589}
                strokeLinejoin="round"
                stroke="#000"
                transform={`scale(${scale})`}
                fill="none"
                {...props}
            >
                <MapContours />

                {sortedStates?.map((state) => (
                    <g
                        key={state.id}
                        id={state.id}
                        className={`state-group ${hooveredState?.id === state.id ? 'hovered' : ''
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
                            opacity={state.opacity}
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
                            onClick={showContextMenu}
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

            <ContextMenu
                hooveredState={clickedState.dataName}
                isVisible={contextMenuVisible}
                position={contextMenuPosition}
                onOptionClick={handleOptionClick}
                onHide={hideContextMenu}
            />
            <ResultsBox hooveredState={hooveredState} />
        </>
    )
}

export default UsaBoard
