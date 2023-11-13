import NewspaperSection from '../../components/NewspaperSection'
import { H2, LI, P, UL } from '../../components/Typography'
import './WeatherSection.css'
export default function WeatherSection() {
    return (
        <NewspaperSection className=" weather" id="weather">
            <H2 className="weather__title">Het Weer op Galactische Schaal</H2>
            <P className="weather__content">
                Weersvoorspelling voor de komende millennia:
            </P>
            <UL className="weather__list">
                <LI className="weather__item">
                    Morgen: Heldere Zonnige Dagen en Sterrennachten
                </LI>
                <LI className="weather__item">
                    Over 10.000 jaar: Voorspellingen zijn Een Beetje Wazig -
                    Mogelijk Interstellaire Veranderingen
                </LI>
            </UL>
        </NewspaperSection>
    )
}
