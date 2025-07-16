    // Complete the js code
    function Car(Make, Model) {
        this.make = Make;
        this.model =Model
    }
    Car.prototype.getMakeModel= function(){
        return this.make+" "+this.model
    }

    function SportsCar(make, model, TopSpeed) {
        Car.call(this,make,model);
        this.topSpeed = TopSpeed
    }
    SportsCar.prototype = Object.create(Car.prototype)
    SportsCar.prototype.constructor = SportsCar

    SportsCar.prototype.getTopSpeed= function(){
        return this.topSpeed
    }
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
