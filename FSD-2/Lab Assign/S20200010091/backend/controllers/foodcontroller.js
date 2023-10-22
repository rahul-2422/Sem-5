const FoodItem = require("../models/FoodItem");

exports.addfooditem = async (req, res) => {
    const { name, price, quantity } = req.body;
    try {
        const fooditemexists = await FoodItem.findOne({ name: name });
        if (fooditemexists) {
            const { _id } = fooditemexists;
            const q = Number(fooditemexists.quantity) + Number(quantity);
            const updatefooditem = await FoodItem.findByIdAndUpdate({ _id }, { quantity: q });
            await updatefooditem.save();
            res.status(201).json({ message: "successfully added a food item", data: { updatefooditem } });
        } else {
            const q = quantity;
            const fooditem = new FoodItem({ name, price, quantity: q });
            await fooditem.save();
            res.status(201).json({ message: "successfully added new food item", data: { fooditem } });
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail",error: error });
    }
};

exports.getallfooditems = async (req, res) => {
    try {
        const fooditems = await FoodItem.find();
        if (fooditems) {
            res.status(201).json({message:"successful", food : { fooditems } });
        }
        else {
            res.status(404).json({ message: "no items present" });
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail",error: error });
    }
};

exports.getonefooditem = async (req, res) => {
    const id = req.params.id.slice(1);
    try {
        const item = await FoodItem.find({_id:id});
        if (item) {
            res.status(201).json({ message:"success",data: { item } });
        }
        else{res.status(404).json({ message: "no item present" });}
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail",error: error });
    }
}