import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Login = () => (
  <Form>
    <h1>Login</h1>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type="password" placeholder='Password' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default Login;