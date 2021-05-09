import { Component, OnInit } from '@angular/core';
import { titleService } from '../title.service';

export interface Version {
  name: string;
  url: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Strona Główna");
  }

  versions: Version[] = [
    {name: 'Wersja 1.1', url: 'https://tsi1.mczyz.icu/1.1'},
    {name: 'Wersja 1.5', url: 'https://tsi1.mczyz.icu/1.5'},
    {name: 'Wersja 2.1.0', url: 'https://tsi2.mczyz.icu'},
    {name: 'Wersja 3.1.3', url: 'https://tsi3.mczyz.icu'},
    {name: 'Wersja 4.1.1', url: 'https://tsi.mczyz.icu'}
  ];

  selected = '';
}
