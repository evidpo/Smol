import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './services/auth';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ExcelUpload from './components/ExcelUpload';
import XmlGenerator from './components/XmlGenerator';
import './styles/App.css';

const App: React.FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          {user && (
            <>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/excel-upload" component={ExcelUpload} />
              <Route path="/xml-generator" component={XmlGenerator} />
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default App;