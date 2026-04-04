import { Product } from "./Product";
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    // OVERRIDE GETPRICEWITHTAX FUNCTION TO ADD 10% TAX
    getPriceWithTax() {
        return this.price * (0.1 + 1);
    }
    get formattedWeight() {
        return `${this.weight} kg`;
    }
    displayDetails() {
        return `${this.name} | ${this.sku} is $${this.price} and weighs ${this.formattedWeight}`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map