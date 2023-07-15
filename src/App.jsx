import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import AccountingServices from "./pages/AccountingServices";
import TaxConsulting from "./pages/TaxConsulting";
import FinancialConsulting from "./pages/FinancialConsulting";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="accountant" element={<AccountingServices />} />
          <Route path="tax" element={<TaxConsulting />} />
          <Route path="finance" element={<FinancialConsulting />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contacts" element={<Contact />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
