import { H3, P } from '../../components/Typography'
import './Top.css'

export default function Top() {
    return (
        <div className="top-story" id="top-story">
            <article className="top-story__article">
                <div>
                    <H3 className="top-story__article-title">
                        Atomen Blijven Gestrest door Toename van Elektronen
                    </H3>
                    <P className="top-story__article-author">
                        Subatomair verslaggever: Marie Curie | Ter plaatse in
                        het atoom
                    </P>

                    <P className="top-story__article-content">
                        In het rijk van de subatomaire deeltjes worden atomen
                        geconfronteerd met een toenemende druk door een groeiend
                        aantal elektronen dat zich bij hen voegt. Dit
                        onverwachte gedrag van atomen heeft wetenschappers
                        verrast en doet de vraag rijzen of atomen binnenkort in
                        opstand zullen komen. Deskundigen zoeken naar manieren
                        om atomen te kalmeren en de stabiliteit van de chemische
                        wereld te handhaven. Onze reis naar het microscopische
                        rijk van atomen gaat verder, en de avonturen zijn nog
                        lang niet voorbij.
                    </P>
                </div>
                <div className="top-story__article-image">
                    <figcaption className="top-story__article-caption">
                        Een atoom in een staat van stress.
                        <span>Bron: Quantum Magazine </span>
                    </figcaption>
                    <img
                        src="stressed.png"
                        alt="Atomen Afbeelding"
                        aria-label="Atomen Afbeelding"
                        className="top-story__article-image"
                    />
                </div>
            </article>
        </div>
    )
}
