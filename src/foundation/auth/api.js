const login = (username, password) => {
  const uri = 'oauth/token'
  return axios.post(uri, {
    client_id: 2,
    client_secret: 'LNIIYa89kNCSUmwQty0mst26irw2MdWX0TMbmTnl',
    username: username,
    password: password,
    grant_type: 'password',
    scope: ''
  })
}

export default login
