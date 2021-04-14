import Modal from 'react-modal';

Modal.setAppElement('#root');

interface NewTransactionsModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionsModal({isOpen, onRequestClose}: NewTransactionsModalProps){
  return(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
       New transaction component Nova transação:
    </Modal>
  )
}