import mac from './images_products/macbook-air-m2.jpg';
import dell from './images_products/dell-xps-13.jpg';
import thinkpad from './images_products/thinkpad-x1.jpg';
import thinkpad1 from './images_products/Lenovo ThinkPad X1 Carbon.jpeg';

export const PRODUCTS = [
  {
    id: '1',
    name: 'MacBook Air M2',
    price: 1200,
    image: mac,
    desc: '13-inch laptop with Apple M2 chip, 8GB RAM, 256GB SSD.',
    stock: 5,
  },
  {
    id: '2',
    name: 'Dell XPS 13',
    price: 1100,
    image: dell,
    desc: 'Ultra-thin 13-inch laptop, Intel i7, 16GB RAM, 512GB SSD.',
    stock: 3,
  },
  {
    id: '3',
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 1350,
    image: thinkpad,           
    images: [thinkpad, thinkpad1],   
    desc: 'Business-class laptop, Intel i7, 16GB RAM, 1TB SSD.',
    stock: 7,
  },
];
