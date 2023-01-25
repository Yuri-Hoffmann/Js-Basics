// Factory Function
function createAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    };
}

// Construtor Function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address = new Address('a', 'b', 'c');
console.log(address);