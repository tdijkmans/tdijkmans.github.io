import { H3, LI, UL } from '../../components/Typography'
import './Teaser.css'

export default function Teaser() {
    return (
        <div className="teaser-list-area">
            <H3 className="teaser-list-title">Net binnen</H3>
            <UL className="teaser-list">
                <LI className="teaser-list__item">
                    <div className="teaser-list__tags">
                        <span>Quantum blog </span>
                        <span>Subnano</span>
                    </div>
                    Schrodinger kat misschien overleden
                </LI>
                <LI className="teaser-list__item">
                    <div className="teaser-list__tags">
                        <span>Diversiteit en inclusiviteit</span>
                    </div>
                    Dinosaurussen uitgestorven door klimaatverandering
                </LI>
                <LI className="teaser-list__item">
                    <div className="teaser-list__tags">
                        <span>Anthropologie </span>
                        <span>Archeologie</span>
                    </div>
                    Oermensen ontdekken vuur
                </LI>
                <LI className="teaser-list__item">
                    <div className="teaser-list__tags">
                        <span>Ruimte</span>
                    </div>
                    Nieuwe ontdekkingen in de ruimte
                </LI>
                <LI className="teaser-list__item">
                    <div className="teaser-list__tags">
                        <span>Geologisch onderzoek</span>
                    </div>
                    Aarde beter dan gedacht
                </LI>
            </UL>
        </div>
    )
}
