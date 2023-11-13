import NewspaperSection from '../../components/NewspaperSection'
import { H2, LI, P, UL } from '../../components/Typography'
import './InternationalSection.css'
export default function InternationalSection() {
    return (
        <NewspaperSection className=" international" id="international">
            <H2 className="international__title">Nieuws van Andere Werelden</H2>
            <P className="international__content">
                Onze Correspondent op Mars: Stijn Rotsblok
            </P>
            <UL className="international__list">
                <LI className="international__item">
                    Marsbewoners Verwonderd over Vreemde Bezoekers van de Aarde
                </LI>
                <LI className="international__item">
                    Europa's Oceanen Blijken Bruisende Bronnen van Leven te Zijn
                </LI>
            </UL>
        </NewspaperSection>
    )
}
