const Product = require(`./Product`)
const p1 = new Product();
p1.name = "Digital Watch"
p1.price = 2000;
p1.qty = 5 ;

console.log(p1.bill());


const p2 = new Product();
p2.name = "Fan"
p2.price = 100
p2.qty = 10


console.log(p2.bill())