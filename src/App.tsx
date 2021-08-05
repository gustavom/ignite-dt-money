import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import {Header} from './components/Header';
import { Dashboard } from "./components/Dashboard";
import { NewTransactionsModal } from "./components/NewTransactionsModal";
import { TransactionsProvider} from './hooks/useTransactions'



export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionOpen(true)
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionOpen(false)
  }
  return (
    <TransactionsProvider>
    <GlobalStyle />
    <Header isOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    <Dashboard />
    <NewTransactionsModal
      isOpen={isNewTransactionOpen} onRequestClose={handleCloseNewTransactionModal}
     />
    </TransactionsProvider>
  );
}
