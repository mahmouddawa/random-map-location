import { User } from './User';
import { Company } from './Company';
import {CustomMap } from './Map';
const user = new User();
console.log(new User());
console.log(new Company())

const map = new CustomMap();
map.addMarker(new User());
map.addMarker(new Company());
console.log(map)
