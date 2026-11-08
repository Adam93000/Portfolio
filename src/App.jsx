import Home from './pages/Home';
import './styles/global.css';
import Navigation from './components/layout/Navigation/Navigation';
import Footer from './components/layout/Footer/Footer';
import ProjectGallery from './components/sections/Projects/ProjectGallery';
import About from './components/sections/About/AboutPitch';


export default function App() {
    return (
        <div className="app-container">
            <header>
                <h1>Adam Moskatelo - Portfolio</h1>
                <nav>
                    <ul>
                        <li><a href="#a-propos">À propos</a></li>
                        <li><a href="#projets">Mes Projets</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                {/* Ta section À propos générée tout à l'heure */}
                <About />

                {/* Ta galerie de projets générée dynamiquement */}
                <ProjectGallery />
            </main>

            <footer>
                <p>© {new Date().getFullYear()} Adam Moskatelo. Tous droits réservés.</p>
            </footer>
        </div>
    );
}