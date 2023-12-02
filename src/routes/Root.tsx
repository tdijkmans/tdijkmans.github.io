import Footer from "../layout/Areas/Footer";
import { Header } from "../layout/Areas/Header";
import Main from "../layout/Areas/Main";
import { Navigation } from "../layout/Areas/Navigation";
import './Root.css';

export default function Root() {
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
