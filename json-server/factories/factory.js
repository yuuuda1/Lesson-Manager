const faker = require('./../lib/faker-extends/ja')

class Factory {
  constructor(faker2) {
    this.faker = faker2
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
