import { Injectable } from '@angular/core';
//imported model for which service is enabled
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  mgProducts: Product[] = [

    {
      id: 1,
      name: 'Bosch 30" 3.7 Cu. Ft. True Convection 5-Burner Stove',
      description: 'Experience the best of both worlds with the Bosch 800 Series gas range. This industrial-style range features a spacious 5-burner gas cooktop so you can whip up gourmet meals with precision. It\'s also equipped with a 3.7 cu. ft. true convection oven that keeps air flowing around your dishes so everything is cooked evenly and efficiently.',
      price: 3000,
      photo: 'stove.jpeg',
      category: 'Appliances'
    },
    {
      id: 2,
      name: 'Bosch 36" 21 Cu. Ft. Counter-Depth 4-Door French Door Refrigerator',
      description: 'Keep your food fresh and close at hand with this 4-door Bosch refrigerator. The fridge\'s 21 cu ft. capacity provides plenty of room for all your groceries, while the FarmFresh system keeps the contents perfectly chilled. Its HomeConnect system connects to your home network for integration with Nest, Alexa, Fitbit, and more.',
      price: 1500,
      photo: 'assets/img/fridge.jpeg',
      category: 'Appliances'
    },
    {
      id: 3,
      name: 'Apple MacBook Air 13.3" w/ Touch ID',
      description: 'Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with a 7-core GPU. Accelerate machine-learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever -- up to 18 hours.',
      price: 1299,
      photo: 'assets/img/macbook.jpeg',
      category: 'Computers'
    },
    {
      id: 4,
      name: 'Lenovo IdeaPad Flex 5 13.3" Touchscreen 2-in-1 Chromebook',
      description: 'Step into the modern age of ultra-fast computing with the Lenovo IdeaPad Flex 5 2-in-1 Chromebook. It runs on an Intel Celeron CPU paired with 4GB of RAM that can handle everything you throw at it. Its connectivity options include USB Type-C ports for superfast data transfers and integrated Wi-Fi 6 and Bluetooth 5.0 for with excellent range.',
      price: 499,
      photo: 'assets/img/tablet.jpeg',
      category: 'Computers'
    },
    {
      id: 5,
      name: 'LG 50" 4K UHD HDR LED webOS Smart TV',
      description: 'The LG 55" smart TV offers a game-changing entertainment experience in the comfort of your home. With 4K UHD resolution and active HDR support, you can enjoy gaming, movies, and shows in vivid colours and sharp details. It is also equipped with webOS that provides access to your favourite streaming apps, and features a simple interface for easy browsing and smart control options.',
      price: 699,
      photo: 'assets/img/lgtv.jpeg',
      category: 'TVs'
    },
    {
      id: 6,
      name: 'Amazon Fire TV Stick 4K Max Media Streamer with Alexa Voice Remote',
      description: 'Dive into 4K Ultra HD cinematic entertainment with the Amazon Fire TV Stick 4K Max Media Streamer. Equipped with a quad-core 1.8 GHz processor, Wi-Fi 6 support, and Alexa Voice Remote, this powerful streaming stick delivers faster app starts and more fluid navigation. Enjoy vivid, lifelike colours with support for Dolby Vision, HDR 10, HDR10+, and the immersive audio of Dolby Atmos.',
      price: 59.99,
      photo: 'assets/img/firestick.jpeg',
      category: 'TVs'
    }
  ];

  mgGetProducts(): Product[] {
    return this.mgProducts;
  }
//lookup function to retrieve product by id
  mgLookupProduct(id: number): Product | undefined {
    return this.mgProducts.find(product => product.id === id);
  }
//lookup function to retrive product by category
  mgGetProductsByCategory(category: string): Product[] {
    return this.mgProducts.filter(product => product.category === category);
  }

  //other methods
  mgGetProductCount(): number {
    return this.mgProducts.length;
  }

 
  mgGetCategories(): string[] {
    return this.mgProducts.map(product => product.category)
      .filter((category, index, self) => self.indexOf(category) === index);
  }
  mgGetProductById(id: number): Product | undefined {
    return this.mgProducts.find(product => product.id === id);
  }

  mgGetProductsByName(name: string): Product[] {
    return this.mgProducts.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
  }
  mgGetProductsByPrice(min: number, max: number): Product[] {
    return this.mgProducts.filter(product => product.price >= min && product.price <= max);
  }


  /*
  mgGetProductsByDescription(description: string): Product[] {
    return this.mgProducts.filter(product => product.description.toLowerCase().includes(description.toLowerCase()));
  }
  mgGetProductsByPhoto(photo: string): Product[] {
    return this.mgProducts.filter(product => product.photo.toLowerCase().includes(photo.toLowerCase()));
  }
  mgGetProductsByCategoryAndPrice(category: string, min: number, max: number): Product[] {    
    return this.mgProducts.filter(product => product.category === category && product.price >= min && product.price <= max);
  }
  mgGetProductsByCategoryAndName(category: string, name: string): Product[] {
    return this.mgProducts.filter(product => product.category === category && product.name.toLowerCase().includes(name.toLowerCase()));
  }
  mgGetProductsByCategoryAndDescription(category: string, description: string): Product[] {
    return this.mgProducts.filter(product => product.category === category && product.description.toLowerCase().includes(description.toLowerCase()));
  }
  mgGetProductsByCategoryAndPhoto(category: string, photo: string): Product[] {
    return this.mgProducts.filter(product => product.category === category && product.photo.toLowerCase().includes(photo.toLowerCase()));
  }
  mgGetProductsByNameAndPrice(name: string, min: number, max: number): Product[] {
    return this.mgProducts.filter(product => product.name.toLowerCase().includes(name.toLowerCase()) && product.price >= min && product.price <= max);
  }
  mgGetProductsByNameAndDescription(name: string, description: string): Product[] {
    return this.mgProducts.filter(product => product.name.toLowerCase().includes(name.toLowerCase()) && product.description.toLowerCase().includes(description.toLowerCase()));
  }*/

}
