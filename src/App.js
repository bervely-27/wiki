import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./pages/Introduction";
import WebsiteSecurity from "./pages/WebsiteSecurity";
import Faq from "./pages/Faq";
import CcUsage from "./pages/CcUsage";
import UnderstandLimits from "./pages/UnderstandLimits";
import UnderstandCaraceteristics from "./pages/UnderstandCaraceteristics";
import UnderstandSecurity from "./pages/UnderstandSecurity";
import CheckerUsage from "./pages/CheckerUsage";
import Deposit from "./pages/Deposit";
import CryptoUsage from "./pages/CryptoUsage";
import GetCrypto from "./pages/GetCrypto";
import Confidentiality from "./pages/Confidentiality";
import UseWebsiteVPN from "./pages/UseWebsiteVPN";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/website-security" element={<WebsiteSecurity />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cc-usage" element={<CcUsage />} />
        <Route path="/understand-limits" element={<UnderstandLimits />} />
        <Route path="/understand-securities" element={<UnderstandSecurity />} />
        <Route
          path="/understand-caracteristics"
          element={<UnderstandCaraceteristics />}
        />
        <Route path="/checker-usage" element={<CheckerUsage />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/crypto-usage" element={<CryptoUsage />} />
        <Route path="/get-crypto" element={<GetCrypto />} />
        <Route path="/confidentiality" element={<Confidentiality />} />
        <Route path="/use-website-vpn" element={<UseWebsiteVPN />} />
      </Routes>
    </Router>
  );
}

export default App;
