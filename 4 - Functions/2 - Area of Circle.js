let circle = {
    radius: 2,
    get area(){
        return Math.PI * this.radius * this.radius;
    },
    set area(value){
        this.radius = value;
    }
}

circle.area = 5;
console.log(circle.area);