import { useState } from 'react'
import { stateData } from './usaStates'

export const useHoveredState = () => {
    const [hooveredState, setHooveredState] = useState({
        id: '',
        x: 0,
        y: 0,
        d: '',
        dataId: '',
        dataName: '',
        party: '',
        electoralVotes: 0,
        capital: '',
        stateSlogan: '',
    })

    const handleMouseEnter = (
        e: React.MouseEvent<SVGPathElement, MouseEvent>
    ) => {
        const id = e.currentTarget.getAttribute('data-id')
        const state = stateData.find((state) => state.id === id)
        if (state) {
            setHooveredState(state)
        }
    }

    const handleMouseLeave = (
        e: React.MouseEvent<SVGPathElement, MouseEvent>
    ) => {
        const id = e.currentTarget.getAttribute('data-id')
    }

    return { hooveredState, handleMouseEnter, handleMouseLeave }
}
