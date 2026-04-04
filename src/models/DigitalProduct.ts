import {Product} from "./Product"

// CREATE DIGITAL PRODUCT CLASS, EXTENDS PRODUCT CLASS
export class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku:string, name: string, price: number, fileSize: number){
        super(sku, name, price)
        this.fileSize = fileSize;
    }

    get formattedFileSize(): string {
        return `${this.fileSize} MB`
    }

    getPriceWithTax(): number {
        return this.price;
    }

    displayDetails(): string {
        return `${this.name} | ${this.sku} is $${this.price} and has a file size of ${this.formattedFileSize}`
    }
}