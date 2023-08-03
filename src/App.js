import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  state = { userName: '' };

  // handleChange = ({ name, value }) => {
  //   this.setState({
  //     [name]: value,
  //   });
  //   this.enableLoginBtn();
  // };

  // enableLoginBtn = () => {
  //   const minUserLength = 3;
  //   const { userName } = this.state;

  //   checkString = userName.length > minUserLength;
  //   console.log(userName.length);
  // };

  render() {
    const { userName } = this.state;
    return (
      <div>
        <p>TrybeTunes!</p>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={ Login }
              userName={ userName }
            />
            <Route exact path="/search" component={ Search } />
            <Route exact path="/album/:id" component={ Album } />
            <Route exact path="/favorites" component={ Favorites } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            <Route exact path="*" component={ NotFound } />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
