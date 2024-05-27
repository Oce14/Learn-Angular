import { Component, OnInit } from '@angular/core';
import { FruitDTO } from '../../shared/models/dto/FruitDTO';
import { FruitsService } from '../../shared/services/fruits.service';
import { CreateFruitComponent } from './create-fruit/create-fruit.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-fruits',
  standalone: true,
  imports: [CreateFruitComponent, FruitsComponent, CommonModule],
  templateUrl: './manage-fruits.component.html',
  styleUrl: './manage-fruits.component.scss'
})
export class ManageFruitsComponent implements OnInit {


  fruitsParent: FruitDTO[] = [];

  constructor(private fruitsService: FruitsService) { }

  ngOnInit(): void {
    this.fruitsService.getFruits().subscribe(
      (fruitsResponse) => {
      this.fruitsParent = fruitsResponse;
    });
  }

  addFruitToFruits(event: FruitDTO): void {
    this.fruitsParent.push(event);
  }


}
