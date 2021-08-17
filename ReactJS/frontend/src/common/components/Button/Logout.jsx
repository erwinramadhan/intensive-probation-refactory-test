import { GoogleLogout } from "react-google-login";

const clientId = '965826335922-doca1ukp0uq4is5qe08r88j6i49on1cc.apps.googleusercontent.com';

const Logout = ({ onSuccessLogout }) => {

  return (
    <div>
      <GoogleLogout 
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccessLogout}
      ></GoogleLogout>
    </div>
  )
}

export default Logout
