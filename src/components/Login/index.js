import Cookies from 'js-cookie'
import {useContext, useState} from 'react'
import {Div1, Div2, Img, Label, Input, Button, Form} from './styledcomponents'
import ThemeContext from '../../context/ThemeContext'

const Login = prop => {
  const history = prop
  const {isDark} = useContext(ThemeContext)
  const [showPassword, setShowPassword] = useState(false)
  const [un, setun] = useState('')
  const [ps, setps] = useState('')
  const [errorMsg, seterrorMsg] = useState('')

  const toggleShowPassword = () => {
    setShowPassword(p => !p)
  }

  const onChangeun = p => {
    setun(p.target.value)
  }

  const onChangeps = p => {
    setps(p.target.value)
  }

  const submit = async p => {
    p.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const body = {
      username: un,
      password: ps,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
    }
    const res = await fetch(url, options)
    const response = await res.json()
    if (res.ok) {
      Cookies.set(response.jwt_token, 'jwt_token', {expires: 1})
      history.push('/')
    } else {
      seterrorMsg(`*${response.error_msg}`)
    }
  }

  return (
    <Div1 props={isDark}>
      <Div2 props={isDark}>
        <Img
          props={isDark}
          src={
            isDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
          alt=""
        />
        <Form onSubmit={submit}>
          <Label props={isDark} htmlFor="un">
            USERNAME
          </Label>
          <Input
            props={isDark}
            onChange={onChangeun}
            placeholder="Username"
            id="un"
            type="text"
          />
          <Label props={isDark} htmlFor="ps">
            PASSWORD
          </Label>
          <Input
            props={isDark}
            placeholder="Password"
            id="ps"
            onChange={onChangeps}
            type={showPassword ? 'text' : 'password'}
          />
          <div>
            <input
              type="checkbox"
              onChange={toggleShowPassword}
              checked={showPassword}
              id="sp"
            />
            <Label props={isDark} htmlFor="sp">
              Show Password
            </Label>
          </div>
          <Button type="submit">Login</Button>
          <p style={{color: 'red'}}>{errorMsg}</p>
        </Form>
      </Div2>
    </Div1>
  )
}

export default Login
