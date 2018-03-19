export const allLessons = items => {
  const uri = 'api/lessons/search'
  return axios.get(uri, {
    params : items
  })
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

export const putTimetables = timetable => {
  const uri = 'api/timetables'
  const token = sessionStorage.getItem('_lesson_manager_token')
  return axios.put(uri, {
    lessons: timetable
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const deleteTimetables = id => {
  const uri = `api/timetables/${id}`
  return axios.delete(uri)
}
