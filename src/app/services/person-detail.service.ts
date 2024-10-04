import { Injectable } from '@angular/core';
import { PersonDetail } from '../models/PersonDetail';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailService {

  constructor() { }

  public getPersonDetail() : PersonDetail[] {
    let person = new PersonDetail();
    person.lastname ="Cachero";
    person.name = "WIlson";
    person.address = "SPC";

    return [person];

  }
}
