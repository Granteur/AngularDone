import { Component, OnInit } from '@angular/core';
import { CoffeeMaker } from '../coffee-maker';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  get dataList(): CoffeeMaker[]{
    return this.filterService.getCoffeeMakers();
  }
}
