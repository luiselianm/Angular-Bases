import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krillin',
      power: 500,
    },
    {
      id: uuid(),
      name: 'goku',
      power: 9000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7000,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid()
    }
    this.characters.push(newCharacter);
    console.log(this.characters)
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
