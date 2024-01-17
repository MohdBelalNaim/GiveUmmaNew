import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailsPage from './pages/DetailsPage';
import SearchResults from './pages/SearchResults';
import AllCampaigns from './pages/AllCampaigns';
import ContactUs from './pages/ConactUs';
import ZakatVerified from './pages/ZakatVerified';
import TaxBenifit from './pages/TaxBenifit';
import HowWeWork from './pages/HowWeWork';
import CreateCampaign from './pages/CreateCampaign';
import ConfirmationPage from './pages/ConfirmationPage';
import MyProfile from './pages/MyProfile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<DetailsPage/>} />
        <Route path="/search-results" element={<SearchResults/>} />
        <Route path="/all-campaigns" element={<AllCampaigns/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/zakat-verified" element={<ZakatVerified/>} />
        <Route path="/tax-benifit" element={<TaxBenifit/>} />
        <Route path="/how-we-work" element={<HowWeWork/>} />
        <Route path="/create-campaign" element={<CreateCampaign/>} />
        <Route path="/campaign-confirmation" element={<ConfirmationPage/>} />
        <Route path="/my-profile" element={<MyProfile/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
