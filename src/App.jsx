import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Banner from './components/shared/Banner';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import BuildTracker from './pages/BuildTracker';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import CookiePolicy from './pages/CookiePolicy';
import StackCards from './pages/StackCards';
import StackCardsPrivacy from './pages/StackCardsPrivacy';
import StackCardsDeleteAccount from './pages/StackCardsDeleteAccount';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="text-sm text-white w-full">
          <Banner />
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/buildtracker" element={<BuildTracker />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* Legacy StackCards routes — kept for existing users */}
          <Route path="/stackcards" element={<StackCards />} />
          <Route path="/stackcards/privacy" element={<StackCardsPrivacy />} />
          <Route path="/stackcards/delete-account" element={<StackCardsDeleteAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;