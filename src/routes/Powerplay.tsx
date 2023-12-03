import Score from "../components/Powerplay/Score";
import UsaBoard from "../components/Powerplay/UsaBoard";
import StateList from "../components/StateList";
import { useZoom } from "../hooks/useZoom";
import "./Powerplay.css";


export default function PowerplaySecion() {
    const scale = useZoom((state) => state.scale)
    const setScale = useZoom((state) => state.setScale)

    const percentageZoom = `${(scale * 100).toFixed(0)}%`
    return (
        <div className="powerplay-container">

            <div className="div1">
                <div className="board--zoom" >
                    <div className="board--zoom__label">Zoom {percentageZoom}</div>
                    <div>
                        <button className="board--zoom__button" onClick={() => setScale(scale + 0.1)}>+</button>
                        <button className="board--zoom__button" onClick={() => setScale(1)}>Reset</button>
                        <button className="board--zoom__button" onClick={() => setScale(scale - 0.1)}>-</button>
                    </div>
                </div>
            </div>

            <div className="div2"></div>
            <div className="div3"></div>
            <div className="div4">4</div>
            <div className="div5">
                <UsaBoard />
            </div>
            <div className="div6">
                <h1 className="div6--title">Kiezersbedrog</h1>
            </div>

            <div className="div7"> 7

            </div>
            <div className="div8"></div>
            <div className="div9"><Score />


            </div>

            <div className="div10">
                <StateList />
            </div>
        </div>
    )
}
