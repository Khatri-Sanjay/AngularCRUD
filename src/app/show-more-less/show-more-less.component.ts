import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-more-less',
  templateUrl: './show-more-less.component.html',
  styleUrls: ['./show-more-less.component.scss']
})
export class ShowMoreLessComponent implements OnInit {

  @Input() text: any;
  @Input() wordLimit: any;

  showMore: boolean | false | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  showMoreLess() {
    this.showMore = true
  }

}
