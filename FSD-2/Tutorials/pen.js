// class Pen {
//     constructor(name, color, price) {
//         this.name = name;
//         this.color = color;
//         this.price = price;
//     }

//     showPrice() {
//         console.log("The name of the pen is : " + this.name + "\nColor : " + this.color + "\nand The price is : Rs." + this.price)
//     }
// }

let Pen = function(name,color,price) {
    this.name = name;
    this.color = color;
    this.price = price;

    this.showPrice = function()
    {
        console.log(this.price + "\n" + this.name + "\n" + this.color);
    }
}

let pen1 = new Pen("Reynolds", "Blue", "20");

pen1.showPrice();