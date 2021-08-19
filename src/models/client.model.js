module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            nome: String,
            valor: String,
            firstTime: Date,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    
    const Client = mongoose.model("Client", schema, 'clients');
    return Client;
};