import { Component, Input } from '@angular/core';
import { FruitDTO } from '../../../shared/models/dto/FruitDTO';
import { FruitComponent } from './fruit/fruit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [FruitComponent, CommonModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})
export class FruitsComponent {
  @Input() fruitsEnfant!: FruitDTO[];

  ngOnInit() {
    console.log('FruitsComponent init', this.fruitsEnfant)
  }
}
