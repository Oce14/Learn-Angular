import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FruitDTO } from '../../../../shared/models/dto/FruitDTO';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.scss'
})
export class FruitComponent {

  @Input() fruit!: FruitDTO;

  ngOnInit() {
    console.log(this.fruit)
  }

  editFruit() {
    console.log('Edit fruit')
  }

  deleteFruit() {
    console.log('Delete fruit')
  }

}
