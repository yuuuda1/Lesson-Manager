import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import ModalWindow from './ModalWindow'
import ModalContent from './ModalContent'

const styles = theme => ({
  root: {
    zIndex: 100,
    marginTop: '32px',
    marginLeft: '32px'
  },
  listHeader: {
    width: '1120px',
    height: '18px',
    backgroundColor: '#FAFAFA',
    borderBottom: '4px solid #FFAB40',
    paddingBottom: '4px',
    paddingLeft: '30px'
  },
  listElememt: {
    width: '1150x',
    height: '600px'
  },
  listSideBar: {
    width: '30px',
    height: '548px',
    display: 'inline-block',
    paddingTop: '48px',
  },
  listItemStyle: {
    width: '160px',
    height: '120px',
    backgroundColor: '#FAFAFA',
    display: 'inline-block',
    textAlign: 'center',
    paddingTop: '50px'
  },
  listBlock: {
    display: 'inline-block',
    width: '1120px',
    height: '600px',
    fontSize: '16px',
    position: 'relative',
    top: 0
  },
  listStyles: {
    paddingTop: '0px',
    paddingBottom: '0px',
    color: '#000000',
    opacity: '0.87'
  },
  weekText: {
    width: '32px',
    height: '21px',
    display: 'inline-block',
    fontSize: '14px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: 'center',
    marginRight: '127px'
  },
  numberText: {
    height: '30px',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '90px'
  },
  primary: {
    fontSize: '16px',
    fontFamily: 'Roboto',
    color: '#000000',
    opacity: '0.87',
    textAlign: 'center'
  }
})

const dailys = [
  "Mon",
  "Tue",
  "Web",
  "Thu",
  "Fri",
  "Sat",
  "Etc"
]

const numbers = [
  "1",
  "2",
  "3",
  "4",
  "5"
]

const lesson = {
  name: "論理回路Ⅱ",
  semester: "春学期",
  year: "2年次",
  department: "コンピュータ理工学部",
  unit: "2単位",
  teacher: "吉村正義",
  daily: "火曜日",
  time: "2限目",
  overview: "スマートフォンに代表される情報通信技術において，論理回路は基礎的な処理を担っている。その論理回路における処理は集積回路によって実現されている。集積回路は微細加工技術の進歩により，飛躍的に小型化・高速化・高密度化・低価格化が進んでおり、安価で高度なデジタル電子機器の実現の原動力となっている。製造後に論理回路の機能を変更可能な集積回路を利用することによって、ユーザが必要とする機能をもつＬＳＩを比較的容易に開発することができるようになってきている。この機能を変更可能なＬＳＩはデジタルテレビやカメラとする民生用の製品からルータなどのネットワーク機器まで幅広く用いられるようになってきている。本授業では情報通信技術の基盤技術である集積回路の理論と論理回路設計法について習得する。本授業では前もって論理回路I及びコンピュータのための数学Iを履修していることが望ましい．また今後システムLSI設計，組込みハードウェア設計及びコンピュータアーキテクチャに関する科目を履修するために役に立つ．",
  evaluation: "定期試験（筆記）７０％、授業中に課すレポート（１０回）３０％。"
}

class TimeTable extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
    console.log('open')
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const {
      classes,
      ...other
    } = this.props

    const weekList = dailys.map(daily => (
      <Typography className={classes.weekText}>{daily}</Typography>
    ))

    const numberList = numbers.map(number => (
      <Typography className={classes.numberText}>{number}</Typography>
    ))

    const listItems = dailys.map(daily => (
      <ListItem label={daily} button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
        <ListItemText primary={lesson.teacher} classes={{primary: classes.primary}} />
      </ListItem>
    ))

    const lists = numbers.map(number => (
      <List label={number} disablePadding={true} classes={{padding: classes.listStyles}}>
        {listItems}
      </List>
    ))

    return (
      <div className={classes.root} {...other}>
        <div className={classes.listHeader}>
          {weekList}
        </div>
        <div className={classes.listElememt}>
          <div className={classes.listSideBar}>
            {numberList}
          </div>
          <div className={classes.listBlock}>
            {lists}
            <ModalWindow onClose={this.handleClose} open={this.state.open}>
              <ModalContent lesson={lesson}/>
            </ModalWindow>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TimeTable)
