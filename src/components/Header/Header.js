import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.scss';
import Container from './../Container/Container.js';
import Icon from '../Icon.js';
import { settings } from '../../data/dataStore';
import Search from '../Search/Search';

class Header extends React.Component {
  static propTypes = {
    icon: PropTypes.node,
  }
  static defaultProps = {
    icon: settings.defaultHeaderIcon,
  }
  render() {
    const { icon } = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper} >
            <Link to='/' className={styles.logo}>
              <Icon name={icon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }

}

export default Header;