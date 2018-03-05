const faker = require('faker/locale/ja')
const firstNameMap = require('./firstNameMap')
const lastNameMap = require('./lastNameMap')

const toKanaName = name => {
  if (firstNameMap[name]) {
    return firstNameMap[name]
  }

  return lastNameMap[name]
}

faker.name.kanaFirstName = gender => toKanaName(faker.name.firstName(gender))

faker.name.kanaLastName = gender => toKanaName(faker.name.lastName(gender))

faker.name.toKanaName = toKanaName

module.exports = faker
