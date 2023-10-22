class Chair {
    constructor(color, seatHeight, backSupport) {
        this.color = color;
        this.seatHeight = seatHeight;
        this.backSupport = backSupport;
    }

    isHeightAdjustable() {
        if(this.backSupport == true) {
            return true;
        }
        else {
            return false;
        }
    }

    adjustableHeight(newHeight) {
        if(this.isHeightAdjustable()){
            this.seatHeight = newHeight;
        }
        else{
            console.log("The height is not adjustable.");
        }
    }
}

let chair1 = new Chair("black", "15", true);

console.log(chair1.isHeightAdjustable() ? "Yes" : "No");

console.log("Old chair height : " + chair1.seatHeight);

chair1.adjustableHeight("45");

console.log("new seat height : " + chair1.seatHeight);
