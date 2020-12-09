import { Injectable } from '@nestjs/common';

import { province } from '../../constants/address/province.json';
import { district } from '../../constants/address/district.json';
import { subdistrict } from '../../constants/address/subdistrict.json';
import { zipcode } from '../../constants/address/zipcode.json';

@Injectable()
export class AddressService {
    
    findAllProvince() {
        return province
    }

    findAllDistrict() {
        return district
    }

    findAllSubDistrict() {
        return subdistrict
    }

    findAllZipcode() {
        return zipcode
    }
}
