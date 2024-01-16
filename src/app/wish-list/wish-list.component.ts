import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];

  toggleItem(wishItem: WishItem): void {
    wishItem.isCompleted = !wishItem.isCompleted;
    console.log(wishItem);
  }
}
