import { H2, LI, UL } from '../../components/Typography'
import './Aside.css'

export default function Aside() {
    return (
        <aside className="sidebar">
            <H2 className="sidebar__title">Onze Sponsors</H2>
            <UL className="sidebar__list">
                <LI className="sidebar__item">
                    Vereniging van Ontdekkingsreizigers
                </LI>
                <LI className="sidebar__item">
                    Wetenschappelijk Onderzoeksfonds
                </LI>
            </UL>
        </aside>
    )
}
