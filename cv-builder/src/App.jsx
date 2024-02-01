// React
import { useState } from "react";
// CSS
import appCSS from "./styles/App.module.css";
// Components
import Header from "./components/Header";
import CVHeader from "./components/CVHeader";
import CVList from "./components/CVList";
import CreateCV from "./components/CreateCV";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataContext";

export default function App() {
  // CV Create Mode State
  const [isCreating, setIsCreating] = useState(false);
  const handleCreateClick = () => setIsCreating(!isCreating);

  // Modal States
  const [hidden, setHidden] = useState(false);
  const onModalClick = () => setHidden(!hidden);

  return (
    <>
      <Header />
      <DataProvider>
        <div className={appCSS.wrapper}>
          {!isCreating ? (
            <>
              <CVHeader handleCreateClick={handleCreateClick} />
              <CVList handleCreateClick={handleCreateClick} />
            </>
          ) : (
            <>
              <CVHeader
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
