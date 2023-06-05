import { Component, OnInit } from '@angular/core';
import {Carro} from 'src/app/models/carro';

@Component
({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})

export class ReadAllComponent 
{
  list : Carro[] = 
  [
    {id: '1', marca: 'Fiat', tipo: 'Duo'},
    {id: '2', marca: 'Ford', tipo: 'Sem Festa'},
    {id: '3', marca: 'Reanult', tipo: 'Vegano'}
  ];

  constructor() { }

  ngOnInit(): void {}
}
