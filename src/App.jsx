import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Router,
} from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import SearchResults from "./pages/SearchResults";
import AllCampaigns from "./pages/AllCampaigns";
import ContactUs from "./pages/ConactUs";
import ZakatVerified from "./pages/ZakatVerified";
import TaxBenifit from "./pages/TaxBenifit";
import HowWeWork from "./pages/HowWeWork";
import CreateCampaign from "./pages/CreateCampaign";
import ConfirmationPage from "./pages/ConfirmationPage";
import MyProfile from "./pages/MyProfile";
import EditCampaign from "./pages/EditCampaign";
import Auth from "./pages/Auth";
import WithdrawFunds from "./pages/WithdrawFunds";
import MoreDetails from "./pages/MoreDetails";
import UploadDocuments from "./pages/UploadDocuments";
import Careers from "./pages/Careers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/all-campaigns" element={<AllCampaigns />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/zakat-verified" element={<ZakatVerified />} />
        <Route path="/tax-benifit" element={<TaxBenifit />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/campaign-confirmation" element={<ConfirmationPage />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/edit/:id" element={<EditCampaign />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/withdraw/:id" element={<WithdrawFunds />} />
        <Route path="/more/:id" element={<MoreDetails />} />
        <Route path="/upload-documents" element={<UploadDocuments />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
