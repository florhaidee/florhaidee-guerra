import React, { useState }  from 'react';
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'
import './index.css';
function App() {
  const [navigation] = useState([
    { name: 'About me'},
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' }
  ]);
  const [currentNavigation, setCurrentNavigation] = useState(navigation[0]);
  return (
    <div>
      <Header 
        navigation={navigation}
        setCurrentNavigation={setCurrentNavigation}
        currentNavigation={currentNavigation}
      ></Header>
      <main>
        {(() => {
          switch (currentNavigation.name) {
            case 'Portfolio':
              return <Portfolio />;
            case 'Contact':
              return <ContactForm />;
            case 'Resume':
              return <Resume />;
            default:
              return <About />;
          }
        })()}
      </main>
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;
