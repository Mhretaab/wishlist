import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { WishFilterCallBack } from '../../shared/types/types';

const filters = [
  (item: WishItem) => item === item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted
]

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{
  
  @Input() filter: WishFilterCallBack = (item: WishItem) => { return true;};
  @Output() filterChange = new EventEmitter<WishFilterCallBack>();

  listFilter: number = 0;

  ngOnInit(): void {
    this.updateFilter(0);
  }

  updateFilter(value: any): void {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
