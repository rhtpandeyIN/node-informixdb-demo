import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';
import { Product } from '../model/product';
import { AddProductService } from './add-product.service';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.scss']
})
export class AddprodComponent implements OnInit {

  formValue !: FormGroup
  productObject: Product = new Product();
  constructor(private formBuilder: FormBuilder,
    private addProductService: AddProductService) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      productid: [''],
      productname: [''],
      productcategory: [''],
      productprice: ['']

    })
  }

  addProduct() {
    this.productObject.productid = this.formValue.value.productid;
    this.productObject.productname = this.formValue.value.productname;
    this.productObject.productcategory = this.formValue.value.productcategory;
    this.productObject.productprice = this.formValue.value.productprice;

    this.addProductService.postProduct(this.productObject)
      .subscribe(res => {
        console.log(res);
        alert("Employee Added Successfully")
      },
        err => {
          alert("Something went wrong")
        })
  }
}
