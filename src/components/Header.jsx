import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  state = { user: '', loading: true };

  componentDidMount() {
    this.showUser();
  }

  showUser = async () => {
    const userGet = await getUser();
    this.setState({ user: userGet.name, loading: false });
  };

  render() {
    const { user, loading } = this.state;
    return (
      <header data-testid="header-component">
        <nav>
          <Link data-testid="link-to-search" to="/search">Search</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
          <Link data-testid="link-to-profile" to="/profile">Profile</Link>
        </nav>
        {loading ? <Loading /> : <h3 data-testid="header-user-name">{user}</h3>}
      </header>
    );
  }
}

export default Header;
