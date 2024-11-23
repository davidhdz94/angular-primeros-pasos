import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DvzService {


  public character: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500

  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 9000

  }];

  public addCharacter(character: Character): void {
    const newCharacter: Character={ id: uuid(), ...character};

    this.character.push(newCharacter);
  }

  // public onDeleteCharacter(index: number) {
  //   this.character.splice(index, 1);
  deleteCharacterById(id:string){
    this.character = this.character.filter(character => character.id !== id);
  }

}
