import React, { Component } from 'react';
import className from './header.scss';
import { NavLink } from 'dva/router';
import logoicon from '../../assets/images/logo.a7995ad.svg';
console.log(className);
class Header extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }
  render() {
    return (
      <header className={className.header}>
        <div className='container'>
          <h1 className={className.logo}>
            <NavLink to='/'>
              <img src={logoicon} alt='logo' />
            </NavLink>
          </h1>
          <ul className={className.nav}>
            <li className={className.nav_item}>
              <NavLink to='/welcome' activeClassName={className.active}>
                首页
              </NavLink>
            </li>
            <li className={className.nav_item}>
              <NavLink to='/pins' activeClassName={className.active}>
                沸点
              </NavLink>
            </li>
            <li className={className.nav_item}>
              <NavLink to='/topics' activeClassName={className.active}>
                话题
              </NavLink>
            </li>
            <li className={className.nav_item}>
              <NavLink to='/books' activeClassName={className.active}>
                小册
              </NavLink>
            </li>
            <li className={className.nav_item}>
              <NavLink to='/events' activeClassName={className.active}>
                活动
              </NavLink>
            </li>
            <li className={className.nav_item}>
              <NavLink to='/'>有奖征文</NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
  routeTo = path => {
    this.props.history.push(path);
  };
}

export default Header;
