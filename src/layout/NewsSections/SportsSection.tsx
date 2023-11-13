import NewspaperSection from '../../components/NewspaperSection'
import { H2, LI, UL } from '../../components/Typography'
import './SportsSection.css'

export default function SportsSection() {
    return (
        <NewspaperSection className=" sports" id="sports">
            <H2 className="sports__title">
                Sportieve Wetenschappelijke Competities
            </H2>
            <UL className="sports__list">
                <LI className="sports__item">
                    Snelste Sterrenschepen concurreren in de Galactische
                    Ruimterace
                </LI>
                <LI className="sports__item">
                    Interstellaire Spellen: De Nieuwe Olympische Evenementen
                </LI>
            </UL>
        </NewspaperSection>
    )
}
