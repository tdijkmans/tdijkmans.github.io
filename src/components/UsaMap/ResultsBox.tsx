import { P } from '../Typography'
import './ResultsBox.css'
import { IUsaState } from './usaStates'

export default function ResultsBox({
    hooveredState,
}: {
    hooveredState: IUsaState
}) {
    return (
        <div className="usa-map__live-results-box">
            <div className="usa-map__live-results">
                <div
                    style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor:
                            hooveredState.party === 'republican'
                                ? '#e04b1a'
                                : '#0044c9',
                    }}
                ></div>
                <P>
                    {hooveredState.stateSlogan} - {hooveredState.dataName} -{' '}
                    {hooveredState.electoralVotes} kiesmannen
                </P>
            </div>
        </div>
    )
}
