import React from 'react';
import Modal from 'react-modal';
import ReactDom from 'react-dom';
import StockChart from './StockChart'
import './App.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
 
function App(){
  var subtitle;
  var closeButton;
  var submitButton;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
    closeButton.style.marginLeft = '30%';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Add stock</h2>
          <form>
            <input type="text" id="stockName" placeholder="Enter name of a stock" /><br />
            <input type="text" id="date" placeholder="Enter date" /><br />
            <input type="number" id="price" placeholder="Enter price for a" /><br />
          </form>
          <button ref={_submitButton => (submitButton = _submitButton)}>Submit</button>
          <button ref={_closeButton => (closeButton = _closeButton)} onClick={closeModal}>Close</button>
        </Modal>
        
      </div>
    );
}

export default App;
