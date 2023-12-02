import Score from "../components/Powerplay/Score";
import UsaBoard from "../components/Powerplay/UsaBoard";
import StateList from "../components/StateList";
import { useScale } from "../hooks/useScale";
import "./Powerplay.css";


export default function PowerplaySecion() {
    const { scale, setScale } = useScale()
    return (
        <div className="powerplay-container">

            <div className="div1">
                <div className="board--zoom" >
                    <button className="board--zoom__button" onClick={() => setScale(scale + 0.1)}>+</button>
                    <button className="board--zoom__button" onClick={() => setScale(1)}>1</button>
                    <button className="board--zoom__button" onClick={() => setScale(scale - 0.1)}>-</button>
                </div>
            </div>

            <div className="div2">2
            </div>
            <div className="div3">3</div>
            <div className="div4">4


            </div>
            <div className="div5">
                <UsaBoard />
            </div>
            <div className="div6">
                <h1 className="div6--title">Kiezersbedrog</h1>
            </div>

            <div className="div7"> 7

            </div>
            <div className="div8">
            </div>
            <div className="div9"><Score /></div>

            <div className="div10">
                <StateList />
            </div>
        </div>
    )
}
