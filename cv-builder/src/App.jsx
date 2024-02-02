// React
import { useState, useContext } from "react";
import { DataProvider } from "./context/DataContext";
// CSS
import appCSS from "./styles/App.module.css";
// Components
import Header from "./components/Header";
import CVHeader from "./components/CVHeader";
import CVList from "./components/CVList";
import CreateCV from "./components/CreateCV";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  // State initialisation
  const [isCreating, setIsCreating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [previewSrc, setPreviewSrc] = useState("");

  // Handlers
  const handleCreateClick = () => setIsCreating(!isCreating);
  const handleCvPreview = (src) => {
    setPreviewSrc(src);
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <DataProvider>
        <div className={appCSS.wrapper}>
          {!isCreating ? (
            <>
              <CVHeader handleCreateClick={handleCreateClick} />
              <CVList
                handleCreateClick={handleCreateClick}
                handleCvPreview={handleCvPreview}
              />
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
        {showModal && (
          <Modal visible={showModal} onHide={() => setShowModal(false)}>
            <Modal.Content>
              <img src={previewSrc} alt="CV Preview" />
            </Modal.Content>
            <Modal.Controls>
              <button onClick={() => setShowModal(false)}>Close</button>
            </Modal.Controls>
          </Modal>
        )}
      </DataProvider>
      <Footer />
    </>
  );
}
