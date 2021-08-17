import Logout from "../../../common/components/Button/Logout"

const Dashboard = ({ userProfile, onSuccessLogout }) => {
  console.log(userProfile)
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <div className="d-flex flex-column align-items-center mt-5">
        <img className="rounded-circle" src={userProfile.imageUrl} alt="" />
        <h1>{userProfile.name}</h1>
        <p>Email: {userProfile.email}</p>
      </div>

      <Logout onSuccessLogout={onSuccessLogout} />
    </div>
  )
}

export default Dashboard
