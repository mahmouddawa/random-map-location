import { User } from './User';
import { Company } from './Company';
import {CustomMap } from './Map';
const user = new User();

const company = new Company();
console.log(company);

const map = new CustomMap();
map.addMarker(user);
map.addMarker(company);
