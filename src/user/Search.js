import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Container from '../Container'
import SearchButton from './../register/searchButton'
import Typography from 'material-ui/Typography'
import Input from 'material-ui-icons/Input'
import Button from 'material-ui/Button'
import store from '../store';
import Link from 'react-router-dom/Link';

const styles = () => ({
  root: {
    position: 'absoluto',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA'
  },
  maintitle: {
    position: 'absolute',
    left: '500px',
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
    position: 'relative',
    left: '180px',
    textAlign: 'center',
    fontSize: '24px',
    fontColor: '#000000',
    opacity: '0.87'
  }

})


class Search extends Component {
  state = {
    word: ''
  }

  handleChange = data => {
    this.setState({
      word: data
    })
  }

  search = () => {
    this.props.requestAllUsers(this.state.word)
  }

  render() {
    const {
      classes,
      lessons,
      requestAllLessons,
      users,
      ...other
    } = this.props

    const userLinks = users.length === 0 ? <div/> : users.data.map(user => (
      <Link to={'profile/'+user.id}>{user.name}</Link>
    ))

    return(
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.registerContent}>
            <div className={classes.title}>
              ユーザ検索
            </div>
            <SearchButton onChangeValue={this.handleChange} onClick={this.search} className={classes.searchButton}
            />
            {userLinks}
          </div>
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Search)