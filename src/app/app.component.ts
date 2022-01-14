import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: String = 'my-app';
  currentPath: String = window.location.pathname;

  ngOnInit() {
    console.log(this.currentPath);
  }
  ngonUpdate() {
    this.currentPath = window.location.pathname;
  }

}
