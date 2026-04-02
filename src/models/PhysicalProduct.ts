import { Product } from "./Product"

export class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    getPriceWithTax(): number {
        return this.price * (0.1 + 1)
    }

    get formattedWeight():string {
        return `${this.weight} kg`;
    }

    displayDetails(): string {
        return `${this.name} is $${this.price} with tax, and weighs ${this.formattedWeight}`;
    }
}