import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from './router/AppRouter';
import Loading from './components/Loading/Loading';

function App() {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2700)
  }, [])
  return (
    <>
    {loading === false ? (
    <div>
     <Router>
     <AppRouter />
     </Router>
  </div>
        ) : (
          <Loading />
        )}
      </>
  );
}

export default App;
