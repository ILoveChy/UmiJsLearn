import React from 'react';
import LoginFormContainer from '../components/containers/LoginFormContainer';
export default function login() {
  return (
    <div>
      <LoginFormContainer
        onLogin={(loginId, loginPwd) => {
          console.log(loginId, loginPwd);
        }}
      />
    </div>
  );
}
