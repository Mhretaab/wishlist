import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  wishes: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  newWishText = '';
  listFilter: string = '0';

  title = 'wishlist';

  visibleWishes: WishItem[] = this.wishes;


  addNewWish(): void {
    this.wishes.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChanged(event: any): void {
    if (event === '0') {
      this.visibleWishes = this.wishes;
    } else if (event === '1') {
      this.visibleWishes = this.wishes.filter(item => !item.isCompleted);
    } else {
      this.visibleWishes = this.wishes.filter(item => item.isCompleted);
    }
  }

  toggleItem(wishItem: WishItem): void {
    wishItem.isCompleted = !wishItem.isCompleted;
    console.log(wishItem);
  }

}
