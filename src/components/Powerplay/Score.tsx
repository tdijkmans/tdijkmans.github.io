import { useEffect } from 'react'
import { useGameScore } from '../../hooks/useGameScore'
import { getPartyColor } from '../../utilities'
import './Score.css'

export default function Score() {
    const { getRepulicanScore, getDemocratScore, grandTotal } = useGameScore()

    useEffect(() => {
        console.log('score')
    }
        , [getRepulicanScore, getDemocratScore, grandTotal])


    const items = [
        {
            color: getPartyColor('republican'),
            label: 'Republikeinen',
            score: getRepulicanScore(),
        },
        {
            color: getPartyColor('democrat'),
            label: 'Democraten',
            score: getDemocratScore(),
        },
        {
            color: getPartyColor('swing'),
            label: 'Onbeslist',
            score: 0,
        },
        {
            color: 'black',
            label: 'Totaal',
            score: grandTotal,
        }
    ].map((item) => ({
        ...item,
        key: `legend-${item.label}`,

    }))




    return (
        <div className="score">
            {items.map((item) => (
                <div className="score__item" key={item.key}>
                    <div className="score-item--label">
                        <div
                            style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: item.color,
                            }}
                        ></div>
                        <div>
                            {item.label}
                        </div>
                    </div>
                    <div className="score-item--score">{item.score}</div>
                </div>
            ))}

        </div>

    )
}
