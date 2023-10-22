const mongoose = require("mongoose");
exports.dbconnection = () => {
    mongoose
        .connect("mongodb+srv://foodapp:foodapp@cluster0.hem1lhe.mongodb.net/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connection to MONGO successful");
        })
        .catch((err) => {
            console.log(err);
        });
};
// mongodb://localhost:27017/FoodApp