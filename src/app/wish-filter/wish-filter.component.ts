import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted
]

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{
  
  @Output() filter = new EventEmitter<any>();

  listFilter: number = 0;

  ngOnInit(): void {
    this.changeFilter(0);
  }

  changeFilter(value: any): void {
    this.filter.emit(filters[value]);
  }
}
