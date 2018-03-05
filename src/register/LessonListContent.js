import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import Input from 'material-ui-icons/Input'
import Button from 'material-ui/Button'


const styles = theme => ({
  root: {
    width: '1000px'
  },
  textPrimary: {
    fontSize: '14px',
  },
  secondary: {
    fontSize: '16px',
    color: '#000'
  },
  divider: {
    color: '#000000',
    opacity: '0.54',
  },
  lineMain: {
    display: 'inline-block',
    marginRight: '15px', 
    fontSize: '18px',
    fontWeight: 'bold',
    fontColor: '#000000',
    opacity: '0.87',
  },
  lineSub: {
    display: 'inline-block',
    marginRight: '15px',
    fontSize: '18px',
    fontColor: '#000000',
    opacity: '0.87',
  },
  lineMainLogo: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    fontColor: '#000000',
    opacity: '0.87',
  },
  lineSubLogo: {
    fontSize: '18px',
    fontColor: '#000000',
    opacity: '0.87',
  },
  term: {
    width: '330px',
  },
  days: {
    width: '330px',
  },
  time: {
    
    
  },
  department: {
    width: '660px',
  },
  grade: {
    
  },
  credit: {
    
  },
  teacherName: {
    width: '660px'
  },
  estimation: {
      
  },
  button: {
    marginLeft: '450px',
  },
  icon: {
    marginLeft: '5px',
  },
  getButton: {
    color: '#00BCD4',
    fontSize: '18px'
  },
 colorInherit: {
   color: '#00BCD4',
 }
  
})

class LessonListContent extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
      <div className={classes.root} {...other}>
        <List>
          <ListItem divider>
            <div className={classes.term}>
              <Typography className={classes.lineMain}>開講日</Typography>
              <Typography className={classes.lineSub}>秋学期</Typography>
            </div>
            <div className={classes.days}>
              <Typography className={classes.lineMain}>曜日</Typography>
              <Typography className={classes.lineSub}>火曜日</Typography>
            </div>
            <div className={classes.time}>
             <Typography className={classes.lineMain}>時限</Typography>
              <Typography className={classes.lineSub}>2時間</Typography>
            </div>
          </ListItem>
          <ListItem divider>
            <div className={classes.department}>
              <Typography className={classes.lineMain}>対象学部</Typography>
              <Typography className={classes.lineSub}>コンピュータ理工学部aaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
            </div>
            <div className={classes.grade}>
              <Typography className={classes.lineMain}>年次</Typography>
              <Typography className={classes.lineSub}>２年</Typography>
            </div>
          </ListItem>
          <ListItem divider>
            <div className={classes.teacherName}>
              <Typography className={classes.lineMain}>教員名</Typography>
              <Typography className={classes.lineSub}>田中権五郎めっちゃ長い名前えええええええええ</Typography>
            </div>
            <div className={classes.credit}>
              <Typography className={classes.lineMain}>単位数</Typography>
              <Typography className={classes.lineSub}>2単位</Typography>
            </div>
          </ListItem>
          <ListItem divider>
            <div className={classes.estimation}>
              <Typography className={classes.lineMainLogo}>評価方法</Typography>
              <Typography className={classes.lineSubLogo}>評価方法は。。。スマートフォンに代表される情報通信技術において，論理回路は基礎的な処理を担っている。その論理回路における処理は集積回路によって実現されている。集積回路は微細加工技術の進歩により，飛躍的に小型化・高速化・高密度化・低価格化が進んでおり、安価で高度なデジタル電子機器の実現の原動力となっている。製造後に論理回路の機能を変更可能な集積回路を利用することによって、ユーザが必要とする機能をもつＬＳＩを比較的容易に開発することができるようになってきている。この機能を変更可能なＬＳＩはデジタルテレビやカメラとする民生用の製品からルータなどのネットワーク機器まで幅広く用いられるようになってきている。本授業では情報通信技術の基盤技術である集積回路の理論と論理回路設計法について習得する。本授業では前もって論理回路I及びコンピュータのための数学Iを履修していることが望ましい．また今後システムLSI設計，組込みハードウェア設計及びコンピュータアーキテクチャに関する科目を履修するために役に立つ．aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
            </div>
          </ListItem>
          <ListItem divider>
            <div className={classes.outline}>
              <Typography className={classes.lineMainLogo}>概要</Typography>
              <Typography className={classes.lineSubLogo}>本授業は。。。。スマートフォンに代表される情報通信技術において，論理回路は基礎的な処理を担っている。その論理回路における処理は集積回路によって実現されている。集積回路は微細加工技術の進歩により，飛躍的に小型化・高速化・高密度化・低価格化が進んでおり、安価で高度なデジタル電子機器の実現の原動力となっている。製造後に論理回路の機能を変更可能な集積回路を利用することによって、ユーザが必要とする機能をもつＬＳＩを比較的容易に開発することができるようになってきている。この機能を変更可能なＬＳＩはデジタルテレビやカメラとする民生用の製品からルータなどのネットワーク機器まで幅広く用いられるようになってきている。本授業では情報通信技術の基盤技術である集積回路の理論と論理回路設計法について習得する。本授業では前もって論理回路I及びコンピュータのための数学Iを履修していることが望ましい．また今後システムLSI設計，組込みハードウェア設計及びコンピュータアーキテクチャに関する科目を履修するために役に立つ．aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
            </div>
          </ListItem> 
          <ListItem>
            <div className={classes.button}>
              <Button className={classes.getButton}
                classes={{colorInherit:classes.colorInherit}}>
                  Register
                  <Input className={classes.icon} />
              </Button>
            </div>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(LessonListContent)
