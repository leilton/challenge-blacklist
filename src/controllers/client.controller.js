const { isValidObjectId } = require("mongoose");
const db = require("../models");
const Client = db.clients;
const faker = require('faker');
const { date } = require("faker");

exports.blacklist = (req, res) => {
 
    Client.find({}, {}, function(err, result) {
        try {
            if (result.length != 0) {
                res.send(result);
            }
            else{
                res.status(204).send({ message: "Não há Clientes Cadastrados, estou inserindo clientes fakes." });
                GeraFake()
            }
        }
        catch(ex){
            return ex;
        }
    });
};

function GeraFake(){
    let clientsData = [];

    for (let i = 0; i < process.env.QTD_FAKER ; i++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();

        let client = new Client({
            nome: firstName + ' ' + lastName,
            email: faker.internet.email(firstName, lastName),
            valor: faker.finance.amount(),
            desde: faker.date.past(),
        });
        clientsData.push(client);
    }
    Client.insertMany(clientsData);
}
