import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const products = [
  {
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing"
  },
  {
    "title": "Mens Casual Premium Slim Fit T-Shirts",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing"
  },
  {
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing"
  },
  {
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing"
  },
  {
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery"
  },
  {
    "title": "Solid Gold Petite Micropave",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery"
  },
  {
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery"
  },
  {
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery"
  },
  {
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
    "category": "electronics"
  },
  {
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response. The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s",
    "category": "electronics"
  },
  {
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance.",
    "category": "electronics"
  },
  {
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics"
  },
  {
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21.5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port",
    "category": "electronics"
  },
  {
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY",
    "category": "electronics"
  },
  {
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece.",
    "category": "women's clothing"
  },
  {
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort",
    "category": "women's clothing"
  },
  {
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfect for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat",
    "category": "women's clothing"
  },
  {
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort",
    "category": "women's clothing"
  },
  {
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit",
    "category": "women's clothing"
  },
  {
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch.",
    "category": "women's clothing"
  }
]

async function main() {
  // First create categories
  const categories = [
    { name: 'electronics', description: 'Electronic devices and accessories' },
    { name: 'jewelery', description: 'Jewelry and precious accessories' },
    { name: 'men\'s clothing', description: 'Clothing and apparel for men' },
    { name: 'women\'s clothing', description: 'Clothing and apparel for women' }
  ]

  // Create categories first
  for (const category of categories) {
    await prisma.category.create({
      data: category
    }).catch(e => {
      // Ignore duplicate category errors
      if (!e.code === 'P2002') throw e;
    });
  }

  // Then create products
  for (const product of products) {
    const category = await prisma.category.findFirst({
      where: { name: product.category }
    });

    if (!category) {
      console.error(`Category ${product.category} not found`);
      continue;
    }

    try {
      await prisma.product.create({
        data: {
          name: product.title,
          description: product.description,
          price: product.price,
          stock_level: Math.floor(Math.random() * (100 - 20 + 1)) + 20, // Random stock between 20-100
          categoryId: category.category_id
        }
      });
      console.log(`Created product: ${product.title}`);
    } catch (error) {
      console.error(`Error creating product ${product.title}:`, error);
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 