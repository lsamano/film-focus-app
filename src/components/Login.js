import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doTheLoginThing} from '../redux/actions'
import { Button, Checkbox, Form } from 'semantic-ui-react';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userLogin = this.state
    this.props.doTheLoginThing(userLogin)
    console.log("Hoi", this.state);
  }

  render() {
    return (
      <Form onSubmit={ event => this.handleSubmit(event) }>
        <h1>Login</h1>
        <Form.Field>
          <label>Username</label>
          <input
            placeholder='Username'
            name="username"
            value={this.state.username}
            onChange={(event) => this.handleChange(event)}
            />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={this.state.password}
            onChange={(event) => this.handleChange(event)}
            />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { doTheLoginThing })(Login);
