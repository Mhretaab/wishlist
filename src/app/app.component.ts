import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { WishFilterCallBack } from '../shared/types/types';

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

  listFilter: number = 0;

  filter: WishFilterCallBack = (item: WishItem) => { return true;};
}
