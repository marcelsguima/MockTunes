import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <p>Login Page</p>
        {/* <form>
          <label htmlFor="cardName">
            Nome da carta:
            <input
              id="cardName"
              data-testid="name-input"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </form> */}
      </div>
    );
  }
}

export default Login;
