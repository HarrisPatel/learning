import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  address: any = 'Zamzama Park'

  Allrestaurants = [
    {
      id: 1,
      image: '../../assets/images/rest1.jpg',
      name: 'Hot & Roll BBQ Tonight (Homechef)',
      category: 'Fast Food',
      time: '30 min',
      deliveryCharges: 0,
      topRest: true,
      fastDelivery: true,
      rating: 4.6,
      cutlery: false,
      discount: 10,
      riderTip: 0,
      vouchers: true,
      miniorder: 249,
      servicefee: 7.99,
      foodtype: ['Pakistani', 'Biryani', 'Karahi & Handi', 'Pulao', 'Burger'],
      menu: [
        {
          id: 1,
          name: 'Popular',
          items: [
            {
              id: 104,
              name: 'Special Mix Chat',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/3623819.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              quantity: 1,
              qunPrice: 0,
              popular: true,
              type: 'Pakistani'
            },
            {
              id: 111,
              name: 'Dal Makhani Handi',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/27665663.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              oldPrice: 950,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            }
          ]
        },
        {
          id: 2,
          name: 'Special Dishes',
          items: [
            {
              id: 101,
              name: 'Club Sandwich',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/3072273.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pakistani'
            },
            {
              id: 102,
              name: 'Hot & Sour Soap',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/3072282.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              oldPrice: 599,
              qunPrice: 0,
              popular: false,
              quantity: 1,
              type: 'Pakistani'
            },
          ]
        },
        {
          id: 3,
          name: 'Pakistani Itmes',
          items: [
            {
              id: 103,
              name: 'Fish Fry',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/833388.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pakistani'
            },
            {
              id: 104,
              name: 'Special Mix Chat',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/3623819.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              quantity: 1,
              popular: true,
              type: 'Pakistani'
            },
          ]
        },
        {
          id: 4,
          name: 'Biryani',
          items: [
            {
              id: 105,
              name: 'Chiken Biryani with pepsi',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/37856616.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Biryani'
            },
            {
              id: 106,
              name: 'Chicken Biryani Double',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/3085388.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Biryani'
            },
            {
              id: 107,
              name: 'White Biryani',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/1525379.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              oldPrice: 1500,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Biryani'
            },
          ]
        },
        {
          id: 5,
          name: 'Hot Karahi',
          items: [
            {
              id: 108,
              name: 'Special Karahai',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/13010798.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              oldPrice: 699,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 109,
              name: 'Dhumba Karahai',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/3872207.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 110,
              name: 'Chicken Handi',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/22269939.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 111,
              name: 'Dal Makhani Handi',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/27665663.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              oldPrice: 950,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
          ]
        },
        {
          id: 6,
          name: 'Tasty Pulao',
          items: [
            {
              id: 112,
              name: 'Beef Pulao',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/12567674.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              quantity: 1,
              qunPrice: 0,
              popular: true,
              type: 'Pulao'
            },
            {
              id: 113,
              name: 'Sada Pulao',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/12567675.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              oldPrice: 400,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pulao'
            },
          ]
        },
        {
          id: 7,
          name: 'Burger',
          items: [
            {
              id: 114,
              name: 'Chicken Burger',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/21858998.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: false,
              type: 'Burger'
            },
            {
              id: 115,
              name: 'Beef Burger',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/21859003.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              quantity: 1,
              popular: false,
              type: 'Burger'
            },
          ]
        },
        {
          id: 8,
          name: 'Cold Drinks',
          items: [
            {
              id: 116,
              name: 'Pepsi',
              image: 'https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/grubtech_prod/165ec7d02080a8301a42824bbe52ba87.webp?width=150&height=150&quot',
              des: '345ml',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Drink'
            },
            {
              id: 117,
              name: 'Mirinda',
              image: 'https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/grubtech_prod/505a9f99d4f320823634765835e090e7.jpg?width=150&height=150&quot',
              des: '345ml',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 118,
              name: '7up',
              image: 'https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/grubtech_prod/57055d860b1676d68cae412ce9908b87.jpg?width=150&height=150&quot',
              des: '345ml',
              price: 99,
              oldPrice: 199,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
          ]
        },
      ]
    },
    {
      id: 2,
      image: '../../assets/images/rest2.jpg',
      name: 'DOSSANIS FAST FOOD',
      category: 'Fast Food',
      rating: 2.9,
      time: '30 min',
      deliveryCharges: 0,
      topRest: true,
      riderTip: 0,
      fastDelivery: false,
      vouchers: false,
      cutlery: false,
      discount: 10,
      miniorder: 249,
      servicefee: 7.99,
      foodtype: ['Pakistani', 'Nihari', 'Karahi & Handi', 'Pulao', 'Haleem'],
      menu: [
        {
          id: 1,
          name: 'Popular',
          items: [
            {
              id: 114,
              name: 'Tasty Haleem Single',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/39195219.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Haleem'
            },
            {
              id: 107,
              name: 'Nihari Half Plate',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/5233901.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              oldPrice: 1500,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Nihari'
            },
            {
              id: 101,
              name: 'Dal Chawal',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/20796925.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              popular: true,
              qunPrice: 0,
              quantity: 1,
              type: 'Pakistani'
            },

          ],
        },
        {
          id: 2,
          name: 'Pak Foods',
          items: [
            {
              id: 101,
              name: 'Dal Chawal',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/20796925.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              popular: true,
              quantity: 1,
              type: 'Pakistani'
            },
            {
              id: 102,
              name: 'French Fries',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/20796940.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              oldPrice: 599,
              qunPrice: 0,
              popular: false,
              quantity: 1,
              type: 'Pakistani'
            },
            {
              id: 103,
              name: 'Halwa Puri',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pakistani'
            },
            {
              id: 104,
              name: 'Samosa',
              image: 'quot;https://images.deliveryhero.io/image/fd-pk/Products/11164629.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pakistani'
            },
          ]
        },
        {
          id: 3,
          name: 'Nihari',
          items: [
            {
              id: 105,
              name: 'Beef Nihari Single',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/5233886.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Nihari'
            },
            {
              id: 106,
              name: 'Beef Nihari Double',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/5233896.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              qunPrice: 0,
              oldPrice: 800,
              quantity: 1,
              popular: false,
              type: 'Nihari'
            },
            {
              id: 107,
              name: 'Nihari Half Plate',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/5233901.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              oldPrice: 1500,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Nihari'
            },
            {
              id: 108,
              name: 'Special Nihari',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/5233896.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              oldPrice: 699,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Nihari'
            },
          ]
        },
        {
          id: 4,
          name: 'Special Karahi',
          items: [
            {
              id: 109,
              name: 'Special Handi',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/13718368.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              qunPrice: 0,
              oldPrice: 899,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 110,
              name: 'Special Karahi',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/15564751.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 111,
              name: 'Mutton Karahi',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/22187392.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              qunPrice: 0,
              oldPrice: 950,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
          ]
        },
        {
          id: 5,
          name: 'Pulao',
          items: [
            {
              id: 112,
              name: 'Chicken Pulao',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/1335843.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: false,
              type: 'Pulao'
            },
            {
              id: 113,
              name: 'Beef Pulao Single',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/1335845.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              qunPrice: 0,
              oldPrice: 400,
              quantity: 1,
              popular: false,
              type: 'Pulao'
            },
          ]
        },
        {
          id: 6,
          name: 'karachi Haleem',
          items: [
            {
              id: 114,
              name: 'Tasty Haleem Single',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/39195219.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              quantity: 1,
              qunPrice: 0,
              popular: true,
              type: 'Haleem'
            },
            {
              id: 115,
              name: 'Haleem Double',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/39195219.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Haleem'
            },
            {
              id: 116,
              name: 'Naan',
              image: 'https://images.deliveryhero.io/image/fd-pk/Products/39195221.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Haleem'
            },
          ]
        },
        {
          id: 7,
          name: 'Bevarages',
          items: [
            {
              id: 117,
              name: 'Pepsi',
              image: 'https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/grubtech_prod/165ec7d02080a8301a42824bbe52ba87.webp?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              qunPrice: 0,
              oldPrice: 299,
              popular: false,
              quantity: 1,
              type: 'Drink'
            },
            {
              id: 118,
              name: 'Seven Up',
              image: 'https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/grubtech_prod/57055d860b1676d68cae412ce9908b87.jpg?width=150&height=150&quot',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 99,
              oldPrice: 199,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
          ]
        },
      ]
    },
    {
      id: 3,
      image: '../../assets/images/rest3.jpg',
      name: 'Happy Ice Cream',
      category: 'Fast Food',
      time: '30 min',
      deliveryCharges: 70,
      rating: 3.2,
      topRest: false,
      cutlery: false,
      riderTip: 0,
      vouchers: true,
      fastDelivery: true,
      discount: 10,
      miniorder: 249,
      servicefee: 7.99,
      foodtype: ['Qeema', 'Biryani', 'Karahi & Handi', 'Pulao', 'Desserts'],
      menu: [
        {
          id: 1,
          name: 'Popular',
          items: [
            {
              id: 108,
              name: 'Tasty Handi with 4 roti',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              oldPrice: 699,
              quantity: 1,
              qunPrice: 0,
              popular: true,
              type: 'Karahi & Handi'
            },
            {
              id: 117,
              name: 'Pepsi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Drink'
            },
            {
              id: 101,
              name: 'Half Plate Qeema',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Qeema'
            },
          ]
        },
        {
          id: 2,
          name: 'Masala Qeema',
          items: [
            {
              id: 101,
              name: 'Half Plate Qeema',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Qeema'
            },
            {
              id: 102,
              name: 'Full Plate Qeema',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              oldPrice: 599,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Qeema'
            },
            {
              id: 103,
              name: 'Special Qeema with 4 Roti',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Qeema'
            },
          ]
        },
        {
          id: 3,
          name: 'Tasty Biryani',
          items: [
            {
              id: 104,
              name: 'Chicken Biryani Single',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              quantity: 1,
              popular: false,
              type: 'Biryani'
            },
            {
              id: 105,
              name: 'Sada Biryani Single',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 299,
              quantity: 1,
              popular: false,
              type: 'Biryani'
            },
            {
              id: 106,
              name: 'Chicken Biryani Double',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Biryani'
            },
            {
              id: 107,
              name: 'Sada Birayni Double with raita',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              qunPrice: 0,
              oldPrice: 1500,
              quantity: 1,
              popular: false,
              type: 'Biryani'
            },
          ]
        },
        {
          id: 4,
          name: 'Handi or Karahi',
          items: [
            {
              id: 108,
              name: 'Tasty Handi with 4 roti',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 699,
              quantity: 1,
              popular: true,
              type: 'Karahi & Handi'
            },
            {
              id: 109,
              name: 'Karahi Single ',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 110,
              name: 'Special Karahi Double',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 111,
              name: ' Full Palte Handi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              oldPrice: 950,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
          ]
        },
        {
          id: 5,
          name: 'hyderabadi pulao',
          items: [
            {
              id: 112,
              name: 'Chicken Pulao Single',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: false,
              type: 'Pulao'
            },
            {
              id: 113,
              name: 'Chicken Pulao Double',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              qunPrice: 0,
              oldPrice: 400,
              quantity: 1,
              popular: false,
              type: 'Pulao'
            },
          ]
        },
        {
          id: 6,
          name: 'Sweets',
          items: [
            {
              id: 114,
              name: 'Gulab Jamun',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              qunPrice: 0,
              price: 399,
              oldPrice: 599,
              quantity: 1,
              popular: false,
              type: 'Desserts'
            },
            {
              id: 115,
              name: 'Custared',
              image: '',
              qunPrice: 0,
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              quantity: 1,
              popular: false,
              type: 'Desserts'
            },
          ]
        },
        {
          id: 7,
          name: 'Cold Drinks',
          items: [
            {
              id: 116,
              name: 'Mirinda',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              qunPrice: 0,
              oldPrice: 299,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 117,
              name: 'Pepsi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              quantity: 1,
              qunPrice: 0,
              popular: true,
              type: 'Drink'
            },
            {
              id: 118,
              name: 'Aquafina',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 99,
              oldPrice: 199,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Drink'
            },
          ]

        },
      ]
    },
    {
      id: 4,
      image: '../../assets/images/rest4.jpg',
      name: 'Hot & Roll Tonight (Homechef)',
      category: 'Fast Food',
      time: '30 min',
      deliveryCharges: 50,
      fastDelivery: true,
      vouchers: true,
      cutlery: false,
      rating: 4.8,
      topRest: true,
      riderTip: 0,
      discount: 10,
      miniorder: 249,
      servicefee: 7.99,
      foodtype: ['Pakistani', 'Ice Cream', 'Paratha', 'Pulao', 'Burger'],
      menu: [
        {
          id: 1,
          name: 'Popular',
          items: [
            {
              id: 110,
              name: 'Moli Paratha',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              quantity: 1,
              qunPrice: 0,
              popular: true,
              type: 'Paratha'
            },
            {
              id: 101,
              name: 'Anda Chana',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: true,
            },
            {
              id: 110,
              name: 'Moli Paratha',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Paratha'
            },

          ]
        },
        {
          id: 2,
          name: 'Pakistani Food',
          items: [
            {
              id: 101,
              name: 'Anda Chana',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Pakistani'
            },
            {
              id: 102,
              name: 'Machli Fry',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              oldPrice: 599,
              quantity: 1,
              qunPrice: 0,
              popular: true,
              type: 'Pakistani'
            },
            {
              id: 103,
              name: 'Korma',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              qunPrice: 0,
              oldPrice: 899,
              quantity: 1,
              type: 'Pakistani'
            },
            {
              id: 104,
              name: 'Chicken Roll',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              quantity: 1,
              popular: false,
              type: 'Pakistani'
            },
          ]
        },
        {
          id: 3,
          name: 'Ice Cream',
          items: [
            {
              id: 105,
              name: 'Single Scope Ice Cream',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 299,
              quantity: 1,
              popular: false,
              type: 'Ice Cream'
            },
            {
              id: 106,
              name: 'Double Scope Ice Cream',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Ice Cream'
            },
            {
              id: 107,
              name: 'Half Kg Box',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              oldPrice: 1500,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Ice Cream'
            },
          ]
        },
        {
          id: 4,
          name: 'Desi Paratha',
          items: [
            {
              id: 108,
              name: 'Anda Paratha',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 699,
              quantity: 1,
              popular: false,
              type: 'Paratha'
            },
            {
              id: 109,
              name: 'Alo Paratha',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Paratha'
            },
            {
              id: 110,
              name: 'Moli Paratha',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              quantity: 1,
              popular: true,
              type: 'Paratha'
            },
            {
              id: 111,
              name: 'Chicken Cheez Paratha',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              oldPrice: 950,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Paratha'
            },
          ]
        },
        {
          id: 5,
          name: 'Special Pulao',
          items: [
            {
              id: 112,
              name: 'chicken Pulao',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pulao'
            },
            {
              id: 113,
              name: 'Beef Pulao',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              oldPrice: 400,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pulao'
            },
          ]
        },
        {
          id: 6,
          name: 'Tasty Burger',
          items: [
            {
              id: 114,
              name: 'Zinger Burger',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Burger'
            },
            {
              id: 115,
              name: 'Chiken Mayo Burger',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              quantity: 1,
              popular: false,
              type: 'Burger'
            },
          ]
        },
        {
          id: 7,
          name: 'Beverages',
          items: [
            {
              id: 116,
              name: 'Pepsi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              qunPrice: 0,
              price: 199,
              oldPrice: 299,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 117,
              name: 'Mirinda',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              qunPrice: 0,
              price: 199,
              oldPrice: 299,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 118,
              name: 'Pakola',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 99,
              oldPrice: 199,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Drink'
            },
          ]
        },
      ]
    },
    {
      id: 5,
      image: '../../assets/images/rest5.jpg',
      name: 'Pronto di Eatalia',
      category: 'Fast Food',
      time: '30 min',
      deliveryCharges: 0,
      vouchers: false,
      riderTip: 0,
      topRest: true,
      cutlery: false,
      rating: 5.0,
      fastDelivery: false,
      discount: 10,
      miniorder: 249,
      servicefee: 7.99,
      foodtype: ['Pakistani', 'Paratha', 'Broast', 'Pulao', 'Pizza'],
      menu: [
        {
          id: 1,
          name: 'Popular',
          items: [
            {
              id: 114,
              name: 'Medium Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: true,
              type: 'Pizza'
            },
            {
              id: 107,
              name: 'Single Broast',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              qunPrice: 0,
              oldPrice: 1500,
              quantity: 1,
              popular: true,
              type: 'Broast'
            },
            {
              id: 104,
              name: 'Alo Paratha',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Paratha'
            },
            {
              id: 112,
              name: 'Beef Pulao',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Pulao'
            },
          ]
        },
        {
          id: 2,
          name: 'Pakistani Food',
          items: [
            {
              id: 101,
              name: 'Dal Chawal',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              popular: false,
              qunPrice: 0,
              quantity: 1,
              type: 'Pakistani'
            },
            {
              id: 102,
              name: 'Dal Fry',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 599,
              popular: true,
              quantity: 1,
              type: 'Pakistani'
            },
            {
              id: 103,
              name: 'Chicken corn Soap',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              oldPrice: 899,
              popular: false,
              qunPrice: 0,
              quantity: 1,
              type: 'Pakistani'
            },
          ]
        },
        {
          id: 3,
          name: 'Paratha',
          items: [
            {
              id: 104,
              name: 'Alo Paratha',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Paratha'
            },
            {
              id: 105,
              name: 'Chicken Cheez Paratha',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Paratha'
            },
            {
              id: 106,
              name: 'Chai Paratha',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Paratha'
            },
          ]
        },
        {
          id: 4,
          name: 'Special Broast',
          items: [
            {
              id: 107,
              name: 'Single Broast',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              oldPrice: 1500,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Broast'
            },
            {
              id: 108,
              name: 'Double Broast',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              oldPrice: 699,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Broast'
            },
            {
              id: 109,
              name: 'Broast With Burger',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Broast'
            },
            {
              id: 110,
              name: 'Special Broast with Drink',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Broast'
            },
          ]
        },
        {
          id: 5,
          name: 'Rice & Pulao',
          items: [
            {
              id: 111,
              name: 'Chiken Pulao',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              oldPrice: 950,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pulao'
            },
            {
              id: 112,
              name: 'Beef Pulao',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Pulao'
            },
          ]
        },
        {
          id: 6,
          name: 'Pizza',
          items: [
            {
              id: 113,
              name: 'Small Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              qunPrice: 0,
              oldPrice: 400,
              quantity: 1,
              popular: false,
              type: 'Pizza'
            },
            {
              id: 114,
              name: 'Medium Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              quantity: 1,
              qunPrice: 0,
              popular: true,
              type: 'Pizza'
            },
            {
              id: 115,
              name: 'Large Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pizza'
            },
            {
              id: 116,
              name: 'Extra Large Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              qunPrice: 0,
              oldPrice: 299,
              quantity: 1,
              popular: false,
              type: 'Pizza'
            },
          ]
        },
        {
          id: 7,
          name: 'Beverages',
          items: [
            {
              id: 117,
              name: 'Sprite',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              qunPrice: 0,
              oldPrice: 299,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 118,
              name: 'Pepsi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 99,
              qunPrice: 0,
              oldPrice: 199,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
          ]
        },
      ]
    },
    {
      id: 6,
      image: '../../assets/images/rest6.jpg',
      name: 'Kalachi Dairy',
      category: 'Fast Food',
      time: '30 min',
      deliveryCharges: 0,
      topRest: false,
      fastDelivery: false,
      cutlery: false,
      riderTip: 0,
      vouchers: false,
      rating: 4.1,
      discount: 15,
      miniorder: 249,
      servicefee: 7.99,
      foodtype: ['Fast Food', 'Samosa', 'Qeema', 'Broast', 'BBQ'],
      menu: [
        {
          id: 1,
          name: 'Popular',
          items: [
            {
              id: 111,
              name: 'Beef Stikes',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              qunPrice: 0,
              oldPrice: 950,
              quantity: 1,
              popular: true,
              type: 'BBQ'
            },
            {
              id: 102,
              name: 'Pasta',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Fast Food'
            },
            {
              id: 114,
              name: 'Single Piece Broast',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: true,
              type: 'Broast'
            },
            {
              id: 105,
              name: 'Alo Samosa',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 299,
              quantity: 1,
              popular: true,
              type: 'Samosa'
            },
          ]
        },
        {
          id: 2,
          name: 'Fast Food',
          items: [
            {
              id: 101,
              name: 'Zinger Burger',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Fast Food'
            },
            {
              id: 102,
              name: 'Pasta',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: true,
              type: 'Fast Food'
            },
            {
              id: 103,
              name: 'Fish Platter',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              qunPrice: 0,
              oldPrice: 899,
              quantity: 1,
              popular: false,
              type: 'Fast Food'
            },
            {
              id: 104,
              name: 'Chiken Biryani',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Fast Food'
            },
          ]
        },
        {
          id: 3,
          name: 'Samosa',
          items: [
            {
              id: 105,
              name: 'Alo Samosa',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 299,
              quantity: 1,
              popular: true,
              type: 'Samosa'
            },
            {
              id: 106,
              name: 'Chicken Samosa',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Samosa'
            },
            {
              id: 107,
              name: 'Full Mayo + Chicken Samosa',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              qunPrice: 0,
              oldPrice: 1500,
              quantity: 1,
              popular: false,
              type: 'Samosa'
            },
          ]
        },
        {
          id: 4,
          name: 'Special Qeema',
          items: [
            {
              id: 108,
              name: 'Full Qeema',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              qunPrice: 0,
              price: 499,
              oldPrice: 699,
              quantity: 1,
              popular: false,
              type: 'Qeema'
            },
            {
              id: 109,
              name: 'Half qeema',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Qeema'
            },
            {
              id: 110,
              name: 'Special Qeema with Raita',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              quantity: 1,
              popular: false,
              type: 'Qeema'
            },
          ]
        },
        {
          id: 5,
          name: 'Bar BQ Items',
          items: [
            {
              id: 111,
              name: 'Beef Stikes',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              oldPrice: 950,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'BBQ'
            },
            {
              id: 112,
              name: 'Traditional BBQ Paltter',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'BBQ'
            },
            {
              id: 113,
              name: 'Double BBQ platter',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'BBQ'
            },
          ]
        },
        {
          id: 6,
          name: 'Spicy Broast',
          items: [
            {
              id: 114,
              name: 'Single Piece Broast',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: true,
              type: 'Broast'
            },
            {
              id: 115,
              name: 'Double Broast',
              image: 'sSpecial Broast',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              oldPrice: 400,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Broast'
            },
          ]
        },
        {
          id: 7,
          name: 'Drinks',
          items: [
            {
              id: 116,
              name: 'Pepsi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Drink'
            },
            {
              id: 117,
              name: 'Mirinda',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 118,
              name: 'Pakola',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 99,
              oldPrice: 199,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
          ]
        },
      ]
    },
    {
      id: 7,
      image: '../../assets/images/rest7.jpg',
      name: 'Al Rehman Biryani Centre - Sharafabad',
      category: 'Fast Food',
      time: '30 min',
      deliveryCharges: 30,
      topRest: false,
      fastDelivery: false,
      vouchers: true,
      riderTip: 0,
      cutlery: false,
      rating: 4.0,
      discount: 10,
      miniorder: 249,
      servicefee: 7.99,
      foodtype: ['Pasta', 'Desserts', 'Shakes', 'Pulao', 'Burger'],
      menu: [
        {
          id: 1,
          name: 'Popular',
          items: [
            {
              id: 114,
              name: 'Zinger Burger',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: true,
              type: 'Burger'
            },
            {
              id: 107,
              name: 'Mango Shake',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              oldPrice: 1500,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Shakes'
            },
            {
              id: 101,
              name: 'Spcial Pasta',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              popular: true,
              quantity: 1,
              type: 'Pasta'
            },
            {
              id: 113,
              name: 'Muter Pulao (Half)',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              qunPrice: 0,
              oldPrice: 400,
              quantity: 1,
              popular: true,
              type: 'Pulao'
            },
          ]
        },
        {
          id: 2,
          name: 'Tasty Pasta',
          items: [

            {
              id: 101,
              name: 'Spcial Pasta',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              qunPrice: 0,
              price: 399,
              oldPrice: 599,
              popular: true,
              quantity: 1,
              type: 'Pasta'
            },
            {
              id: 102,
              name: 'Chicken Pasta With Mayao',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: false,
              type: 'Pasta'
            },
            {
              id: 103,
              name: 'Beef Pasta',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              oldPrice: 899,
              qunPrice: 0,
              popular: false,
              quantity: 1,
              type: 'Pasta'
            },
          ]
        },
        {
          id: 3,
          name: 'Desserts',
          items: [
            {
              id: 104,
              name: 'Rabri',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Desserts'
            },
            {
              id: 105,
              name: 'Kheer',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Desserts'
            },
            {
              id: 106,
              name: 'Custared',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Desserts'
            },
          ]
        },
        {
          id: 4,
          name: 'Shakes',
          items: [
            {
              id: 107,
              name: 'Mango Shake',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              oldPrice: 1500,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Shakes'
            },
            {
              id: 108,
              name: 'PineApple Shake',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 699,
              quantity: 1,
              popular: false,
              type: 'Shakes'
            },
            {
              id: 109,
              name: 'Straberry Shake',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Shakes'
            },
            {
              id: 110,
              name: 'Milk Shake',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Shakes'
            },
            {
              id: 111,
              name: 'Chocolate Shake',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              oldPrice: 950,
              quantity: 1,
              popular: false,
              qunPrice: 0,
              type: 'Shakes'
            },
          ]
        },
        {
          id: 5,
          name: 'Pulao',
          items: [
            {
              id: 112,
              name: 'Beef Pulao (Half)',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pulao'
            },
            {
              id: 113,
              name: 'Muter Pulao (Half)',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              oldPrice: 400,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Pulao'
            },
          ]
        },
        {
          id: 6,
          name: 'Burgers',
          items: [
            {
              id: 114,
              name: 'Zinger Burger',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Burger'
            },
            {
              id: 115,
              name: 'Chicken Burger',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Burger'
            },
          ]
        },
        {
          id: 7,
          name: 'Cold Drinks',
          items: [
            {
              id: 116,
              name: 'Pepsi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Drink'
            },
            {
              id: 117,
              name: 'String',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 118,
              name: 'Pakola',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 99,
              oldPrice: 199,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
          ]
        },
      ]
    },
    {
      id: 8,
      image: '../../assets/images/rest8.jpg',
      name: 'Karachi Spicy Roll Corner - PECHS',
      category: 'Fast Food',
      time: '30 min',
      deliveryCharges: 40,
      topRest: true,
      riderTip: 0,
      cutlery: false,
      vouchers: false,
      rating: 3.8,
      discount: 30,
      fastDelivery: true,
      miniorder: 249,
      servicefee: 7.99,
      foodtype: ['Qeema', 'Biryani', 'Pizza', 'Chinese', 'Fast Food'],
      menu: [
        {
          id: 1,
          name: 'Popular',
          items: [
            {
              id: 114,
              name: 'BBQ Platter',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              quantity: 1,
              qunPrice: 0,
              popular: true,
              type: 'Fast Food'
            },
            {
              id: 105,
              name: 'Beef Briyani (Half)',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 299,
              popular: true,
              qunPrice: 0,
              quantity: 1,
              type: 'Biryani'
            },
          ]
        },
        {
          id: 2,
          name: 'Special Qeema',
          items: [
            {
              id: 101,
              name: 'Special Hyderabadi Qeema',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              popular: false,
              quantity: 1,
              type: 'Qeema'
            },
            {
              id: 102,
              name: 'Full Qeema With 4 Roti',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 599,
              popular: true,
              quantity: 1,
              type: 'Qeema'
            },
            {
              id: 103,
              name: 'Double Qeema With 1 drink',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              qunPrice: 0,
              oldPrice: 899,
              popular: false,
              quantity: 1,
              type: 'Qeema'
            },
            {
              id: 104,
              name: 'Beff Muter Qeema',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              popular: false,
              quantity: 1,
              type: 'Qeema'
            },
          ]
        },
        {
          id: 3,
          name: 'Biryani',
          items: [
            {
              id: 105,
              name: 'Beef Briyani (Half)',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 299,
              popular: true,
              quantity: 1,
              type: 'Biryani'
            },
            {
              id: 106,
              name: 'Beff Biryani (Single)',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              popular: false,
              qunPrice: 0,
              quantity: 1,
              type: 'Biryani'
            },
            {
              id: 107,
              name: 'Sada biryani (Half)',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              oldPrice: 1500,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Biryani'
            },
          ]
        },
        {
          id: 4,
          name: 'Pizza',
          items: [
            {
              id: 108,
              name: 'Large Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              oldPrice: 699,
              quantity: 1,
              qunPrice: 0,
              popular: true,
              type: 'Pizza'
            },
            {
              id: 109,
              name: 'Small Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pizza'
            },
            {
              id: 110,
              name: 'Medium Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pizza'
            },
            {
              id: 111,
              name: 'Special Pizza Medium',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              qunPrice: 0,
              oldPrice: 950,
              quantity: 1,
              popular: false,
              type: 'Pizza'
            },
          ]
        },
        {
          id: 5,
          name: 'Chinese Food',
          items: [
            {
              id: 112,
              name: 'Chinese Fried Rice',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Chinese'
            },
            {
              id: 113,
              name: 'Chines Nodels',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              oldPrice: 400,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Chinese'
            },
          ]
        },
        {
          id: 6,
          name: 'Fast Food',
          items: [
            {
              id: 114,
              name: 'BBQ Platter',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: true,
              type: 'Fast Food'
            },
            {
              id: 115,
              name: 'Zinger Burger',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Fast Food'
            },
          ]
        },
        {
          id: 7,
          name: 'Beverages',
          items: [
            {
              id: 116,
              name: 'Pepsi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 117,
              name: 'Mirinda',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 118,
              name: 'Pakola',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 99,
              oldPrice: 199,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
          ]
        },
      ]
    },
    {
      id: 9,
      image: '../../assets/images/rest9.jpg',
      name: 'KFC - Gulshan 2',
      category: 'Fast Food',
      time: '30 min',
      rating: 3.0,
      deliveryCharges: 0,
      riderTip: 0,
      topRest: true,
      cutlery: false,
      fastDelivery: true,
      vouchers: false,
      discount: 5,
      miniorder: 249,
      servicefee: 7.99,
      foodtype: ['Pizza', 'Karahi & Handi', 'BBQ', 'Ice Cream', 'pasta'],
      menu: [
        {
          id: 1,
          name: 'Popular',
          items: [
            {
              id: 115,
              name: 'Beef mayo Pasta',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              quantity: 1,
              popular: true,
              type: 'pasta'
            },
            {
              id: 102,
              name: 'Medium Size Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              popular: true,
              oldPrice: 599,
              quantity: 1,
              type: 'Pizza'
            },
            {
              id: 109,
              name: 'Special Kashmiri Handi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Karahi & Handi'
            },
            {
              id: 106,
              name: 'Half BBQ Platter',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              popular: true,
              quantity: 1,
              type: 'BBQ'
            },
          ]
        },
        {
          id: 2,
          name: 'Pizza',
          items: [
            {
              id: 101,
              name: 'Small Size Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              popular: false,
              quantity: 1,
              type: 'Pizza'
            },
            {
              id: 102,
              name: 'Medium Size Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              popular: true,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              type: 'Pizza'
            },
            {
              id: 103,
              name: 'Large Size Pizza',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              qunPrice: 0,
              oldPrice: 899,
              popular: false,
              quantity: 1,
              type: 'Pizza'
            },
            {
              id: 104,
              name: 'XL Pizza with Drink',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              popular: false,
              quantity: 1,
              type: 'Pizza'
            },
          ]
        },
        {
          id: 3,
          name: 'Bar BQ Items',
          items: [
            {
              id: 105,
              name: 'Full BBQ Platter',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 299,
              popular: false,
              quantity: 1,
              type: 'BBQ'
            },
            {
              id: 106,
              name: 'Half BBQ Platter',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              popular: true,
              quantity: 1,
              type: 'BBQ'
            },
            {
              id: 107,
              name: 'Double BBQ Platter',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              qunPrice: 0,
              oldPrice: 1500,
              popular: false,
              quantity: 1,
              type: 'BBQ'
            },
          ]
        },
        {
          id: 4,
          name: 'Karahi & Handi',
          items: [
            {
              id: 108,
              name: 'Special Karachi Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              popular: false,
              qunPrice: 0,
              oldPrice: 699,
              quantity: 1,
              type: 'Karahi & Handi'
            },
            {
              id: 109,
              name: 'Special Kashmiri Handi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Karahi & Handi'
            },
            {
              id: 110,
              name: 'Chicken Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 111,
              name: 'Mutton Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              qunPrice: 0,
              oldPrice: 950,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
          ]
        },
        {
          id: 5,
          name: 'Ice Cream',
          items: [
            {
              id: 112,
              name: 'Single Scope',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: false,
              type: 'Ice Cream'
            },
            {
              id: 113,
              name: 'Double Scope',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              qunPrice: 0,
              oldPrice: 400,
              quantity: 1,
              popular: false,
              type: 'Ice Cream'
            },
          ]
        },
        {
          id: 6,
          name: 'Chinese Pasta',
          items: [
            {
              id: 114,
              name: 'Chiken Pasta',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'pasta'
            },
            {
              id: 115,
              name: 'Beef mayo Pasta',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'pasta'
            },
            {
              id: 116,
              name: 'Special Pasta',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'pasta'
            },
          ]
        },
        {
          id: 7,
          name: 'Cold Drinks',
          items: [
            {
              id: 117,
              name: 'Pepsi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 118,
              name: 'Mirinda',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 99,
              oldPrice: 199,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Drink'
            },
          ]
        },
      ]
    },
    {
      id: 10,
      image: '../../assets/images/rest10.jpg',
      name: 'Tooso Bahadurabad',
      category: 'Fast Food',
      time: '30 min',
      deliveryCharges: 0,
      topRest: false,
      vouchers: true,
      rating: 4.9,
      riderTip: 0,
      cutlery: false,
      fastDelivery: true,
      discount: 10,
      miniorder: 249,
      servicefee: 7.99,
      foodtype: ['Pakistani', 'Biryani', 'Karahi & Handi', 'Pulao', 'Burger'],
      menu: [
        {
          id: 1,
          name: 'Popular',
          items: [
            {
              id: 112,
              name: 'Beef Pulao',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              popular: true,
              quantity: 1,
              type: 'Pulao'
            },
            {
              id: 105,
              name: 'Chicken Biryani',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 299,
              qunPrice: 0,
              popular: true,
              quantity: 1,
              type: 'Biryani'
            },
          ]
        },
        {
          id: 2,
          name: 'Desi Foods',
          items: [

            {
              id: 101,
              name: 'Chana Chat',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              popular: true,
              quantity: 1,
              type: 'Pakistani'
            },
            {
              id: 102,
              name: 'Fish Fry',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              oldPrice: 599,
              qunPrice: 0,
              popular: false,
              quantity: 1,
              type: 'Pakistani'
            },
            {
              id: 103,
              name: 'Dal Chawal',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              oldPrice: 899,
              qunPrice: 0,
              popular: false,
              quantity: 1,
              type: 'Pakistani'
            },
            {
              id: 104,
              name: 'Beef Roll',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              popular: false,
              quantity: 1,
              type: 'Pakistani'
            },
          ]
        },
        {
          id: 3,
          name: 'Biryani',
          items: [
            {
              id: 105,
              name: 'Chicken Biryani',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 299,
              qunPrice: 0,
              popular: true,
              quantity: 1,
              type: 'Biryani'
            },
            {
              id: 106,
              name: 'Beef Biryani',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              popular: false,
              quantity: 1,
              type: 'Biryani'
            },
            {
              id: 107,
              name: 'Mutar Biryani',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              oldPrice: 1500,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Biryani'
            },
          ]
        },
        {
          id: 4,
          name: 'Karahi & Handi',
          items: [
            {
              id: 108,
              name: 'Special Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 699,
              popular: true,
              quantity: 1,
              type: 'Karahi & Handi'
            },
            {
              id: 109,
              name: 'Spcial Handi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 110,
              name: 'Half Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 111,
              name: 'Mutton Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              oldPrice: 950,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
          ]
        },
        {
          id: 5,
          name: 'Pulao',
          items: [
            {
              id: 112,
              name: 'Beef Pulao',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              popular: true,
              quantity: 1,
              type: 'Pulao'
            },
            {
              id: 113,
              name: 'Chicken Pulao',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              oldPrice: 400,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pulao'
            },
          ]
        },
        {
          id: 0.6,
          name: 'Burgers',
          items: [
            {
              id: 114,
              name: 'Zinger Burger',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Burger'
            },
            {
              id: 115,
              name: 'Ande Wala Burger',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Burger'
            },
          ]
        },
        {
          id: 7,
          name: 'Drinks',
          items: [
            {
              id: 116,
              name: 'Pepsi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              qunPrice: 0,
              oldPrice: 299,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 117,
              name: 'Mirinda',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 118,
              name: 'Sprite',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 99,
              qunPrice: 0,
              oldPrice: 199,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
          ]
        },
      ]
    },
    {
      id: 11,
      image: '../../assets/images/rest11.jpg',
      name: 'Angeethi - Tipu Sultan',
      category: 'Fast Food',
      time: '30 min',
      deliveryCharges: 60,
      topRest: true,
      cutlery: false,
      fastDelivery: false,
      vouchers: true,
      riderTip: 0,
      rating: 4.2,
      discount: 25,
      miniorder: 249,
      servicefee: 7.99,
      foodtype: ['Thai', 'Chinese', 'Karahi & Handi', 'Haleem', 'samosa'],
      menu: [
        {
          id: 1,
          name: 'Popular',
          items: [
            {
              id: 113,
              name: 'Haleem Full Plate',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              qunPrice: 0,
              oldPrice: 400,
              quantity: 1,
              popular: true,
              type: 'Haleem'
            },
            {
              id: 109,
              name: 'Chicken Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Karahi & Handi'
            },
            {
              id: 106,
              name: 'Chinese Nodles',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              popular: true,
              quantity: 1,
              type: 'Chinese'
            },
            {
              id: 113,
              name: 'Haleem Full Plate',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              oldPrice: 400,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Haleem'
            },
          ]
        },
        {
          id: 2,
          name: 'Thai Foods',
          items: [
            {
              id: 101,
              name: 'Pad Thai',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              popular: true,
              quantity: 1,
              type: 'Thai'
            },
            {
              id: 102,
              name: 'Khao Pad (Thai Fried Rice)',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 599,
              popular: false,
              quantity: 1,
              type: 'Thai'
            },
            {
              id: 103,
              name: ' Tom Yum Goong ',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              oldPrice: 899,
              popular: false,
              qunPrice: 0,
              quantity: 1,
              type: 'Thai'
            },
          ]
        },
        {
          id: 3,
          name: 'Chinese Foods',
          items: [
            {
              id: 104,
              name: 'Chinese Fried Rice',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              popular: false,
              quantity: 1,
              type: 'Chinese'
            },
            {
              id: 105,
              name: 'Chinese Spring Roll',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 299,
              qunPrice: 0,
              popular: false,
              quantity: 1,
              type: 'Chinese'
            },
            {
              id: 106,
              name: 'Chinese Nodles',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              popular: true,
              quantity: 1,
              type: 'Chinese'
            },
          ]
        },
        {
          id: 4,
          name: 'Karahi',
          items: [

            {
              id: 107,
              name: 'Mutton Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 1200,
              oldPrice: 1500,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 108,
              name: 'Beef Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 699,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 109,
              name: 'Chicken Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Karahi & Handi'
            },
            {
              id: 110,
              name: 'Prawn Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 111,
              name: 'Special Beef Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              qunPrice: 0,
              oldPrice: 950,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
          ]
        },
        {
          id: 5,
          name: 'Special Haleem',
          items: [
            {
              id: 112,
              name: 'Haleem Half Plete',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: false,
              type: 'Haleem'
            },
            {
              id: 113,
              name: 'Haleem Full Plate',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              qunPrice: 0,
              oldPrice: 400,
              quantity: 1,
              popular: true,
              type: 'Haleem'
            },
          ]
        },
        {
          id: 6,
          name: 'Samosa',
          items: [
            {
              id: 114,
              name: 'Alo Samosa',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'samosa'
            },
            {
              id: 115,
              name: 'Chiken Samosa',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 499,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'samosa'
            },
          ]
        },
        {
          id: 7,
          name: 'Cold Drinks',
          items: [
            {
              id: 116,
              name: 'Pepsi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              qunPrice: 0,
              oldPrice: 299,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 117,
              name: 'Mirinda',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 118,
              name: 'Sprite',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 99,
              oldPrice: 199,
              quantity: 1,
              qunPrice: 0,
              popular: false,
              type: 'Drink'
            },
          ]
        },
      ]
    },
    {
      id: 12,
      image: '../../assets/images/rest12.jpg',
      name: 'Rehmat-e-Shereen - KARSAZ',
      category: 'Fast Food',
      time: '30 min',
      deliveryCharges: 0,
      vouchers: false,
      cutlery: false,
      riderTip: 0,
      topRest: false,
      fastDelivery: false,
      discount: 20,
      miniorder: 249,
      rating: 3.2,
      servicefee: 7.99,
      foodtype: ['Qeema', 'Biryani', 'Karahi & Handi', 'Pulao', 'Shakes'],
      menu: [
        {
          id: 2,
          name: 'Desi Qeema',
          items: [
            {
              id: 101,
              name: 'Full Qeema',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 599,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Qeema'
            },
            {
              id: 102,
              name: 'Half Qeema',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: false,
              type: 'Qeema'
            },
            {
              id: 103,
              name: 'Special Qeema',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 599,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: true,
              type: 'Qeema'
            },
          ]
        },
        {
          id: 3,
          name: 'Biryani',
          items: [
            {
              id: 104,
              name: 'Chiken Biryani',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              quantity: 1,
              popular: false,
              type: 'Biryani'
            },
            {
              id: 105,
              name: 'Beef Biryani',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Biryani'
            },
            {
              id: 106,
              name: 'Special Biryani',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 600,
              oldPrice: 800,
              qunPrice: 0,
              popular: false,
              quantity: 1,
              type: 'Biryani'
            },
          ]
        },
        {
          id: 4,
          name: 'Shakes',
          items: [
            {
              id: 107,
              name: 'Chocolate Shake',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              qunPrice: 0,
              price: 1200,
              oldPrice: 1500,
              quantity: 1,
              popular: true,
              type: 'Shakes'
            },
            {
              id: 108,
              name: 'Banana Shake',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: false,
              type: 'Shakes'
            },
            {
              id: 109,
              name: 'Milk Shake',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              qunPrice: 0,
              price: 399,
              oldPrice: 499,
              quantity: 1,
              popular: false,
              type: 'Shakes'
            },
          ]
        },
        {
          id: 5,
          name: 'Karahi & Handi',
          items: [

            {
              id: 110,
              name: 'Special Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 499,
              qunPrice: 0,
              oldPrice: 699,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 111,
              name: 'Mutton Karahi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 799,
              oldPrice: 899,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 112,
              name: 'Tasty Handi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 499,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
            {
              id: 113,
              name: 'Full Handi',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 700,
              qunPrice: 0,
              oldPrice: 950,
              quantity: 1,
              popular: false,
              type: 'Karahi & Handi'
            },
          ]
        },
        {
          id: 6,
          name: 'Pulao',
          items: [

            {
              id: 114,
              name: 'Beef Pulao',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 399,
              qunPrice: 0,
              oldPrice: 599,
              quantity: 1,
              popular: true,
              type: 'Pulao'
            },
            {
              id: 115,
              name: 'Chicken Pulao',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 300,
              oldPrice: 400,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Pulao'
            },
          ]
        },
        {
          id: 7,
          name: 'Cold Drinks',
          items: [
            {
              id: 116,
              name: 'Sprite',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 117,
              name: 'String',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 199,
              oldPrice: 299,
              qunPrice: 0,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
            {
              id: 118,
              name: 'Aquafina',
              image: '',
              des: 'Exclusive Zinger Roll Offer Available Now.',
              price: 99,
              qunPrice: 0,
              oldPrice: 199,
              quantity: 1,
              popular: false,
              type: 'Drink'
            },
          ]

        },
      ]
    }
  ]


  addCart(food: any, restID: any,) {
    let idchecker = localStorage.getItem('idcheck');

    if (idchecker == null) {
      let cart = JSON.parse(localStorage.getItem('cart') as any) || [];
      cart.push(food);
      localStorage.setItem('cart', JSON.stringify(cart));
      const id = restID
      localStorage.setItem('idcheck', JSON.stringify(id));
    }
    else if (idchecker !== null) {
      if (idchecker == restID) {
        let cart = JSON.parse(localStorage.getItem('cart') as any) || [];
        cart.push(food);
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        alert('Adding this item will clear your cart.')
        let cart = JSON.parse(localStorage.getItem('cart') as any) || [];
        cart = [];
        cart.push(food);
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('idcheck', JSON.stringify(restID));
      }
    } else {
      return
    }

  }


}


















