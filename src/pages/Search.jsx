import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  state = {
    artist: '',
    isDisable: true,
    loading: false,
    result: [],
    serachedArtist: '',
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ artist: value });
    const minChar = 2;
    if (value.length >= minChar) {
      this.setState({ isDisable: false });
    } else { this.setState({ isDisable: true }); }
  };

  handleClick = async () => {
    const { artist } = this.state;
    this.setState({
      loading: true,
      serachedArtist: artist,
    }, async () => {
      this.setState({ result: [...await searchAlbumsAPI(artist)] });
      this.setState({
        artist: '',
        loading: false,
      });
      const { history } = this.props;
      history.push('/search');
    });
  };

  render() {
    const { isDisable, loading, result,
      artist, serachedArtist } = this.state;
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
                    value={ artist }
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
        {serachedArtist && (
          <p>{`Resultado de álbuns de: ${serachedArtist}`}</p>)}
        {result[0] ? result.map((ab) => (
          <div key={ ab.collectionId }>
            <img src={ ab.artworkUrl100 } alt={ ab.collectionName } />
            <p>{ab.collectionName}</p>
            <p>{ab.artistName}</p>
            <Link
              to={ `/album/${ab.collectionId}` }
              data-testid={ `link-to-album-${ab.collectionId}` }
            >
              {' '}
              {ab.collectionName}
            </Link>
          </div>
        ))
          : (
            <p>Nenhum álbum foi encontrado</p>
          )}

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
