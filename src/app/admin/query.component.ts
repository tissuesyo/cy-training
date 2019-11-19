import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './admin.service';
import { ComboboxModel, ProdInfoTo } from './model';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html'
})
export class QueryComponent implements OnInit {
  queryForm: FormGroup;
  brandSrc: ComboboxModel[];
  queryResult: ProdInfoTo[];

  constructor(private fb: FormBuilder, private adminService: AdminService) {}

  ngOnInit() {
    // prettier-ignore
    this.queryForm = this.fb.group({
      brand:       [ '', [ Validators.required, Validators.maxLength(15)]],
      shippedFrom: [ ]
    });

    this.adminService.getBrand().subscribe(result => {
      console.log(result);
      this.brandSrc = result;
    });
  }

  clickQueryBtn() {
    if (this.queryForm.valid) {
      this.adminService.queryProduct(this.queryForm.value).subscribe(result => (this.queryResult = result));
    } else {
      alert('Please fill in brand');
    }
  }

  reset() {
    this.queryForm.reset();
    this.queryResult = [];
  }
}
