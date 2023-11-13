import CaptionedImage from '../../components/CaptionedImaged'
import NewspaperSection from '../../components/NewspaperSection'
import { H2, P } from '../../components/Typography'
import './Lead.css'
import Promo from './Promo'
import Teaser from './Teaser'

export default function Lead() {
    return (
        <div className="lead-story-container" id="lead-story">
            <NewspaperSection className="lead-story-area lead-story">
                <H2>Neanderthalers Geven het Op tegen Homo Sapiens</H2>
                <P className="lead-story__content">
                    Na duizenden jaren van concurrentie verliezen Neanderthalers
                    de strijd vanwege de opkomst van Homo Sapiens. Een
                    onverwachte wending in de evolutie.
                    <span className="lead-story__author">
                        Evolutionair verslaggever: Lucy Primatus
                    </span>
                </P>

                <CaptionedImage
                    src="fight.png"
                    alt="Evolutie Afbeelding"
                    ariaLabel="Evolutie Afbeelding"
                    caption="Bij de afbeelding: Neanderthalers en Homo Sapiens in hun
                evolutionaire strijd."
                />
            </NewspaperSection>
            <Promo />
            <Teaser />
        </div>
    )
}
