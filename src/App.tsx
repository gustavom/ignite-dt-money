import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import {Header} from './components/Header';
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionOpen(true)
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionOpen(false)
  }
  return (
    <>
    <GlobalStyle />
    <Header isOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    <Dashboard />
    <Modal isOpen={isNewTransactionOpen} onRequestClose={handleCloseNewTransactionModal}>
        Nova transação:
      </Modal>
    </>
  );
}
