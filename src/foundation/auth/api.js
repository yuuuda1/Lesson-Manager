const login = (username, password) => {
  const uri = 'oauth/token'
  return axios.post(uri, {
    client_id: 2,
    client_secret: 'VcNoWKZB5LTJp38oVvo5JKi11z36gNAtUFO6j6g0',
    username: username,
    password: password,
    grant_type: 'password',
    scope: ''
  })
}

export default login
