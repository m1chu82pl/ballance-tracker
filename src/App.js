import React from 'react'; //imr
import Header from './components/Header.jsx'
import Balance from './components/Balance.jsx'
import IncomeExpeses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'; 
import AddTransaction from './components/AddTransaction.jsx';

import { GlobalProvider } from './context/GlobalState';

import './App.scss';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance />
        <IncomeExpeses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;