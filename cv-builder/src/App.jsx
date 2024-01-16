import Header from "./components/Header";
import FilterableCVTable from "./components/FilterableCVTable";
import CV from "./components/CV";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <FilterableCVTable />
      <CV />
      <Footer />
    </>
  );
}
