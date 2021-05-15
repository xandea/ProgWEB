const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://alexandre:teste123@projeto.cqxxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("exchange");
    dbo.collection("user").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});