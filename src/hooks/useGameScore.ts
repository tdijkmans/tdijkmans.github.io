import { useState } from 'react'
import { stateData } from '../components/Powerplay/usaStates'
import { IUsaState } from '../components/UsaMap/usaStates'

type Score = {
    republican: number
    democrat: number
    swing: number
}

export const useGameScore = () => {

    const startTotals = stateData.reduce((acc, state) => {
        return {
            republican: acc.republican + state.electoralVotes,
            democrat: acc.democrat + state.electoralVotes,
            swing: acc.swing + state.electoralVotes
        }
    }
        , { republican: 0, democrat: 0, swing: 0 }
    )

    const grandTotal = startTotals.republican + startTotals.democrat + startTotals.swing


    const [score, setScore] = useState(
        { republican: 0, democrat: 0, swing: 0 }
    )

    const getRepublicanScore = () => {
        return score.republican
    }

    const getDemocratScore = () => {
        return score.democrat
    }

    const getRepublicanProgress = () => {
        return score.republican / grandTotal * 100 / 2
    }

    const getDemocratProgress = () => {
        return score.democrat / grandTotal * 100 / 2
    }



    const winAState = (party: keyof Score, state: IUsaState) => {
        if (party === 'republican') {
            setScore({
                ...score,
                republican: score.republican + state.electoralVotes,
                swing: score.swing - state.electoralVotes
            })
        } else if (party === 'democrat') {
            setScore({
                ...score,
                democrat: score.democrat + state.electoralVotes,
                swing: score.swing - state.electoralVotes
            })
        }
    }

    const loseAState = (party: keyof Score, state: IUsaState) => {
        if (party === 'republican') {
            setScore({
                ...score,
                republican: score.republican - state.electoralVotes,
                swing: score.swing + state.electoralVotes
            })
        } else if (party === 'democrat') {
            setScore({
                ...score,
                democrat: score.democrat - state.electoralVotes,
                swing: score.swing + state.electoralVotes
            })
        }
    }








    return { winAState, loseAState, getRepulicanScore: getRepublicanScore, getDemocratScore, getRepublicanProgress, getDemocratProgress, grandTotal }

}
