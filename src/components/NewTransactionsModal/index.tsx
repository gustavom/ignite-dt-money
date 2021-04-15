import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

Modal.setAppElement('#root');

interface NewTransactionsModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionsModal({isOpen, onRequestClose}: NewTransactionsModalProps){
  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="Close" />
        </button>
       <Container>
         <h2>Cadastrar Transação:</h2>
         <input 
          placeholder="Título"
          />
         <input 
          type="number"
          placeholder="Valor"
          />
         <input 
          placeholder="Categoria"
          />
          <button type="submit">Cadastrar</button>
       </Container>
    </Modal>
  )
}