
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

const time_priods = [
  '月曜日 1限',
  '月曜日 2限',
  '月曜日 3限',
  '月曜日 4限',
  '月曜日 5限',
  '火曜日 1限',
  '火曜日 2限',
  '火曜日 3限',
  '火曜日 4限',
  '火曜日 5限',
  '水曜日 1限',
  '水曜日 2限',
  '水曜日 3限',
  '水曜日 4限',
  '水曜日 5限',
  '木曜日 1限',
  '木曜日 2限',
  '木曜日 3限',
  '木曜日 4限',
  '木曜日 5限',
  '金曜日 1限',
  '金曜日 2限',
  '金曜日 3限',
  '金曜日 4限',
  '金曜日 5限',
  '土曜日 1限',
  '土曜日 2限',
  '土曜日 3限',
  '土曜日 4限',
  '土曜日 5限'
]


factory.define(faker => {
  const firstName = faker.name.firstName()
  const firstName = faker.name.lastName()
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
    time_priod : faker.random.arrayElement(time_priods)
  }
})

module.exports = factory
