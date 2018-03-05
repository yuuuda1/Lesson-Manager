import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Container from '../Container'
import LessonList from './LessonList'
import RegistedList from './RegistedList.js'
import SearchButton from './searchButton'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import LessonListContent from './LessonListContent'
import Input from 'material-ui-icons/Input'
import Button from 'material-ui/Button'



const styles = () => ({
  root: {
    position: 'absoluto',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA'
  },
  maintitle: {
    position: 'relative',
    left: '60px',
    textAlign: 'center',
    fontSize: '34px',
    color: '#000000',
    opacity: '0.87',
    fontFamily: 'Roboto'
  },
  searchButton: {
    marginLeft: '420px',
    marginBottom: '64px',
    marginTop: '20px'
  },
  registerContent: {
    width: '100%',
    height: '100%',
    marginLeft: '70px',
    marginTop: '60px'
  },
  title: {
    fontSize: '24px',
    fontColor: '#000000',
    opacity: '0.87'
  }

})


class Register extends Component {
  state = {
    word: ''
  }

  handleChange = data => {
    this.setState({
      word: data
    })
  }

  search = () => {
    this.props.requestAllLessons(this.state.word)
  }
  render() {
    const {
      classes,
      lessons,
      requestAllLessons,
      ...other
    } = this.props
    return(
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.registerContent}>
            <div className={classes.title}>
              MY時間割の新規登録
            </div>
            <SearchButton onChangeValue={this.handleChange} onClick={this.search} className={classes.searchButton}
            />
            <LessonList lessons={lessons}/>
          </div>
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Register)
