import { Component, OnInit } from '@angular/core';
import { pods } from '../pods-model';
@Component({
  selector: 'app-pod-list',
  templateUrl: './pod-list.component.html',
  styleUrls: ['./pod-list.component.css']
})
export class PodListComponent implements OnInit {
pods = pods;

  constructor() { }

  ngOnInit(): void {
  }
 
    
  }


