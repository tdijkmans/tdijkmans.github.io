import { H3, P } from '../../components/Typography'
import './Promo.css'

export default function Promo() {
    return (
        <div className="promo-area" id="promo-area">
            <H3 className="promo-title">Speciale aanbieding</H3>
            <P className="promo-text">Abboneer nu tijdloos</P>
            <strong>vanaf 5 euro per eon</strong>
        </div>
    )
}
