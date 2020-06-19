import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-player',
  templateUrl: './top-player.component.html',
  styleUrls: ['./top-player.component.scss']
})
export class TopPlayerComponent implements OnInit {
  stars = Array(5);
  members: any = [
    {
      image: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg',
      name: 'Danylo Tesenko (Footbal Player)'
    },
    {
      image: 'https://splash.stylemixthemes.com/esport/wp-content/uploads/sites/12/1988/04/03-445x445.jpg',
      name: 'Colin Kaepernick (Basketball Player)'
    },
  ];

  headElements = ['Entry Fragger'];
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  showNextImage() {
    if (this.counter < this.members.length -1) {
      this.counter += 1;
    }
  }

  showPreviousImage() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
    }
  }
}
