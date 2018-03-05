import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Container from '../Container.js'
import TimeTable from './TimeTable.js'

const styles = () => ({
  root: {
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100vh'
  },
  title: {
    marginLeft: '32px',
    marginTop: '32px',
    paddingBottom: '8px',
    borderBottom: '1px solid #000000',
    borderStyle: '0.54',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000000',
    opacity: '0.54'
  },
  universal: {
    marginBottom: '8px'
  }
})

class Lesson extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.title}>
            <Typography variant="title" className={classes.universal}>京都産業大学 コンピュータ理工学部 インテリジェントシステム学科</Typography>
            <Typography variant="title">平成28年度 秋学期 時間割 </Typography>
          </div>
          <TimeTable />
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Lesson)
