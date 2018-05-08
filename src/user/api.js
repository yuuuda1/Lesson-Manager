export const allUsers = word => {
  const uri = `api/users/search?search_word=${word}`
  return axios.get(uri)
}

export const getUser = id => {
  const uri = `api/users/${id}`
  // const uri = `api/users/profile/${id}`
  const token = sessionStorage.getItem('_lesson_manager_token')
  return axios.get(uri, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const getMe = () => {
  const uri = 'api/users'
  const token = sessionStorage.getItem('_lesson_manager_token')
  return axios.get(uri, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const putMe = (name, email, password) => {
  const uri = 'api/users/me'
  const token = sessionStorage.getItem('_lesson_manager_token')
  return axios.put(uri, {
    name: name,
    email: email,
    password: password
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
