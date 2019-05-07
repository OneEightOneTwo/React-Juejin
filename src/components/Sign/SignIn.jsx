//登录
import React, { Component } from 'react'
import styles from './SignIn.scss'
class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: 'block',
      name:'',
      phone:'',
      password:'',
    }
  }
  close=()=>{
    this.setState({
      isShow:'none'
    })
  }
  render() {
    return (
      <div className={styles.SignIn} style={{ display: this.props.isShowSignIn ? 'block' : 'none' }}>
        <form>
          <h2>注册 <span onClick={this.props.toggleSignIn}>×</span></h2>
          <input type='text' placeholder='请输入用户名' />
          <input type='text' placeholder='请输入手机号' />
          <input type='text' placeholder='请输入密码(不少于6位)' />
          <button>注册</button>

          <span>已有账号</span>
          <div>
            <p>第三方账号登录</p>
            <div>
              <div>
                <img src='' alt='' />
              </div>
              <div>
                <img src='' alt='' />
              </div>
              <div>
                <img src='' alt='' />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
