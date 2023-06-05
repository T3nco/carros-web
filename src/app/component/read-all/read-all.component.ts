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
  [];

  constructor() { }

  ngOnInit(): void {}

  findAll(): void
  {}
}
