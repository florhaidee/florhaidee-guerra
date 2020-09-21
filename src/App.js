import React, { useState }  from 'react';
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactForm from './components/Contact';

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
            default:
              return <About />;
          }
        })()}
      </main>
    </div>
  );
}

export default App;
