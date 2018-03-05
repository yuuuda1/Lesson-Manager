import { connect } from 'react-redux'

import {
  requestAllLessons
} from './../actions'

import Lesson from './../Lesson'

const mapStateToProps = state => ({
  lessons : state.lessonsReducer.lessons
})
const mapDispatchToProps = dispatch => ({
  requestAllLessons : () => dispatch(requestAllLessons())
})

export default connect(mapStateToProps, mapDispatchToProps)(Lesson)
