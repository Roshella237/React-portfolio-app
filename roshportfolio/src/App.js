import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Experience} from './components/experience/Experience';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Portfolio} from './components/porfolio/Portfolio';
import {Services} from './components/services/Services';
import {Testimonials} from './components/testimonials/Testimonials';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
