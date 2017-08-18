module.exports = {
  port: process.env.PORT || 5000,
  database: 'mongodb://alexey:Paw%40123'
  	+ '@studycluster-shard-00-00-14ucg.mongodb.net:27017'
  	+ ',studycluster-shard-00-01-14ucg.mongodb.net:27017'
  	+ ',studycluster-shard-00-02-14ucg.mongodb.net:27017'
  	+ '/findpaw?ssl=true&replicaSet=StudyCluster-shard-0&authSource=admin'
}
