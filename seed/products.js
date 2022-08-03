const db = require('../db')
const { Product, Commnet } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = [
    {
      product: 'FULL LENGTH PANTS',
      price: 50.0,
      description:
        'High-waisted pants with side pockets and back false welt pockets. Pronounced darts at front. Front zip and button closure.',
      category: 'PANTS',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/7385/508/704/2/w/750/7385508704_2_2_1.jpg?ts=1654701533620',
      rating: '4.3',

      inStock: 40
    },
    {
      product: 'BASIC CROPPED KNIT TOP',
      price: 35.0,
      description: 'BASIC CROPPED KNIT TOP',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/3519/030/629/2/w/750/3519030629_1_1_1.jpg?ts=1658476179579',
      rating: '4.0',

      inStock: 15
    },
    {
      product: 'PRINTED T-SHIRT',
      price: 10.0,
      description: 'Round neck T-shirt with short sleeves. Contrasting print.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/0264/850/022/2/w/750/0264850022_1_1_1.jpg?ts=1657705479397',
      rating: '4.0',

      inStock: 15
    },
    {
      product: 'RIB TANK TOP',
      price: 25.9,
      description: 'Round neck T-shirt with short sleeves.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/4174/460/800/2/w/563/4174460800_1_1_1.jpg?ts=1658226115662',
      rating: '3.5',

      inStock: 15
    },
    {
      product: 'RUFFLED TOP',
      price: 27.9,
      description: 'Round neck T-shirt with short sleeves. Self ruffle detail.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/V/0/1/p/2298/102/406/2/w/750/2298102406_1_1_1.jpg?ts=1646740428817',
      rating: '3.0',
      inStock: 15
    },
    {
      product: 'RIBBED TULLE TRIM TOP',
      price: 27.9,
      description:
        'Round neck top with short sleeves. Matching tulle fabric. Front button closure.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/0858/805/250/2/w/750/0858805250_2_1_1.jpg?ts=1658143360516',
      rating: '2.9',
      inStock: 5
    },
    {
      product: 'RIBBED T-SHIRT',
      price: 6.9,
      description: 'Round neck tank top.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/3253/302/250/2/w/750/3253302250_1_1_1.jpg?ts=1656425102898',
      rating: '5.0',
      inStock: 15
    },
    {
      product: 'RUCHED RIB CROP',
      price: 12.9,
      description:
        'Straight neck top with adjustable ruching with ties that fasten behind the neck.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/V/0/1/p/3641/322/250/2/w/850/3641322250_1_1_1.jpg?ts=1650470523986',
      rating: '3.5',
      isOnsale: true,
      inStock: 10
    },
    {
      product: 'TOP WITH RUCHED STRAPS',
      price: 27.9,
      description:
        'V-neck crop top with spaghetti straps. Front ruching detail.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/V/0/1/p/2298/018/629/2/w/850/2298018629_1_1_1.jpg?ts=1645525959737',
      rating: '3.8',
      isOnsale: true,
      inStock: 45
    },
    {
      product: 'RUFFLED PRINT',
      price: 47.9,
      description:
        'Mini dress made of linen blend fabric. V-neck dress with ruffled wide straps. Smocked elastic details at back. Flounced hem. Side hidden in-seam zip closure.',
      category: 'DRESS',
      image:
        'https://static.zara.net/photos///2022/V/0/1/p/8372/102/620/2/w/850/8372102620_1_1_1.jpg?ts=1649072131012',
      rating: '3.7',
      isOnsale: true,
      inStock: 30
    },
    {
      product: 'CUT OUT PRINTED',
      price: 69.9,
      description:
        'Dress with round neck, long balloon sleeves, and cuffs. Cut out details at waist. Back hidden zip closure.',
      category: 'DRESS',
      image:
        'https://static.zara.net/photos///2022/V/0/1/p/4437/063/800/2/w/850/4437063800_1_1_1.jpg?ts=1645797287804',
      rating: '3.5',
      isOnsale: true,
      inStock: 20
    },
    {
      product: 'DENIM CUT OUT',
      price: 59.9,
      description:
        'Dress with scoop neck and straps. Cut out detail at waist. Back elastic fabric detail. Side zip closure.',
      category: 'DRESS',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/2674/200/251/2/w/850/2674200251_1_1_1.jpg?ts=1657706318011',
      rating: '3.9',
      inStock: 25
    },
    {
      product: 'GEOMETRIC PRINT',
      price: 69.0,
      description:
        'Lapel collar dress with long cuffed sleeves. Tiered skirt. Front button closure.',
      category: 'DRESS',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/2183/049/500/2/w/850/2183049500_1_1_1.jpg?ts=1655286407531',
      rating: '3.4',
      inStock: 25
    },
    {
      product: 'SATIN EFFECT CUT',
      price: 45.9,
      description:
        'Mini dress with straight neckline and adjustable thin straps. Back slit. Back metal hook closure and side in-seam zip closure.',
      category: 'DRESS',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/7881/650/643/17/w/850/7881650643_1_1_1.jpg?ts=1655294307375',
      rating: '3.4',
      inStock: 20
    },

    {
      product: 'LINEN SHIRT WITH POCKETS',
      price: 56.9,
      description:
        'Shirt with lapel collar and long sleeves. Front patch pocket. Front button closure.',
      category: 'DRESS',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/8372/034/250/3/w/1024/8372034250_2_4_1.jpg?ts=1655454592482',
      rating: '3.7',
      inStock: 122,
      isCollection: true
    },
    {
      product: 'LONG PRINT DRESS',
      price: 119.0,
      description:
        'Shirt with lapel collar and long sleeves. Front patch pocket. Front button closure.',
      category: 'BLAZER',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/5598/045/500/2/w/1024/5598045500_1_1_1.jpg?ts=1655449301432',
      rating: '3.6',
      inStock: 20,
      isCollection: true
    },
    {
      product: 'LONG BALLOON SKIRT',
      price: 69.9,
      description:
        'High waisted skirt with ruching at waist. Front slit at hem. Side hidden in-seam zip closure.',
      category: 'SKIRT',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/8255/180/630/2/w/1024/8255180630_1_1_1.jpg?ts=1658479566264',
      rating: '3.9',
      inStock: 50,
      isCollection: true
    },
    {
      product: 'SATIN EFFECT MIDI DRESS',
      price: 119.0,
      description:
        'Straight neck midi dress with adjustable spaghetti straps. Back hidden in-seam zip closure.',
      category: 'DRESS',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/3067/361/530/2/w/1024/3067361530_1_1_1.jpg?ts=1657728789735',
      rating: '3.1',
      inStock: 10,
      isCollection: true
    },
    {
      product: 'CUT OUT PRINTED DRESS',
      price: 119.0,
      description:
        'Dress made of viscose with V-neck and long balloon sleeves. Side cut out detail. Back hidden in-seam zip closure.',
      category: 'DRESS',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/7631/044/330/2/w/1024/7631044330_1_1_1.jpg?ts=1657190085834',
      rating: '3.2',
      inStock: 60,
      isCollection: true
    },
    {
      product: 'BLAZER WITH TUXEDO COLLAR',
      price: 119.9,
      description:
        'Long dress with round collar and adjustable tied V-neckline. Below-the-elbow length sleeves with elastic cuffs. Metallic thread appliqué.',
      category: 'BLAZER',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/2766/878/712/2/w/1024/2766878712_1_1_1.jpg?ts=1655289758920',
      rating: '3.7',
      inStock: 20,
      isCollection: true
    }
  ]

  await Product.insertMany(products)
  console.log(`created products`)
}

const run = async () => {
  await main()
  db.close()
}

run()
