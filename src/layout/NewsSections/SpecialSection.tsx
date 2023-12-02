
import NewspaperSection from '../../components/NewspaperSection';
import { H3 } from '../../components/Typography';
import UsaMap from '../../components/UsaMap/UsaMap';
import './SpecialSection.css';

export default function SpecialSection() {
    return (
        <NewspaperSection id="USA">
            <H3 className="special-section--title">
                SPECIAL Intergalactisch Politieke Landschap: Verkiezingskaart
                van de VS
                <a className='special-section--link' href='/kiezersbedrog'>Lees meer →</a >
            </H3>

            <UsaMap />

        </NewspaperSection>
    )
}
