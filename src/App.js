import React, { useState }  from 'react';
import Header from './components/Header'
import About from './components/About'

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
          {/* // {currentNavigation === navigation[0] ?  */}
          <About></About>
          {/* // // currentNavigation === navigation[1] ? <Portfolio ></Portfolio>:
          // // currentNavigation === navigation[2] ? <Resume ></Resume>:
          // // <Contact></Contact>} */}
      </main>
    </div>
  );
}

export default App;
