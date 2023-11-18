import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnText: any;
  @Input() btnClass: any;

  public iconName: string = '';
  @Input()
  set icon(icon: string) {
    this.iconName = icon;
  }
  get icon(): string {
    return this.iconName;
  }

  @Input() route: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent() {
    console.log('dfsd');
    this.onClick.emit();
  }

}
