import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import './App.css';

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
      <BrowserRouter>
        <Switch>
          <div id="demo">
            <Route exact path="/register" component={CreateAccount} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/" component={Home} /> */}
          </div>
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
