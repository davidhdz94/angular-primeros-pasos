import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
  selector: 'dvz-add-changer',
  templateUrl: './add-changer.component.html',
  styleUrls: ['./add-changer.component.css']
})
export class AddChangerComponent {
@Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();
public character: Character ={
  name: '',
  power: 0,
}

public emitCharacter(): void{
  if (this.character.name.length === 0) return;

  this.onNewCharacter.emit(this.character);
  this.character = {name: '', power: 0};


}
}
