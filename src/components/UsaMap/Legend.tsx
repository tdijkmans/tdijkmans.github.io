import { H3 } from '../Typography'
import './Legend.css'

export default function Legend() {
    const items = [
        {
            color: '#e04b1a',
            label: 'Republikeins',
        },
        {
            color: '#0044c9',
            label: 'Democratisch',
        },
        {
            color: 'grey',
            label: 'Onbeslist',
        },
    ]

    return (
        <div className="legend">
            <H3>Legenda</H3>

            {items.map((item, index) => (
                <div className="legend__item" key={index}>
                    <div
                        style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: item.color,
                        }}
                    ></div>
                    {item.label}
                </div>
            ))}
        </div>
    )
}
