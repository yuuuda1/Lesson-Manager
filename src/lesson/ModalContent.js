import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItemText, ListItem } from 'material-ui/List'
import Typography from 'material-ui/Typography'

const styles = () => ({
  root: {
    width: '100%',
    height: '360px',
    backgoundColor: '#FFF',
  },
  textPrimary: {
    fontSize: '12px',
    paddingBottom: '6px'
  },
  secondary: {
    fontSize: '16px',
    color: '#000'
  },
  contentSecondary: {
    fontSize: '14px',
    color: '#000'
  },
  listPadding: {
    paddingTop: '0px',
    paddingBottom: '2px',
    paddingLeft: '0px',
    marginBottom: '16px',
    width: '100%'
  },
  listLessonName: {
    paddingTop: '0px',
    paddingBottom: '2px',
    paddingLeft: '0px',
    marginBottom: '16px',
    borderBottom: '1px solid #000',
    width: '100%'
  },
  listLessonContent: {
    paddingTop: '0px',
    paddingBottom: '2px',
    paddingLeft: '0px',
    marginBottom: '16px',
    borderBottom: '1px solid #000',
    width: '100%'
  },
  listLessonStudent: {
    paddingTop: '0px',
    paddingBottom: '2px',
    paddingLeft: '0px',
    marginBottom: '16px',
    borderBottom: '1px solid #000',
    width: '100%'
  },
  listLessonTime: {
    paddingTop: '0px',
    paddingBottom: '2px',
    paddingLeft: '0px',
    marginBottom: '16px',
    borderBottom: '1px solid #000',
    width: '100%'
  },
  font: {
    fontSize: '18px',
    fontWeight: 'bold'
  }
})

class ModalContent extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return (
      <div className={classes.root} {...other}>
        <List>
        <ListItem className={classes.listPadding}>
          <Typography className={classes.font}>授業詳細</Typography>
        </ListItem>
          <ListItem className={classes.listLessonName}>
            <ListItemText
              primary="科目名"
              secondary="論理回路Ⅰ"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
          </ListItem>
          <ListItem className={classes.listLessonContent}>
            <ListItemText
              primary="開講日"
              secondary="秋学期"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="年次"
              secondary="２年"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="開講学部"
              secondary="コンピュータ理工学部"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
          </ListItem>
          <ListItem className={classes.listLessonStudent}>
            <ListItemText
              primary="単位数"
              secondary="2単位"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="教員名"
              secondary="吉村正義"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="曜日"
              secondary="火曜日"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="時限"
              secondary="２時限目"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
          </ListItem>
          <ListItem className={classes.listLessonName}>
            <ListItemText
              primary="授業概要"
              secondary="スマートフォンに代表される情報通信技術において，論理回路は基礎的な処理を担っている。その論理回路における処理は集積回路によって実現されている。集積回路は微細加工技術の進歩により，飛躍的に小型化・高速化・高密度化・低価格化が進んでおり、安価で高度なデジタル電子機器の実現の原動力となっている。製造後に論理回路の機能を変更可能な集積回路を利用することによって、ユーザが必要とする機能をもつＬＳＩを比較的容易に開発することができるようになってきている。この機能を変更可能なＬＳＩはデジタルテレビやカメラとする民生用の製品からルータなどのネットワーク機器まで幅広く用いられるようになってきている。本授業では情報通信技術の基盤技術である集積回路の理論と論理回路設計法について習得する。本授業では前もって論理回路I及びコンピュータのための数学Iを履修していることが望ましい．また今後システムLSI設計，組込みハードウェア設計及びコンピュータアーキテクチャに関する科目を履修するために役に立つ．"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.contentSecondary
              }}
            />
          </ListItem>
          <ListItem className={classes.listLessonName}>
            <ListItemText
              primary="評価方法"
              secondary="定期試験（筆記）７０％、授業中に課すレポート（１０回）３０％。"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.contentSecondary
              }}
            />
          </ListItem>
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(ModalContent)
