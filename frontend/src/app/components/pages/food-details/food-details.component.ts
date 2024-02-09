import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent {
food!: Food;
constructor(activatedRoute:ActivatedRoute, foodService:FoodService, private cartService:CartService, private router:Router){
  activatedRoute.params.subscribe((params)=>{
    if(params.id)
    this.food = foodService.getFoodById(params.id)
  })
}
addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page')
}
}
