import { connect } from 'dva';
import LoginForm from '../LoginForm';

const mapDispatchToProps = dispatch => ({
  onLogin(loginId, loginPwd) {
    dispatch({ type: 'loginUser/login', payload: { loginId, loginPwd } });
  },
});

export default connect(null, mapDispatchToProps)(LoginForm);
