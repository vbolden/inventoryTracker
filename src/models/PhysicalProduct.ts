import { Product } from "./Product"

export class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    // OVERRIDE GETPRICEWITHTAX FUNCTION TO ADD 10% TAX
    getPriceWithTax(): number {
        return this.price * (0.1 + 1)
    }

    get formattedWeight():string {
        return `${this.weight} kg`;
    }

    displayDetails(): string {
        return `${this.name} | ${this.sku} is $${this.price} and weighs ${this.formattedWeight}`;
    }
}