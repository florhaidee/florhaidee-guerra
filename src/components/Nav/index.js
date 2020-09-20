import React from 'react';

function Nav(props) {
  const {
    navigation = [],
    setCurrentNavigation,
    currentNavigation,
  } = props;

  return (
    <nav>
        <ul className="flex-row">
          {navigation.map((section) => (
            <li
              className={`mx-1 ${
                currentNavigation.name === section.name && `navActive`
                }`}
              key={section.name}
            >
              <span
                onClick={() => {
                  setCurrentNavigation(section)
                }}
              >
                {section.name}
              </span>
            </li>
          ))}
        </ul>
    </nav>
  );
}

export default Nav;
