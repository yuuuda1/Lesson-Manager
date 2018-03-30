
const factory = require('./factory').createFactory()


const terms = [
  '春学期',
  '秋学期',
  '通年'
]

const departments = [
  '経済学部',
  '経営学部',
  '法学部',
  '文化学部',
  '外国語学部',
  '理学部',
  'コンピュータ理工学部',
  '総合生命科学部',
  '現代社会学部'
]

const grades = [1, 2, 3, 4]

const units = [1, 2, 4]

const timePeriods = [
  '月曜日 １限',
  '月曜日 ２限',
  '月曜日 ３限',
  '月曜日 ４限',
  '月曜日 ５限',
  '火曜日 １限',
  '火曜日 ２限',
  '火曜日 ３限',
  '火曜日 ４限',
  '火曜日 ５限',
  '水曜日 １限',
  '水曜日 ２限',
  '水曜日 ３限',
  '水曜日 ４限',
  '水曜日 ５限',
  '木曜日 １限',
  '木曜日 ２限',
  '木曜日 ３限',
  '木曜日 ４限',
  '木曜日 ５限',
  '金曜日 １限',
  '金曜日 ２限',
  '金曜日 ３限',
  '金曜日 ４限',
  '金曜日 ５限',
  '土曜日 １限',
  '土曜日 ２限',
  '土曜日 ３限',
  '土曜日 ４限',
  '土曜日 ５限'
]


factory.define(faker => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  return {
    id : faker.random.uuid(),
    name : faker.random.word(),
    term : faker.random.arrayElement(terms),
    department : faker.random.arrayElement(departments),
    grade : faker.random.arrayElement(grades),
    unit : faker.random.arrayElement(units),
    teacher_name : lastName + firstName,
    outline : faker.lorem.lines(),
    evaluation : faker.lorem.lines(),
    time_period : faker.random.arrayElement(timePeriods)
  }
})

module.exports = factory
