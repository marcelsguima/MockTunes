import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  state = {
    name: '',
    isDisable: true,
    loading: false,
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ name: value });
    const minChar = 3;
    if (value.length >= minChar) {
      this.setState({ isDisable: false });
    } else { this.setState({ isDisable: true }); }
  };

  handleClick = () => {
    const { name } = this.state;
    this.setState({
      loading: true,
    }, async () => {
      await createUser({ name });
      const { history } = this.props;
      history.push('/search');
    });
  };

  // createUser async
  render() {
    const { userName, isDisable, loading } = this.state;

    return (
      <div data-testid="page-login">
        <p>Login Page</p>
        {
          loading
            ? <Loading />
            : (
              <form>
                <label htmlFor="userName">
                  Nome do Usuário:
                  <input
                    id="nameIput"
                    data-testid="login-name-input"
                    type="text"
                    name="userName"
                    value={ userName }
                    onChange={ this.onInputChange }
                  />
                </label>
                <button
                  type="button"
                  name="Entrar"
                  data-testid="login-submit-button"
                  disabled={ isDisable }
                  onClick={ this.handleClick }
                >
                  Entrar
                </button>
              </form>
            )
        }
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default Login;
// valeeu @Joel Morais;
