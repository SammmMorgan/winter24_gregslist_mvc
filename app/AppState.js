import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /** * @type {Car[]} */
  cars = [
    // NOTE bringing cars in from local storage
    // new Car({
    //   make: 'Mazda',
    //   model: 'Miata',
    //   year: 2005,
    //   price: 6000,
    //   color: '#610007',
    //   mileage: 100000,
    //   description: 'This listing is for Jeremy only, no one else conatct me',
    //   hasSalvagedTitle: false,
    //   imgUrl: 'https://images.unsplash.com/photo-1610884447640-42b8ec61a933?q=80&w=2226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // }),
    // new Car({
    //   make: 'Pontiac',
    //   model: 'Firebird',
    //   year: 1982,
    //   price: 10000,
    //   color: '#2d0913',
    //   mileage: 14,
    //   description: 'This listing is for Sam only, no one else conatct me',
    //   hasSalvagedTitle: false,
    //   imgUrl: 'https://images.unsplash.com/photo-1625658281581-2da46feb5d1d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // }),
    // new Car({
    //   make: 'Ford',
    //   model: 'Mustang',
    //   year: 2007,
    //   price: 9000,
    //   color: '#97002b',
    //   mileage: 240000,
    //   description: 'This listing is for Joaquin only, no one else conatct me',
    //   hasSalvagedTitle: true,
    //   imgUrl: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // }),
  ]


  houses = [
    new House({
      title: 'Modern Home',
      year: '1974',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: 'Newly renovated mid-century modern home', imgUrl: 'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg'
    }),
    new House({
      title: `Jefferson's Cabin`,
      year: '1776',
      bedrooms: 1,
      bathrooms: 1,
      sqft: 400,
      price: 380000,
      description: 'The log cabin the Declaration of Independence was signed in; outhouse included.',
      imgUrl: 'https://images.unsplash.com/photo-1570793005386-840846445fed?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new House({
      title: 'The Moon',
      year: '2030',
      bedrooms: 800,
      bathrooms: 650.5,
      sqft: 14000,
      price: 10000000,
      description: 'The Entire Moon', imgUrl: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    })
  ]

}






export const AppState = createObservableProxy(new ObservableAppState())