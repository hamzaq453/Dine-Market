import { Product } from "./types";
import P1 from '/public/P1.png'
import P2 from '/public/P2.png'
import P3 from '/public/P3.png'
import P4 from '/public/P4.png'
import P5 from '/public/P5.png'
import P6 from '/public/P6.png'
import P7 from '/public/P7.png'
import P8 from '/public/P8.png'
import K2 from '/public/K2.png'


export const Products:Product[] =[
    {
    id:1,
    name:'Brushed Raglan Sweatshirt',
    price: 135,
    category: 'female',
    image: P6,
    tagline: 'Sweater'
    },
    {
        id:2,
        name:'Flex Sweatshirt',
        price: 175,
        category: 'female',
        image: P3,
        tagline: 'Sweater'
    },
    {
        id:3,
        name:'Raglan Sweatshirt',
        price: 100,
        category: 'female',
        tagline: 'Sweater',
        image: P1
    },
    {
        id:4,
        name:'Imperial Alpaca Hoodie',
        tagline: 'Jackets',
        price: 525,
        category: 'female',
        image: P4
    },
    {
        id:5,
        name:'Cameryn Dress ',
        tagline: 'Dress',
        price: 545,
        category: 'female',
        image: P2
    },
    {
        id:6,
        name:'Flex Push Button Bomber',
        tagline: 'Jackets',
        price: 235,
        category: 'male',
        image: P5
        },
        {
            id:7,
            name:'Bubby Sweatshirt ',
            price: 225,
            category: 'kids',
            image: K2,
            tagline: 'Jackets'
         },
         {
                id:8,
                name:'Muscle Tank',
                tagline: 'T Shirts',
                price: 75,
                category: 'female',
                image: P7
         },
         {
            id:9,
            name:'Raglan Sweatshirt',
            tagline: 'Sweater',
            price: 195,
            category: 'male',
            image: P8
            },
    
            
    


]