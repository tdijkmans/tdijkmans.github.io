import NewspaperSection from '../../components/NewspaperSection'
import { H2, LI, UL } from '../../components/Typography'
import './BusinessSection.css'
export default function BusinessSection() {
    return (
        <NewspaperSection className=" business" id="business">
            <H2 className="business__title">
                Bedrijfsnieuws en Ruimteverkenning
            </H2>
            <UL className="business__list">
                <LI className="business__item">
                    SpaceX Ruimtewandeling onthult Intrigerende Vondsten op Mars
                </LI>
                <LI className="business__item">
                    Onderzoeksbureau Earth Explorations onthult Nieuwe
                    Avontuurlijke Ruimteprojecten
                </LI>
            </UL>
        </NewspaperSection>
    )
}
