import React from 'react';

const Header = (props) => (
  <div className="header">
    <h1 className="header__title">{props.title}</h1>
    <h2 className="header__subtitle">{props.subTitle}</h2>
  </div>
);

Header.defaultProps = {
  title: 'To-do List'
}

export default Header