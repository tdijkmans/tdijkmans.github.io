import { H2, LI, UL } from '../../components/Typography'
import './TopStoryList.css'

export default function TopstoryList() {
    return (
        <div className="top-stories" id="top-stories">
            <H2 className="top-stories__title">
                Astronomische Ontdekkingen en Ruimtelijke Avonturen
            </H2>
            <UL className="top-stories__list">
                <LI className="top-stories__item">
                    Atomen Blijven Gestrest door Toename van Elektronen
                    <span>Deze pagina en pagina 2</span>
                </LI>
                <LI className="top-stories__item">
                    Reis door de Tijd: Het Ontstaan van Het Universum ontrafeld
                    <span>Pagina 3</span>
                </LI>
                <LI className="top-stories__item">
                    Melkwegbewoners Ontdekken Nieuwe Sterren in Buurstelsel
                    <span>Pagina 4</span>
                </LI>
            </UL>
        </div>
    )
}
