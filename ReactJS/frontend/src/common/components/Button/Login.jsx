import { GoogleLogin } from 'react-google-login';
// import { refreshToken } from '../../../utils/refreshToken';

const clientId = '965826335922-doca1ukp0uq4is5qe08r88j6i49on1cc.apps.googleusercontent.com';

const Login = ({ onSuccessLogin, onFailureLogin }) => {
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccessLogin}
        onFailure={onFailureLogin}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}

export default Login
