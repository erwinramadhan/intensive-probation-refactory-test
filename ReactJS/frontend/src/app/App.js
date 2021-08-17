import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { setUserToken, getUserToken, removeUserToken } from '../helpers/localStorageHelpers';


import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const [userProfile, setUserProfile] = useState({})

  const userToken = getUserToken();

  const history = useHistory();


  const onSuccessLogin = (res) => {
    setUserToken(res.accessToken)
    setUserProfile(res.profileObj)
    history.push('/dashboard')
  }

  const onFailureLogin = (res) => {
    console.log('[Login Failed] res:', res);
  }

  const onSuccessLogout = () => {
    removeUserToken();
    history.replace('/');
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          {!!userToken ?
            (<Redirect to="/dashboard" />)
          : (
            <Home 
            onSuccessLogin={onSuccessLogin}
            onFailureLogin={onFailureLogin}
            />)
          }
        </Route>
        <Route exact path='/dashboard'>
          {!userToken ? (<Redirect to='/' />) : (<Dashboard userProfile={userProfile} onSuccessLogout={onSuccessLogout}/>)}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
