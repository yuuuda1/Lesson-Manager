/* eslint no-undef: off */
export const allUsers = word => {
    const uri = 'api/users/search?search_word=' + word
    return axios.get(uri)
}

export const getUser = id => {
    const uri = 'api/users/' + id
    const token = sessionStorage.getItem('_lesson_manager_token')
    return axios.get(uri, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    })
}