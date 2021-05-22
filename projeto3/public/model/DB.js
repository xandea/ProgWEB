const client = require('mongodb').MongoClient;
const uri = "mongodb+srv://alexandre:teste123@projeto.cqxxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = class DB{

    static async buscar (collection) {
        let conn = await client.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }),
            db = conn.db('exchange');
        return db.collection(collection).find().toArray();
    }

    static async cadastrarUsuario (collection,email,senha) {
        let conn = await client.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }),
            db = conn.db('exchange');
        return db.collection(collection).insertOne({email: email, senha: senha})
    }

    static async buscarUsuario (collection,email,senha) {
        let conn = await client.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }),
            db = conn.db('exchange'),
            resultado = await db.collection(collection).find({email: email,senha: senha}).toArray();
            conn.close();
        return resultado;
    }

    //PARA CADAS E BUSCAR MOEDA
    static async cadastrarMoeda (collection,index,nome, valorMoeda, valorMoedaReal) {
        let conn = await client.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }),
            db = conn.db('exchange');
        return db.collection(collection).insertOne({index: index, nome: nome, valorMoeda: valorMoeda, valorMoedaReal: valorMoedaReal})
    }

    static async buscarMoeda (collection) {
        let conn = await client.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }),
            db = conn.db('exchange'),
            resultado = await db.collection(collection).find().toArray();
            conn.close();
        return resultado;
    }

    static async verificaMoeda (collection, index) {
        let conn = await client.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }),
            db = conn.db('exchange'),
            resultado = await db.collection(collection).find({index: index}).toArray();
            conn.close();
        return resultado;
    }

    static async buscarParMoeda(collection, moedaBase, moedaCotacao){
        let conn = await client.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }),
            db = conn.db('exchange');
            conn.close();
        return await db.collection(collection).find({index: moedaBase, index: moedaCotacao}).toArray();
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