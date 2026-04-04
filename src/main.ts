import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

// CREATE AN INSTANCE OF PHYSICAL AND DIGITAL PRODUCT
// CREATE AN ARRAY TO HOLD MULTIPLE PRODUCTS
const products = [
    new PhysicalProduct("L5984", "Laptop", 1300, 1.6),
    new PhysicalProduct("T8397", "Headphones", 80, 0.55),
    new DigitalProduct("E4583", "E-Book", 36.99, 3),
    new DigitalProduct("H4830", "Software", 100, 6),
]

// LOOP TO DISPLAY PRODUCT DETAILS
// for(let i = 0; i < products.length; i++) {
//     console.log(products[i]?.displayDetails())
// };

for (const product of products) {
    // DISPLAY DETAILS
    console.log(product.displayDetails());

    // CALCULATE AND DISPLAY PRICE WITH TAX
    const finalPrice = calculateTax(product);
    console.log(`Final price with tax (if applicable): $${finalPrice.toFixed(2)}`);
}