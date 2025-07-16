// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model =model
}
car.prototype.getMakeModel(){
	return this.make+" "+this.model
}

function SportsCar(make, model, topSpeed) {
	car.call(this,make,model);
	this.topSpeed = topSpeed
}
SportsCar.prototype = Object.create(car.prototype)
SportsCar.prototype.constructor = SportsCar

SportsCar.prototype.getTopSpeed(){
	return this.topSpeed
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
