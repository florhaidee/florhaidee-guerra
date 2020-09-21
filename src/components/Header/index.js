import React from 'react';
import Nav from '../Nav';

function Header(props) {
  const {
    navigation = [],
    setCurrentNavigation,
    currentNavigation
  } = props;

  return (
    <header className="flex-row px-1">
        <h1>
          <a data-testid="link" href="/">
            Florhaidee Guerra
          </a>
        </h1>
        <Nav
          navigation={navigation}
          setCurrentNavigation={setCurrentNavigation}
          currentNavigation={currentNavigation}
        ></Nav>
    </header>
  );
}

export default Header;
