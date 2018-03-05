/* eslint no-undef: off */
export const allLessons = () => {
  const uri = 'lessons'
  return axios.get(uri)
}
