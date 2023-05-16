import React from 'react';
import './App.css';
import Nav from "./Components/Nav"
import Main from "./Components/main"
import Footer from "./Components/Footer"

function App() {
  return (
    <div role="document">
      <React.Fragment>
        <Nav role="navigation"/>
        <Main role="main"/>
        <Footer role="navigation"/>
      </React.Fragment>
    </div>
  );
}

export default App;