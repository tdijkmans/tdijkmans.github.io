import UsaMap from '../../components/UsaMap/UsaMap'
import BusinessSection from '../NewsSections/BusinessSection'
import EntertainmentSection from '../NewsSections/EntertainmentSection'
import InternationalSection from '../NewsSections/InternationalSection'
import LettersSection from '../NewsSections/LettersSection'
import LocalNewsSection from '../NewsSections/LocalNewsSection'
import OpinionSection from '../NewsSections/OpinionSection'
import SportsSection from '../NewsSections/SportsSection'
import WeatherSection from '../NewsSections/WeatherSection'
import Lead from './Lead'
import './Main.css'
import Top from './Top'
import TopstoryList from './TopstoryList'

const Main = () => {
    return (
        <main className="newspaper-main">
            <Lead />
            <Top />
            <UsaMap />
            <TopstoryList />
            <InternationalSection />
            <LocalNewsSection />
            <BusinessSection />
            <SportsSection />
            <EntertainmentSection />
            <WeatherSection />
            <OpinionSection />
            <LettersSection />
        </main>
    )
}

export default Main
