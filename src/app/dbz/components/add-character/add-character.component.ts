import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  public emitCharacter(): void{
    console.log(this.character)
  }

  public character: Character = {
    name: '',
    power: 0
  };



}
