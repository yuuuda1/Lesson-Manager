const login = (username, password) => {
  const uri = 'oauth/token'
  return axios.post(uri, {
    client_id: 2,
    client_secret: 'dMpISxPH9Dho9OTmoZm59cgrlSaiwHwIPlkhywNK',
    username: username,
    password: password,
    grant_type: 'password',
    scope: ''
  })
}

export default login
