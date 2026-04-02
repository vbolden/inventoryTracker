import {Product} from "./Product"

export class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku:string, name: string, price: number, fileSize: number){
        super(sku, name, price)
        this.fileSize = fileSize;
    }

    get formattedFileSize(): string {
        return `${this.fileSize} MB`
    }

    displayDetails(): string {
        return `${this.name} is $${this.price} and has a file size of ${this.formattedFileSize}`
    }
}