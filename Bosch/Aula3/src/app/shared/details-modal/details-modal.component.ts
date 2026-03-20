import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.css']
})
export class DetailsModalComponent {
  @Input()
  Title: string = ""
  @Input()
  Confirmation: boolean = false;
  @Input()
  SaveLabel?: string;



  @Output()
  onClose: EventEmitter<void> = new EventEmitter();
  @Output()
  onSave: EventEmitter<void> = new EventEmitter();

  toggleClose = () => {
    this.onClose.emit();
  }

  toggleSave = () => {
    this.onSave.emit();
  }
}
