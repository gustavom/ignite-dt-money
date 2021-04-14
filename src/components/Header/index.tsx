import logo from '../../assets/logo.svg';
import { Container, Content } from "./styles";

interface HeaderProps{
  isOpenNewTransactionModal: () => void //quando for passar uma função por props
}

export function Header(props: HeaderProps){
  
  return(
    <Container>
      <Content>
      <img src={logo} alt="dt money"/>
      <button type="button" onClick={props.isOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  )
}