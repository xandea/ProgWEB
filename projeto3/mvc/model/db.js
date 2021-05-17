const client = require('mongodb').MongoClient;
const uri = "mongodb+srv://alexandre:teste123@projeto.cqxxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = class DB{

    static async buscar (collection) {
        let conn = await client.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }),
            db = conn.db('exchange');
            //console.log("entrei");
        return db.collection(collection).find().toArray();
    }

    static async enviar (collection,email) {
        let conn = await client.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }),
            db = conn.db('exchange');
            console.log("enviado");
        return db.collection(collection).insertOne({email:email})
    }
};

/*
}MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },function(err, db) {
    if (err) throw err;
    var dbo = db.db("exchange");
    dbo.collection("user").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
*/