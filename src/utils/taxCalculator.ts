import {Product} from "../models/Product"

export function calculateTax(product: Product) {
    return product.getPriceWithTax();
}