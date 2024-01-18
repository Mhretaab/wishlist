import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import events from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText!: string;

  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssStrike(){
    //return this.fulfilled ? 'strikeout text-muted' : '';
    //return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    //return {'strikeout': this.fulfilled, 'text-muted': this.fulfilled}
    return {'strikeout text-muted': this.fulfilled}
  }

  removeWish(){
    events.emit('removeWish', this.wishText);
  }

  toggleFulfilled(): void {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled)
  }
}
