import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-field-overview-example',
  templateUrl: './form-field-overview-example.component.html',
  styleUrls: ['./form-field-overview-example.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
})
export class FormFieldOverviewExample {}
