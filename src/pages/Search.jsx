import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Search extends React.Component {
  state = {
    name: '',
    isDisable: true,
    loading: false,
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ name: value });
    const minChar = 2;
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

  render() {
    const { searchField, isDisable, loading } = this.state;
    return (
      <div data-testid="page-search">
        Search test
        <Header />

        {
          loading
            ? <Loading />
            : (
              <form>
                <label htmlFor="searchField">
                  artist, album, music...
                  <input
                    id="nameIput"
                    data-testid="search-artist-input"
                    type="text"
                    name="searchField"
                    value={ searchField }
                    onChange={ this.onInputChange }
                  />
                </label>
                <button
                  type="button"
                  name="Pesquisar"
                  data-testid="search-artist-button"
                  disabled={ isDisable }
                  onClick={ this.handleClick }
                >
                  Pesquisar
                </button>
              </form>
            )
        }
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default Search;
