class Hamburger {
    constructor(size, stuffing) {
        this._priceList();
        this.price = 0;
        this.calories = 0;
        for (let i = 0; i < this.priceList.length; i++) {
            if (size === this.priceList[i]["size"]) {
                this.size = size;
                this.price +=  this.priceList[i]["price"];
                this.calories +=  this.priceList[i]["calories"];
            }

            if (stuffing === this.priceList[i]["stuffing"]) {
                this.stuffing = stuffing;
                this.price +=  this.priceList[i]["price"];
                this.calories +=  this.priceList[i]["calories"];
            }
        }
        this.topping = [];
        alert("You can add spice or mayo");

    }
    addTopping(topping){
        if (this.topping.length > 1) {
            alert("You have max topping");
        } else {
            for (let i = 0; i < this.priceList.length; i++) {
                if (topping === this.priceList[i]["topping"]) {
                    this.topping.push(topping);
                    this.price += this.priceList[i]["price"];
                    this.calories += this.priceList[i]["calories"];
                }
            }
        }
    }
    removeTopping(topping){
        for (let i = 0; i < this.topping.length; i++) {
            if (topping === this.topping[i]) {
                this.topping.splice(i, 1);
                this.price -= this.priceList[i]["price"];
                this.calories -= this.priceList[i]["calories"];
            }
        }
    }
    getToppings() {
        if (this.topping.length === 0) {
            console.log("Add topping plz!");
        } else {
            return `${this.topping}`
        }
    }
    getSize(){
        return `${this.size}`
    }
    getStuffing(){
        return `${this.stuffing}`
    }
    calculatePrice(){
        return `${this.price}`
    }
    calculateCalories(){
        return `${this.calories}`
    }

    _priceList() {
        this.priceList = [
            {size: "big", price: 50, calories: 20},
            {size: "small", price: 100, calories: 40},
            {stuffing: "cheese", price: 10, calories: 20},
            {stuffing: "salad", price: 20, calories: 5},
            {stuffing: "fries", price: 15, calories: 10},
            {topping: "spice", price: 15, calories: 0},
            {topping: "mayo", price: 20, calories: 5},
        ]
    }
}


let size = prompt("Enter size: big or small");
let stuffing = prompt("Enter stuffing: cheese or salad or potato");
let createHamburger = new Hamburger(size, stuffing);