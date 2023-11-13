import NewspaperSection from '../../components/NewspaperSection'
import { H2, P } from '../../components/Typography'
import './OpinionSection.css'

export default function OpinionSection() {
    return (
        <NewspaperSection className=" opinion" id="opinion">
            <H2 className="opinion__title">
                Wetenschappelijke Opinies en Commentaren
            </H2>
            <P className="opinion__content">
                Opiniebijdrage door Rianne de Rots
            </P>
            <P className="opinion__text">
                Het is tijd voor meer bewustzijn over het belang van
                wetenschappelijke ontdekkingen en de rol van nieuwsgierigheid in
                ons leven.
            </P>
        </NewspaperSection>
    )
}
