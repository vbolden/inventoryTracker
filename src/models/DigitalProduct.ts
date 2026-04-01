import {Product} from "./Product.ts"

export class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku:string, name: string, price: number, fileSize: number){
        super(sku, name, price)
    }

    // override getPriceWithTax(): number {
    //     return this.price;
    // }

    get formattedFileSize(): string {
        return this.fileSize = `${this.fileSize} MB`
    }
}