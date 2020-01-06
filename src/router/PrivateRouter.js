import React from 'react';
import { connect, routerRedux } from 'dva';
function PrivateRouter(props) {
  if (props.loginId) {
    //已经登陆
    return props.children;
  } else {
    //未登录
    props.onNotLogin && props.onNotLogin();
    return null;
  }
  return <div></div>;
}
const mapStateToProps = state => ({
  loginId: state.loginUser,
});
const mapDispatchToProps = dispatch => ({
  onNotLogin() {
    dispatch(routerRedux.push('/login'));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter);
