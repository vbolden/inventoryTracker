export class Product {
    protected sku: string;
    public name: string;
    protected price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails() {
        return `${this.name} has the sku #${this.sku} and costs $${this.price}. `
    }

    getPriceWithTax() {
        return this.price;
    }
}