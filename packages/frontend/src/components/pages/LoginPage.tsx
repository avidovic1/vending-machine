import React from 'react'
import { useHistory } from 'react-router-dom'

import LoginForm from '../core/LoginForm'

function LoginPage(): JSX.Element {
  const history = useHistory()

  const onLoginSuccess = () => {
    history.push('/')
  }

  return (
    <div>
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </div>
  )
}

export default LoginPage
