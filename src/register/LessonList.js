import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import LessonListContent from './LessonListContent'

const styles = () => ({
  root: {
    width: '100%',
    height: '100%',
    marginRight: '40%',
    marginLeft: '10%',
    display: 'block'
  },
  title: {
    fontSize: '24px',
    fontColor: '#000000',
    opacity: '0.87',
  }
})

const object = [
  {
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
  },
  {
    name: "コンピュータのための数学Ⅲ",
    semester: "秋学期"
  },
  {
    name: "微分積分Ⅲ",
    semester: "春学期"
  }
]

class LessonList extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props

    const lessonListComponent = object.map(lesson => (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.title}>{lesson.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <LessonListContent lesson={lesson}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))

    return(
      <div className={classes.root} {...other}>
        {lessonListComponent}
      </div>
    )
  }
}

export default withStyles(styles)(LessonList)
