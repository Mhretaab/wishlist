import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted
]

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
  listFilter: number = 0;

  title = 'wishlist';

  get visibleWishes(): WishItem[] {
    return this.wishes.filter(filters[this.listFilter]);
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
