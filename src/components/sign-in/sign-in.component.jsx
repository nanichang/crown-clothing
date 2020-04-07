import React from 'react';
import './sign-in.component.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = ev => {
    ev.preventDefault();
  }

  _handleChange = ev => this.setState({[ev.target.name]: ev.target.value});

  render() {
    return(
      <div className="sign-in">
        <h2>I already have an account!</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            value={this.state.email} 
            handleChange={this._handleChange}
            label="Email"
            required />
          <FormInput 
            type="password" 
            name="password" 
            value={this.state.password} 
            handleChange={this._handleChange}
            label="Password"
            required />

          <Button type="submit">Sign in </Button>
        </form>
      </div>
    )
  }
}

export default SignIn;