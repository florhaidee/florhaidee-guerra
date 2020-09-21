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
          <a data-testid="link" href="/">
            Florhaidee Guerra
          </a>
        <Nav
          navigation={navigation}
          setCurrentNavigation={setCurrentNavigation}
          currentNavigation={currentNavigation}
        ></Nav>
    </header>
  );
}

export default Header;
