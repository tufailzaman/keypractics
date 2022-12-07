class Product {
    name;
    price;
    qty;

    deliver = () => {

    };
    
   bill = () => {
        return this.price * this.qty;
    }
}    
 module.exports = Product ;
