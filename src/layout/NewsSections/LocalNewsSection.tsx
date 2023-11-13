import NewspaperSection from '../../components/NewspaperSection'
import { H2, LI, P, UL } from '../../components/Typography'
import './LocalNewsSection.css'

export default function LocalNewsSection() {
    return (
        <NewspaperSection className=" local-news" id="local-news">
            <H2 className="local-news__title">
                Nieuws van Dichtbij en Ver Weg
            </H2>
            <P className="local-news__content">
                Lokale Verslaggever: Petra Steengruis
            </P>
            <UL className="local-news__list">
                <LI className="local-news__item">
                    Onverklaarbare Lichtverschuivingen in Naburig Sterrenstelsel
                </LI>
                <LI className="local-news__item">
                    Sterrenkijkers Verzamelen zich voor Zeldzame Hemelse
                    Gebeurtenis
                </LI>
            </UL>
        </NewspaperSection>
    )
}
