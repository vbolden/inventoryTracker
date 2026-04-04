import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";

// CREATE AN INSTANCE OF PHYSICAL AND DIGITAL PRODUCT
const physicalProduct = new PhysicalProduct("Laptop", "L5984", 1300, 1.6);

const digitalProduct = new DigitalProduct("E-Book", "E4583", 36.99, 3);

console.log(physicalProduct);
console.log(digitalProduct);