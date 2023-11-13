import NewspaperSection from '../../components/NewspaperSection'
import { H2, LI, UL } from '../../components/Typography'
import './LettersSection.css'

export default function LettersSection() {
    return (
        <NewspaperSection
            className="newspaper-section letters-editor"
            id="letters-editor"
        >
            <H2 className="letters-editor__title">
                Lezersbrieven uit de Diepte
            </H2>
            <UL className="letters-editor__list">
                <LI className="letters-editor__item">
                    Brief van Jan Jansen over het Onderzoek naar Buitenaards
                    Leven
                </LI>
                <LI className="letters-editor__item">
                    Brief van Maria Smit over de Toekomst van Ruimteverkenning
                </LI>
            </UL>
        </NewspaperSection>
    )
}
