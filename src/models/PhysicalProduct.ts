import { Product } from "./Product"

export class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    override getPriceWithTax(): number {
        return this.price * (0.10 + 1);
    }

    get formattedWeight():string {
        return this.weight = `${this.weight} kg`;
    }
}