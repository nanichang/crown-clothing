import React from 'react';
import './custom-button.component.styles.scss';

const Button = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>{ children }</button>
);

export default Button;