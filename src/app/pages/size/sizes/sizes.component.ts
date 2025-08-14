import {NgClass} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SizeComponent} from '../size/size.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SizeModel} from '../../../models/SizeModel';
import {SizeService} from '../../../services/size/size.service';

@Component({
  selector: 'app-sizes',
  standalone: true,
  imports: [NgClass, MatButtonModule, MatInputModule, MatFormFieldModule, SizeComponent, ReactiveFormsModule],
  templateUrl: './sizes.component.html',
  styleUrl: './sizes.component.css'
})
export class SizesComponent implements OnInit {
  sizes?: SizeModel[];
  addSizeForm!: FormGroup;

  constructor(private fb: FormBuilder, private sizeService: SizeService) {
  }


  fetchAllSizes() {
    this.sizeService.getAllSizes().subscribe({
      next: data => {
        this.sizes = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.fetchAllSizes();
    this.addSizeForm = this.fb.group({
      sizeLabel: ['', Validators.required]
    })
  }

  handleDeleteSize(event: number) {
    this.sizeService.deleteSize(event).subscribe({
      next: data => {
        this.ngOnInit();
      },
      error: err => {
        console.error(err);
      }
    })
  }

  handleSubmit() {
    if (this.addSizeForm.valid) {
      this.sizeService.saveSize(this.addSizeForm.value.sizeLabel).subscribe({
        next: data => {
          this.ngOnInit()
        },
        error: err => {
          console.error(err);
        },
      })
    }
  }
}
