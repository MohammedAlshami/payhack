import { StaticImageData } from "next/image";
import clothing from "/public/images/clothing.png";
import tech from "/public/images/computer.png";
import drinks from "/public/images/drinks.png";
import sports from "/public/images/sports.png";
import vegetable from "/public/images/vegetable.png";
export interface IProduct {
  img: StaticImageData;
  price: number;
  title: string;
  count: number;
}
export const products: IProduct[] = [
  {
    img: vegetable,
    price: 15,
    title: "Vegetables",
    count: 0,
  },
  {
    img: clothing,
    price: 10,
    title: "Clothing",
    count: 0,
  },
  {
    img: tech,
    price: 8,
    title: "Technology",
    count: 0,
  },
  {
    img: sports,
    price: 10,
    title: "Sporting",
    count: 0,
  },
  {
    img: drinks,
    price: 15,
    title: "Beverages",
    count: 0,
  },
];
