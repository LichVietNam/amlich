import { Component, OnInit } from '@angular/core';
import { GtagHelper } from '../../utils';

@Component({
  selector: 'app-amlich',
  templateUrl: './amlich.component.html',
  styleUrls: ['./amlich.component.css'],
  providers: [ GtagHelper ]
})
export class AmlichComponent implements OnInit {

  constructor(private gtag: GtagHelper) {

  }

  ngOnInit() {
    this.gtag.updatePath('/');
    console.log('ok');
  }

}
