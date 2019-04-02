import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'super-recipe',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Recipe box';
  recipies: Recipe[] = [
    new Recipe('cookies', ['flour','milk','eggs', 'chocolate'], ['mix everything together', 'bake at 350 degrees for 12 minutes']),
    new Recipe('rice noodles', ['flour','water','starch'], ['mix everything together', 'put through noodle press', 'boil for 15 minutes on med temp']),
    new Recipe('french fries', ['potato',' salt','water', 'oil'], ['cut potatos do desires length', 'soak potatoes in salt water for 24 hours', 'fire it ON'])

  ]

}
