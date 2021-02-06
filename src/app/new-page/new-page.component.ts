import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {

  showContent = false;

  constructor() { }

  ngOnInit(): void {
  }

  get renderContent() { return this.showContent }

}
