import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wishes: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  title = 'wishlist';

  toggleItem(wishItem: WishItem): void {
    wishItem.isCompleted = !wishItem.isCompleted;
    console.log(wishItem);
  }
}
