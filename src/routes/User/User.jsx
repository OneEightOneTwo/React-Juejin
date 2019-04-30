import React, { Component } from 'react';
import { connect } from 'dva';
class User extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }
  render() {
      console.log(this.props);
    let {userinfo} = this.props.userData.userinfo;
    return <div>这是用户{userinfo.id}界面</div>;
  }
}

export default connect(state => {
  return { userData: state };
})(User);
