const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connection = async () => {
    const conn = await mongoose.connect("mongodb://0.0.0.0:27017/test", {
        useNewUrlParser: true,
    });
    
    if (conn) {
        console.log("Connected with the Database");
    }
}

module.exports = connection;