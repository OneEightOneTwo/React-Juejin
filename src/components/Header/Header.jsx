import React, { Component } from 'react';
import className from './header.scss';
import { NavLink } from 'dva/router';
import logoicon from '../../assets/images/logo.a7995ad.svg';
import AddGroupsButton from './AddGroupsButton/AddGroupsButton';
import { connect } from 'dva';
class Header extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      titles: [
        { name: '首页', path: '/welcome' },
        { name: '沸点', path: '/pins' },
        { name: '话题', path: '/topics' },
        { name: '小册', path: '/books' },
        { name: '活动', path: '/events' },
        {
          name: '有奖征文',
          link:
            'https://juejin.im/e/agora?utm_campaign=agora&utm_source=juejin.im&utm_medium=header'
        }
      ],
      searchInputText: '',
      isFocus: false,
      addGroupButtonType: '0',
      userInfoShow: false,
      titleActivePath: '/welcome'
    };
  }
  doSearch = e => {
    e.preventDefault();
    //调用搜索接口
    console.log(this.state.searchInputText);
  };
  //渲染用户信息部分，分登陆和不登录部分
  renderUser() {
    let { userInfoShow } = this.state;
    let { userinfo, isLoginIn } = this.props.userData.userinfo;
    if (isLoginIn) {
      return (
        // 登陆状态
        <React.Fragment>
          <div className={className.addbtn}>
            <AddGroupsButton type={this.state.addGroupButtonType} />
          </div>
          <div className={className.notification}>
            <a href='https://juejin.im/notification'>
              <i className='iconfont icon-lingdang' />
            </a>
          </div>
          {/* 头像及下拉菜单 */}
          <div className={className.userinfo}>
            {/* 头像 */}
            <div
              className={className.picbox}
              onClick={() => {
                this.setState({ userInfoShow: !userInfoShow });
              }}
            >
              <div className={className.avatar}>
                <img src={userinfo.avatar} alt='用户头像' />
              </div>
            </div>
            {/* 下拉 */}
            <div
              className={className.dropbox}
              style={userInfoShow ? { display: 'block' } : { display: 'none' }}
            >
              <div className={className.menu_group}>
                <div className={className.menu_item}>
                  <a href='https://juejin.im/editor/drafts/new'>
                    <i className='iconfont icon-combinedshapecopy2' />
                    写文章
                  </a>
                </div>
                <div className={className.menu_item}>
                  <a href='https://juejin.im/editor/drafts'>
                    <i className='iconfont icon-caogaoxiang' />
                    草稿
                  </a>
                </div>
              </div>
              <div className={className.menu_group}>
                <div className={className.menu_item}>
                  <NavLink to='/user'>
                    <i className='iconfont icon-combinedshapecopy2' />
                    我的主页
                  </NavLink>
                </div>
                <div className={className.menu_item}>
                  <a href='https://juejin.im/editor/drafts'>
                    <i className='iconfont icon-caogaoxiang' />
                    草稿
                  </a>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      //非登录状态
    }
  }

  render() {
    let { titles, searchInputText, isFocus } = this.state;
    return (
      <header className={className.header}>
        <div className='container'>
          <h1 className={className.logo}>
            <NavLink to='/'>
              <img src={logoicon} alt='logo' />
            </NavLink>
          </h1>
          <ul className={className.nav}>
            {titles.map((title, index) => {
              return (
                <li className={className.nav_item} key={index}>
                  {title.link ? (
                    <a href={title.link}>{title.name}</a>
                  ) : (
                    <NavLink
                      to={title.path}
                      activeStyle={{ color: '#007fff' }}
                      key={index}
                    >
                      {title.name}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
          <div className={className.search}>
            <form
              onSubmit={this.doSearch}
              className={isFocus ? className.active : ''}
            >
              <input
                type='text'
                placeholder='搜索更新啦'
                value={searchInputText}
                onChange={e =>
                  this.setState({ searchInputText: e.target.value })
                }
                onFocus={e => this.setState({ isFocus: true })}
                onBlur={e => this.setState({ isFocus: false })}
              />
              <span />
            </form>
          </div>
          <div className={className.usermsg}>{this.renderUser()}</div>
        </div>
      </header>
    );
  }
  routeTo = path => {
    this.props.history.push(path);
  };
  componentDidMount() {}
}

export default connect(state => {
  return { userData: state };
})(Header);
