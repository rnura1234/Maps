import { Company } from './Company';
import {User} from './User';
import { CustomMaps } from './CustomMaps';

const user=new User();
const company=new Company()
const customMap= new CustomMaps("map");

customMap.addUserMarker(user)
customMap.addCompanyMaker(company)



