import { Product } from "./types";
import P1 from '/public/Pack10.jpg'
import P2 from '/public/10.jpg'
import P4 from '/public/Pack50.jpg'




export const Products:Product[] =[
    {
    id:1,
    name:'Silk Scrunchies Pack of 10',
    price: 699,
    image: P1,
    tagline: 'Multicolors',
    category:'scrunchies'
    },
    {
        id:2,
        name:'Silk Scrunchies Pack of 12',
        price: 849,
        image: P2,
        tagline: 'Scrunchies',
        category:'scrunchies'

    },
    {
        id:3,
        name:'Silk Scrunchies Pack of 20',
        price: 999,
        tagline: 'Scrunchies',
        image: P1,
        category:'scrunchies'

    },
    {
        id:4,
        name:'Silk Scrunchies Pack of 50',
        tagline: 'Jackets',
        price: 2500,
        image: P4,
        category:'scrunchies'

    },
    {
        id:5,
        name:'Silk Scrunchies Pack of 100',
        tagline: 'Dress',
        price: 5900,
        image: P2,
        category:'scrunchies'

    },
]