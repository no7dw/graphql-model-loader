
module.exports = {
  db : 'test',
  attributes: {
    phone: { type: String, index: true},
    name: { type: String, required: true}
  },
  statics: {},
  methods: {},
  setSchema (schema) {

  },
  name: 'users'
}

