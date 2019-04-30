export default {
  namespace: 'userinfo',
  state: {
    isLoginIn: true,
    userinfo: {
      id:34123123,
      name: '',
      avatar:
        'https://mirror-gold-cdn.xitu.io/168e097c7aadf42d28f?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    }
  },
  effects: {
    //登陆
    *signIn({ payload }, { call, put }) {
      yield call('');
      yield put({ type: 'save' });
    },
    //退出
    *signOut({ payload }, { call, put }) {},
    //检测登陆状态
    *loginStatus({ payload }, { call, out }) {}
  }
};
