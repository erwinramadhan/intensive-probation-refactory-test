const setUserToken = (token) => {
  return localStorage.setItem('userToken', token);
}

const getUserToken = () => {
  return localStorage.getItem('userToken');
}

const removeUserToken = () => {
  return localStorage.removeItem('userToken');
}

export { setUserToken, getUserToken, removeUserToken };