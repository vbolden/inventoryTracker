import { Product } from "./Product";
// CREATE DIGITAL PRODUCT CLASS, EXTENDS PRODUCT CLASS
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
    getPriceWithTax() {
        return this.price;
    }
    displayDetails() {
        return `${this.name} | ${this.sku} is $${this.price} and has a file size of ${this.formattedFileSize}`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map