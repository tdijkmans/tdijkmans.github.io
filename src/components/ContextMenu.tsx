import './ContextMenu.css'; // Import your custom CSS for styling
import { Party } from './Powerplay/usaStates';


interface ContextMenuProps {
    isVisible: boolean;
    position: { top: number; left: number };
    onOptionClick: (option: Party) => void;
    onHide: () => void;
    hooveredState: string;
}




const ContextMenu = ({ isVisible, position, onOptionClick, onHide, hooveredState }: ContextMenuProps) => {
    return (
        <>
            {isVisible && (
                <div
                    className="context-menu"
                    style={{ top: position.top, left: position.left }}
                >
                    <div className='context-indicator--title'>Kies een partij voor {hooveredState}</div>

                    <div className='context-indicator' onClick={() => onOptionClick('republican')}>
                        <div className='context-indicator--rep'></div>
                        <div>


                            Republikeinen
                        </div></div>

                    <div className='context-indicator' onClick={() => onOptionClick('democrat')}>
                        <div className='context-indicator--dem'></div>
                        <div>

                            Democraten</div>
                    </div>
                    <div className='context-indicator' onClick={() => onOptionClick('swing')}>

                        <div className='context-indicator--und'></div>
                        <div>

                            Onbeslist</div></div>
                </div >

            )}
            <div className={`overlay ${isVisible ? 'visible' : ''}`} onClick={onHide} />
        </>
    );
};

export default ContextMenu;
