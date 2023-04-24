import { Company } from './Company';
import {User} from './User';
import { CustomMaps } from './CustomMaps';

const user=new User();
const company=new Company()
const customMap= new CustomMaps("map");

customMap.addMarker(user)
customMap.addMarker(company)



