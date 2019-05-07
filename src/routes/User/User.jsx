import React, { Component } from 'react';
import { Route } from 'dva/router';
import { connect } from 'dva';
import Likes from './Likes/Likes';

class User extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }
  render() {
    console.log(this.props);
    let { userinfo } = this.props.userData.userinfo;
    return (
      <div>
        这是用户{userinfo.id}界面
        <Route path={`${this.props.match.url}/likes`} component={Likes} />
      </div>
    );
  }
}

export default connect(state => {
  return { userData: state };
})(User);
