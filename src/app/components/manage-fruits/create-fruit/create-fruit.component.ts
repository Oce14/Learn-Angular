import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FruitDTO } from '../../../shared/models/dto/FruitDTO';
import { FruitTypeEnum } from '../../../shared/models/enums/FruitTypeEnum';
import { FruitsService } from '../../../shared/services/fruits.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-fruit',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, MatSelectModule, FormsModule,ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './create-fruit.component.html',
  styleUrl: './create-fruit.component.scss'
})
export class CreateFruitComponent {

  @Output() fruitAdded = new EventEmitter<FruitDTO>();

  fruitForm: FormGroup;
  fruitTypes = Object.values(FruitTypeEnum);

  constructor(private fb: FormBuilder, private fruitService: FruitsService) {
    this.fruitForm = this.fb.group({
      type: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      color: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.fruitForm.valid) {
      const fruit: FruitDTO = this.fruitForm.value;
      this.fruitService.addFruit(fruit).subscribe(response => {
        console.log('Fruit ajouté avec succès', response);
        this.fruitAdded.emit(fruit);
      }, (error: any) => {
        console.error('Erreur lors de l\'ajout du fruit', error);
      });
    }
  }
}
