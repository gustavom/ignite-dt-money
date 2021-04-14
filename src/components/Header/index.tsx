import logo from '../../assets/logo.svg';
import Modal from 'react-modal'
import { Container, Content } from "./styles";
import { useState } from 'react';

export function Header(){
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionOpen(true)
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionOpen(false)
  }
  return(
    <Container>
      <Content>
      <img src={logo} alt="dt money"/>
      <button type="button" onClick={handleOpenNewTransactionModal}>Nova Transação</button>
      <Modal isOpen={isNewTransactionOpen} onRequestClose={handleCloseNewTransactionModal}>
        Nova transação:
      </Modal>
      </Content>
    </Container>
  )
}