import { routerRedux } from 'dva';

export default {
  state: null, //默认为null,表示没有任何用户登录
  subscriptions: {
    syncLocalstorage({ dispatch }) {
      let loginId = localStorage.getItem('loginId');
      if (loginId) {
        dispatch({ type: 'setLoginUser', payload: loginId });
      }
    },
  },
  reducers: {
    setLoginUser(state, action) {
      return action.payload;
    },
  },
  effects: {
    *login({ payload }, { put }) {
      const { loginId, loginPwd } = payload;
      if (loginId === 'admin' && loginPwd === '123123') {
        //登陆成功
        yield put({ type: 'setLoginUser', payload: loginId });
        localStorage.setItem('loginId', loginId);
        //跳转页面
        yield put(routerRedux.push('/'));
      } else {
        window.alert('账号密码错误');
      }
    },
    *loginOut(action, { put }) {
      localStorage.removeItem('loginId');
      yield put({ type: 'setLoginUser', payload: null });
    },
  },
};
