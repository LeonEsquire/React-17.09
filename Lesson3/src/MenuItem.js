import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuItem extends Component {
  render() {
    return (
      <li>
        <a href={this.props.href}>{this.props.children}</a>
      </li>
    );
  }
}

MenuItem.defaultProps = {
  children: "Главная",
  href: "/"
}

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default MenuItem;