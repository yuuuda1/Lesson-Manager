const factory = require('./factory').createFactory()

factory.define(faker => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  return {
    id : faker.random.number(),
    name : lastName + firstName,
    email : faker.internet.email(),
    created_at : faker.date,
    updated_at : faker.date
  }
})

module.exports = factory
