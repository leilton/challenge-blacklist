module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            nome: String,
            valor: String,
            desde: Date,
            email: String
        },
        { timestamps: false }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    
    const Client = mongoose.model("Client", schema, 'clients');
    return Client;
};