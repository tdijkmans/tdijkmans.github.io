import './App.css'
import Footer from './layout/Areas/Footer'
import { Header } from './layout/Areas/Header'
import Main from './layout/Areas/Main'
import { Navigation } from './layout/Areas/Navigation'

function App() {
    return (
        <div className="newspaper-container">
            <div className="newspaper">
                <Header />
                <Navigation />
                <Main />
                <Footer />
            </div>
        </div>
    )
}

export default App
