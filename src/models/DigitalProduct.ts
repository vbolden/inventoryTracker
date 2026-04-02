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
}