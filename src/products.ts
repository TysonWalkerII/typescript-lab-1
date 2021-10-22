import { Product } from "./models/Product";

const products: Product[] = [
  {
    name: "Doom Eternal",
    price: 3,
  },
  {
    name: "Undertale",
    price: 2,
  },
  {
    name: "Mario Odessy",
    price: 5,
  },
];

const calculateAverageProductPrice = (products: Product[]): number => {
  if (products.length > 0) {
    let allProductsPrice = 0;
    products.forEach((item) => {
      allProductsPrice += item.price;
    });
    allProductsPrice = allProductsPrice / 3;
    return allProductsPrice;
  } else {
    return 0;
  }
};

console.log(calculateAverageProductPrice(products));
