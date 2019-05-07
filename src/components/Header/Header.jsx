import React, { Component } from 'react'
import className from './header.scss'
import { NavLink } from 'dva/router'
import logoicon from '../../assets/images/logo.a7995ad.svg'
import AddGroupsButton from './AddGroupsButton/AddGroupsButton'
import { connect } from 'dva'
import SignUp from '../Sign/SignUp'
class Header extends Component {
  constructor(...args) {
    super(...args)
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
      userInfoShow: false, //more搜索下拉
      isShowDropbox: false, //用户信息下拉
      titleActivePath: '/welcome',
      isShowSignUp: true
    }
  }
  //切换显示注册界面
  toggleSignup=()=>{
    this.setState({
      isShowSignUp: !this.state.isShowSignUp
    })
  }
  doSearch = e => {
    e.preventDefault()
    //调用搜索接口
    console.log(this.state.searchInputText)
  }
  //切换显示用户中心
  toggleMoreDropBox = e => {
    e.nativeEvent.stopImmediatePropagation()
    let { userInfoShow } = this.state
    this.setState({ userInfoShow: !userInfoShow, isShowDropbox: false })
  }
  //切换显示更多
  toggleUserDropBox = e => {
    e.nativeEvent.stopImmediatePropagation()
    let { isShowDropbox } = this.state
    this.setState({ isShowDropbox: !isShowDropbox, userInfoShow: false })
  }
  //渲染用户信息部分，分登陆和不登录部分
  renderUser() {
    let { userInfoShow, isShowDropbox } = this.state
    let { userinfo, isLoginIn } = this.props.userData.userinfo
    if (isLoginIn) {
      // 登陆状态
      return (
        <React.Fragment>
          <div className={className.addbtn}>
            <AddGroupsButton
              type={this.state.addGroupButtonType}
              isShowDropbox={isShowDropbox}
              cb={this.toggleUserDropBox}
            />
          </div>
          <div className={className.notification}>
            <a href='https://juejin.im/notification'>
              <i className='iconfont icon-lingdang' />
            </a>
          </div>
          {/* 头像及下拉菜单 */}
          <div className={className.userinfo}>
            {/* 头像 */}
            <div className={className.picbox} onClick={this.toggleMoreDropBox}>
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
                  <NavLink to={'/user/' + userinfo.id}>
                    <i className='iconfont icon-wodedangxuan' />
                    我的主页
                  </NavLink>
                </div>
                <div className={className.menu_item}>
                  <NavLink to={'/user/' + userinfo.id + '/likes'}>
                    <i className='iconfont icon-zan' />
                    我赞过的
                  </NavLink>
                </div>
                <div className={className.menu_item}>
                  <NavLink to={'/user/' + userinfo.id + '/collections'}>
                    <i className='iconfont icon-iconfontxingxing' />
                    我的收藏集
                  </NavLink>
                </div>
                <div className={className.menu_item}>
                  <NavLink to={'/user/' + userinfo.id + '/books?type=bought'}>
                    <i className='iconfont icon-gouwucheman' />
                    已购
                  </NavLink>
                </div>
                <div className={className.menu_item}>
                  <NavLink to='/subscribe/subscribed'>
                    <i className='iconfont icon-biaoqian' />
                    标签管理
                  </NavLink>
                </div>
              </div>
              <div className={className.menu_group}>
                <div className={className.menu_item}>
                  <NavLink to='/user/settings'>
                    <i className='iconfont icon-shezhi' />
                    设置
                  </NavLink>
                </div>
                <div className={className.menu_item}>
                  <NavLink to={'/user/' + userinfo.id + '/likes'}>
                    <i className='iconfont icon-guanyuwomen' />
                    关于
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      //非登录状态
      return (
        <React.Fragment>
          <a
            href='https://juejin.im/editor/drafts/new'
            className={className.write}
          >
            <i
              className='iconfont icon-wenzhang'
              style={{ marginRight: '3px' }}
            />
            写文章
          </a>
          <div className={className.login}>
            |
            <span style={{ marginLeft: '12px', marginRight: '5px' }}>登录</span>
            ·<span style={{ marginLeft: '5px' }} onClick={this.toggleSignup}>注册</span>
          </div>
        </React.Fragment>
      )
    }
  }

  render() {
    console.log(this.props)
    let { titles, searchInputText, isFocus ,isShowSignUp} = this.state
    return (
      <header className={className.header}>
        <SignUp isShowSignUp={isShowSignUp} toggleSignup={this.toggleSignup}/>
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
              )
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
              <span onClick={this.doSearch} />
            </form>
          </div>
          <div className={className.usermsg}>{this.renderUser()}</div>
        </div>
      </header>
    )
  }
  routeTo = path => {
    this.props.history.push(path)
  }
  componentDidMount() {
    document.addEventListener('click', e => {
      this.setState({ userInfoShow: false, isShowDropbox: false })
    })
  }
}

export default connect(state => {
  return { userData: state }
})(Header)
