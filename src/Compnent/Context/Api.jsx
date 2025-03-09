import card1 from '../../assets/img/cart-1.png'
import card2 from '../../assets/img/cart-2.png'
import card3 from '../../assets/img/cart-3.png'
import card4 from '../../assets/img/cart-4.png'
import card5 from '../../assets/img/plant-1.png'
import card6 from '../../assets/img/plant-2.png'
import product1 from "../../assets/img2/product1.png";
import product2 from "../../assets/img2/product2.png";
import product3 from "../../assets/img2/product3.png";
import product4 from "../../assets/img2/product4.png";
import product5 from "../../assets/img2/product5.png";
import product6 from "../../assets/img2/product6.png";
const firstarr = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    owner: "Greenhouse Gardens",
    price: 45.99,
    photo: product1, // Use imported variable
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    owner: "Urban Jungle",
    price: 69.99,
    photo: product2, // Use product image instead of cart image
  },
  {
    id: 3,
    name: "Snake Plant",
    owner: "Desert Blooms",
    price: 24.99,
    photo: product3,
  },
  {
    id: 4,
    name: "Pothos Golden", // Changed for variety
    owner: "Tropical Plants Co",
    price: 19.99,
    photo: product4,
  },
  {
    id: 5,
    name: "ZZ Plant",
    owner: "Modern Flora",
    price: 34.99,
    photo: product5,
  },
  {
    id: 6,
    name: "Rubber Plant",
    owner: "Urban Jungle",
    price: 49.99,
    photo: product6,
  },
  {
    id: 7,
    name: "Aloe Vera",
    owner: "Succulent World",
    price: 14.99,
    photo: product2, // Consider if this should be a product image
  },
  {
    id: 7,
    name: "Fiddle Leaf Fig",
    owner: "Urban Jungle",
    price: 69.99,
    photo: product2, // Use product image instead of cart image
  },
];

const secondarr = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    owner: "Greenhouse Gardens",
    price: 45.99,
    photo: card1,
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    owner: "Urban Jungle",
    price: 69.99,
    photo: card2,
  },
  {
    id: 3,
    name: "Snake Plant",
    owner: "Desert Blooms",
    price: 24.99,
    photo: card3,
  },

  {
    id: 4,
    name: "Snake Plant",
    owner: "Desert Blooms",
    price: 24.99,
    photo: card4,
  },
  {
    id: 5,
    name: "Snake Plant",
    owner: "Desert Blooms",
    price: 24.99,
    photo: card5,
  },
  {
    id: 6,
    name: "Snake Plant",
    owner: "Desert Blooms",
    price: 24.99,
    photo: card6,
  },
  {
    id: 6,
    name: "Snake Plant",
    owner: "Desert Blooms",
    price: 24.99,
    photo: card6,
  },{
    id: 6,
    name: "Snake Plant",
    owner: "Desert Blooms",
    price: 24.99,
    photo: card6,
  },
];
const finaldata = { firstarr, secondarr };
export default finaldata;
