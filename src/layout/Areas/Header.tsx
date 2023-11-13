import MaterialIcon from '../../components/MaterialIcon'
import { H1, H2 } from '../../components/Typography'
import './Header.css'

export function Header() {
    return (
        <header className="header" id="header">
            <div className="header__item">
                <H1 className="header__title">
                    Galactische Gazette
                    <img
                        className="header__logo-image"
                        src="logo.svg"
                        alt="Logo"
                        aria-label="Logo"
                        width={24}
                    />
                </H1>

                <H2 className="header__subtitle">Van niets tot nieuws</H2>
            </div>

            <div className="header__item--side">
                <H2>
                    <span className="header__item_title">
                        Weersvoorspelling
                    </span>
                    <MaterialIcon
                        iconName="wb_sunny"
                        className="header__item_icon"
                    />
                </H2>
                <div className="header__item--weather">
                    Zonnig met een kleine kans op meteorieten.
                    <span className="header__item--weather-deg">
                        200°C | 77°F
                    </span>
                </div>
            </div>
        </header>
    )
}
