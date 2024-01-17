// React
import { useState } from "react";
// CSS
import appCSS from "./styles/App.module.css";
// Components
import Header from "./components/Header";
import FilterableCVTable from "./components/FilterableCVTable";
import CV from "./components/CV";
import Footer from "./components/Footer";

export default function App() {
  const [isCreating, setIsCreating] = useState(false);

  function handleCreateClick() {
    isCreating ? setIsCreating(false) : setIsCreating(true);
  }

  return (
    <>
      <Header />
      <div className={appCSS.wrapper}>
        {!isCreating ? (
          <>
            <FilterableCVTable handleCreateClick={handleCreateClick} />
            <CV handleCreateClick={handleCreateClick} />
          </>
        ) : (
          <FilterableCVTable
            isCreating={isCreating}
            handleCreateClick={handleCreateClick}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
