import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
// import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  state = {
    album: [],
  };

  // getMusic = async () => {
  //   const { match: { params: { id } } } = this.props;
  //   const musics = await this.getMusics(id);
  //   this.setState({ album: musics });
  // };

  render() {
    const { album } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        {Loading ? <Loading /> : (
          <div>
            <p data-testid="artist-name">
              {' '}
              {album.length > 0 && album[0].artistName}
            </p>
            <p data-testid="album-name">{album.length > 0 && album[0].colletctionName}</p>
            <div />
            <ul>
              {
                album.filter((_, index) => index !== 0).map((element, index) => (
                  <MusicCard
                    key={ index }
                    onInpuntChanger={ this.onInpuntChanger }
                    objTrack={ element }
                    localStorageData={ musicFavoritas }
                  />))
              }
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({
    id: PropTypes.string.isRequired }).isRequired }).isRequired,
};

export default Album;
