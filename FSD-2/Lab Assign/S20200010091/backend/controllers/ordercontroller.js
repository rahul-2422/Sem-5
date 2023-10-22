const Orders = require("../models/Orders");

exports.orders = async (req, res) => {
    const { items, price } = req.body;

    try {
        const addorder = new Orders({ items, price });
        await addorder.save();
        res.status(201).json({ message: "successfully ordered", data: { addorder } });
    } catch (error) {
        console.log(error);
    }
};

exports.getallorders = async (req, res) => {
    try {
        const allorders = await Orders.find();
        if (allorders) {
            res.status(201).json({ message:"success",out: { allorders } });
        } else {
            res.status(404).json({ message: "no items present" });
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail",error: error });

    }
};

exports.getoneorder = async (req, res) => {
    const id = req.params.id.slice(1);
    try {
        const order = await Orders.find({ _id: id });
        if (order) {
            res.status(201).json({ message: "success", out: { order } });
        } else {
            res.status(404).json({ message: "no item present" });
        }
    } catch (error) {
        console.log(error);
    }
};
