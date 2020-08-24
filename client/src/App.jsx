// import React, { useState, useEffect } from 'react';
import React from 'react';
import { AppContextProvider } from './context/AppContext';
//import Login from './components/Login';
import './App.css';
import CreateAccount from './components/CreateAccount';

const App = () => {
  //   const [serverMessage, setServerMessage] = useState('');

  //   const fetchDemoData = () => {
  //     fetch('/api/demo')
  //       .then((response) => response.json())
  //       .then((data) => setServerMessage(data.message));
  //   };

  // useEffect(fetchDemoData, []);

  return (
    <AppContextProvider>
      <div id="demo">
        {/* <Login /> */}
        <CreateAccount />
      </div>
    </AppContextProvider>
  );
};

export default App;
