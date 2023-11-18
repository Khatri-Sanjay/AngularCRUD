import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {

  @Input() headerArray : Array<any> = new Array<any>();
  @Input() gridArray : Array<any> = new Array<any>();
  @Input() isAction : boolean = false;

  @Output() onView : EventEmitter<any> = new EventEmitter<any>();
  @Output() onEdit : EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.headerArray);
  }

  onViewEvent (event: number) {
    this.onView.emit(event);
  }

  onEditEvent (event: number) {
    this.onEdit.emit(event);
  }

  onDeleteEvent (event: number) {
    this.onDelete.emit(event);
  }

}
