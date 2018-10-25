const {GQC} = require('graphql-compose')
const {composeWithMongoose} = require('graphql-compose-mongoose')
const _ = require('lodash')
const model = require('../model/')

addFields()

function addFields () {
  const keys = Object.keys(model)
  keys.map(key => {
    let _model = model[key]
    let k = _model.modelName
    let tc = composeWithMongoose(_model)
    GQC.rootQuery().addFields({
      [`${k}ById`]: tc.getResolver('findById'),
      [`${k}ByIds`]: tc.getResolver('findById'),
      [`${k}One`]: tc.getResolver('findOne'),
      [`${k}`]: tc.getResolver('findMany'),
      [`${k}Many`]: tc.getResolver('findMany'),
      [`${k}Count`]: tc.getResolver('count'),
      [`${k}Connection`]: tc.getResolver('connection'),
      [`${k}Pagination`]: tc.getResolver('pagination')
    })
  })
}
module.exports = GQC.buildSchema()

