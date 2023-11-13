import NewspaperSection from '../../components/NewspaperSection'
import { H2, LI, P, UL } from '../../components/Typography'

export default function EntertainmentSection() {
    return (
        <NewspaperSection className=" entertainment" id="entertainment">
            <H2 className="entertainment__title">
                Wetenschap op het Grote Scherm
            </H2>
            <P className="entertainment__content">
                Filmrecensent: Laura van der Steen
            </P>
            <UL className="entertainment__list">
                <LI className="entertainment__item">
                    Nieuwe Documentaire "Sterrenstelsels en Beyond" Verbluft
                    Publiek
                </LI>
                <LI className="entertainment__item">
                    Science Fiction-film "Reis naar de Rand van het Universum"
                    Wint Grote Prijs op Filmfestival
                </LI>
            </UL>
        </NewspaperSection>
    )
}
