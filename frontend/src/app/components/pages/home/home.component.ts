import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
[x: string]: any;

  foods:Food[]= [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    let foodsObservalbe:Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        // this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
        else if (params.tag)
        // this.foods = this.foodService.getAllFoodsByTag(params.tag);
      foodsObservalbe = this.foodService.getAllFoodsByTag(params.tag);
      else
        // this.foods = foodService.getAll(); 
      foodsObservalbe = foodService.getAll();
      foodsObservalbe.subscribe((serverFoods)=>{
        this.foods= serverFoods;
      })     
    })
    
  }

}
