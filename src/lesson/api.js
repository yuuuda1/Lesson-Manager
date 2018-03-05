/* eslint no-undef: off */
export const allLessons = word => {
 const uri = 'lessons/search?search_word=' + word
 return axios.get(uri)
}

export const allTimetables = () => {
  const uri = 'timetables'
  return axios.get(uri)
}

export const getTimetable = id => {
  const uri = 'timetables/' + id
  return axios.get(uri)
}

export const postTimetables = timetable => {
  const uri = 'timetables'
  return axios.post(uri, timetable)
}

export const putTimetables = action => {
  const uri = 'timetables/' + action.id
  return axios.put(uri, action.timetable)
}

export const deleteTimetables = id => {
  const uri = 'timetables/' + id + ''
  return axios.delete(uri)
}
