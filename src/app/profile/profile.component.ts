import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  allcheckflag = false
  communicationflag = false
  constructor() { }

  ngOnInit(): void {
  }
  allCheck() {
    this.allcheckflag = true
    this.communicationflag = false
  }
  communication() {
    this.communicationflag = true
    this.allcheckflag = false
  }
}
