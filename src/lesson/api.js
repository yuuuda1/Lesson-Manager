/* eslint no-undef: off */
export const allLessons = word => {
  const uri = `api/lessons/search?search_word=${word}`
  return axios.get(uri)
}

export const myTimetable = () => {
  const uri = 'api/timetables'
  const token = sessionStorage.getItem('_lesson_manager_token')
  return axios.get(uri, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const getTimetable = id => {
  const uri = `api/timetables/${id}`
  const token = sessionStorage.getItem('_lesson_manager_token')
  return axios.get(uri, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const postTimetables = timetable => {
  const uri = 'api/timetables'
  const token = sessionStorage.getItem('_lesson_manager_token')
  return axios.post(uri, {
    lessons: timetable
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const putTimetables = action => {
  const uri = `api/timetables/${action.id}`
  return axios.put(uri, action.timetable)
}

export const deleteTimetables = id => {
  const uri = `api/timetables/${id}`
  return axios.delete(uri)
}
