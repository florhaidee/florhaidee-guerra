import React, { useState }  from 'react';
import Header from './components/Header'

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
    </div>
  );
}

export default App;
