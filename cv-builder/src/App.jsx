// React
import { useState } from "react";
// CSS
import appCSS from "./styles/App.module.css";
// Components
import Header from "./components/Header";
import FilterableCVTable from "./components/FilterableCVTable";
import CVList from "./components/CVList";
import CreateCV from "./components/CreateCV";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataContext";

export default function App() {
  const [isCreating, setIsCreating] = useState(false);

  function handleCreateClick() {
    isCreating ? setIsCreating(false) : setIsCreating(true);
  }

  return (
    <>
      <Header />
      <DataProvider>
        <div className={appCSS.wrapper}>
          {!isCreating ? (
            <>
              <FilterableCVTable handleCreateClick={handleCreateClick} />
              <CVList handleCreateClick={handleCreateClick} />
            </>
          ) : (
            <>
              <FilterableCVTable
                isCreating={isCreating}
                handleCreateClick={handleCreateClick}
              />
              <CreateCV />
            </>
          )}
        </div>
      </DataProvider>
      <Footer />
    </>
  );
}
