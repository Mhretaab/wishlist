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

  get visibleWishes(): WishItem[] {
    let value = this.listFilter;
    if (value === '0') {
      return this.wishes;
    } else if (value === '1') {
      return this.wishes.filter(item => !item.isCompleted);
    } else {
      return this.wishes.filter(item => item.isCompleted);
    }
  };


  addNewWish(): void {
    this.wishes.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(wishItem: WishItem): void {
    wishItem.isCompleted = !wishItem.isCompleted;
    console.log(wishItem);
  }

}
