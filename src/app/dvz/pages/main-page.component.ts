import { Component } from '@angular/core';

import { DvzService } from '../services/dvz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dvz-main-page',
  templateUrl: './main-page.Component.html'
})

export class MainPageComponent  {

constructor (private dvzService: DvzService){}
get character(): Character[] {
  return [...this.dvzService.character];

}
onDeleteCharacter (id: string): void {
  this.dvzService.deleteCharacterById(id);
}
onNewCharacter(character: Character): void {
  this.dvzService.addCharacter(character);
}
}
