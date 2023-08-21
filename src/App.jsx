import { Route, Routes  } from "react-router-dom"
import { useState, useEffect } from 'react';

// komponenty
import Navigation from "./components/Nav"
import Footer from "./components/Footer"
import ContactSection from './components/ContactSection'
import ScrollButton from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'

// stránky
import UvodPage from "./pages/Uvod"
import UbytovaniPage from "./pages/Ubytovani"
import CenikPage from "./pages/Cenik"
import TipyNaVyletPage from "./pages/TipyNaVylet"
import KontaktPage from "./pages/Kontakt"
import RezervacePage from "./pages/Rezervace"
import StravovaniPage from "./pages/Stravovani"
import ZabavaSportPage from "./pages/ZabavaASport"
import NotFoundPage from "./pages/NotFound"

function External({url}) {
  window.location.href = url;
  return null;
}

function App() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="App">
      
      <header className="header">
        <Navigation/>
      </header>

      <div className="overflow" id='overflow'>
        <main className="main">
          <ScrollToTop />
          <Routes>

            <Route path="/github" element= {<External url="https://github.com/vdoskar/eden-public"/> }></Route>

            <Route path="/" element={<UvodPage />} />
            <Route path="/ubytovani" element={<UbytovaniPage />} />

              <Route path="/ubytovani/drevene-chatky" element={<UbytovaniPage />} />
              <Route path="/ubytovani/hlavni-budova" element={<UbytovaniPage />} />
              <Route path="/ubytovani/karavany" element={<UbytovaniPage />} />
              <Route path="/ubytovani/mobilni-domy" element={<UbytovaniPage />} />
              <Route path="/ubytovani/okaly" element={<UbytovaniPage />} />
              <Route path="/ubytovani/stanovani" element={<UbytovaniPage />} />
              <Route path="/ubytovani/velke-chaty" element={<UbytovaniPage />} />

            <Route path="/stravovani" element={<StravovaniPage />} />
            <Route path="/zabava-a-sport" element={<ZabavaSportPage />} />
            <Route path="/cenik" element={<CenikPage />} />
            <Route path="/tipy-na-vylet" element={<TipyNaVyletPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/rezervace" element={<RezervacePage />} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>

          <ContactSection />
          <ScrollButton />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  )

}

export default App
