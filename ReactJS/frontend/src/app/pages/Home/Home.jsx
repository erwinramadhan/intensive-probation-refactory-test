import Login from '../../../common/components/Button/Login';

import styles from './Home.module.scss';

const Home = ({ onSuccessLogin, onFailureLogin }) => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className={styles.logoContainer}>
        <img className="img-fluid" src="https://www.kotakode.com/static/media/kotakode-logo.6f6a3051.png" alt="" />
      </div>
      <Login 
        onSuccessLogin={onSuccessLogin}
        onFailureLogin={onFailureLogin}
      />
    </div>
  )
}

export default Home
