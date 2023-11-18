import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Faq from './pages/Faq';
import Pricing from './pages/Pricing';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
