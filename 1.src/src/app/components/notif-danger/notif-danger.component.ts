import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notif-danger',
  templateUrl: './notif-danger.component.html',
  styleUrls: ['./notif-danger.component.css']
})
export class NotifDangerComponent implements OnInit {
  @Input('msg') msg;
  constructor() { }

  ngOnInit(): void {
  }

}
