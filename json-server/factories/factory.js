const faker = require('./../lib/faker-extends/js')

class Factory {

  constructor(faker) {
    this.faker = faker
    this.definition = () => {}
  }

  define(func) {
    this.definition = func
  }

  create(count = 1) {
    return Array.from({ length: count }, (v, k) => k).map(() => this.definition(this.faker))
  }
}

module.exports.createFactory = () => new Factory(faker)
