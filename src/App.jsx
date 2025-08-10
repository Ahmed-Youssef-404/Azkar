import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

export default function App() {
    return (
        <div className='app'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

