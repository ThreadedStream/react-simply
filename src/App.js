import React from 'react';
import Modal from 'react-modal';
import ReactDom from 'react-dom';
//import StockChart from './StockChart'
import {Line} from 'react-chartjs-2'
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

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

 
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
        <input type="text" width="200px" height="10%" placeholder="Enter stock name"/>
        <button>Search</button>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal">
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
