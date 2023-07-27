import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home'
import About from './components/About';
import Technologies from './components/Technologies';
import Work from './components/Work';
import Contact from './components/Contact';


function App() {
    return (
        <div className='App'>
            <Navbar />
            <Home />
            <About />
            <Technologies />
            <Work />
            <Contact />
        </div>
    );
}

export default App;