import { getPartyColor } from '../../utilities'
import { P } from '../Typography'
import './ResultsBox.css'
import { IUsaState } from './usaStates'

export default function ResultsBox({
    hooveredState,
}: {
    hooveredState: IUsaState
}) {
    return (
        <div className="board__live-results-box">
            <div className="board__live-results">
                <div
                    style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: getPartyColor(hooveredState.party),
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
