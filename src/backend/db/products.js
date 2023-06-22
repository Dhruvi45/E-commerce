import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    Language: 'English',
    rating: 4
  },
  {
    _id: uuid(),
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: "298",
    Language: 'English',
    rating: 3
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: "1350",
    Language: 'English',
    rating: 5
  },
  {
    _id: uuid(),
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: "2121",
    Language: 'English',
    rating: 2
  },
  {
    _id: uuid(),
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: "2121",
    Language: 'English',
    rating: 1
  },
];
