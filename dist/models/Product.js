export class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `${this.name} has the sku #${this.sku} and costs $${this.price}. `;
    }
    getPriceWithTax() {
        return this.price;
    }
}
//# sourceMappingURL=Product.js.map