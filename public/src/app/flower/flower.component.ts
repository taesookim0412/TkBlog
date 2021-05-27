import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FlowerComponent implements OnInit {

  constructor(private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
  }
}
