import React from 'react';
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
        {loading ? <Loading /> : <h3 data-testid="header-user-name">{user}</h3>}
      </header>
    );
  }
}

export default Header;
