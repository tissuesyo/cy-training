import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './admin.service';
import { ProdInfoTo } from './model';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html'
})
export class AdminMainComponent implements OnInit {
  prodForm: FormGroup;
  prodList: ProdInfoTo[] = [];

  constructor(private fb: FormBuilder, private adminService: AdminService) {}

  ngOnInit() {
    // prettier-ignore
    this.prodForm = this.fb.group({
      id:          [ '',  Validators.required],
      brand:       [ '', [ Validators.required, Validators.maxLength(15)]],
      name:        [ '', [ Validators.required, Validators.maxLength(30)]],
      shippedFrom: [ '', Validators.required],
      price:       [ '', [ Validators.required, Validators.maxLength(10)]],
    });

    this.adminService.initProdList().subscribe(
      result => this.prodList.push(...result),
      error => alert('init prod fail....')
    );
  }

  addProduct() {
    // this.prodForm.get('id').setValue(Math.random());

    this.adminService.addProduct(this.prodForm.value).subscribe(
      result => {
        this.prodForm.reset();
        this.prodList.push(result);
        alert('Add product successfully!!');
      },
      error => alert('Add product fail~~~  QQ  TT !!')
    );
  }
}
