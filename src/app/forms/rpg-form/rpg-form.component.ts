import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rpg-form',
  templateUrl: './rpg-form.component.html',
  styleUrls: ['./rpg-form.component.scss']
})
export class RpgFormComponent {
  characterForm = new FormGroup({
    characterData: new FormGroup({
      firstName: new FormControl(''),
      title: new FormControl(''),
      archetype: new FormControl(''),
    }),
    characterDataExt: new FormGroup({
      player: new FormControl(''),
      race: new FormControl(''),
      origin: new FormControl(''),
    }),

    weapon1: new FormGroup({
      weaponName1: new FormControl(''),
      weaponType1: new FormControl(''),
      range1: new FormControl(''),
      damage1: new FormControl(''),
      specialDamage1: new FormControl(''),
    }),


  });

}
