import { EditProductService } from './edit-product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public updateProduct: any;
  formValue !: FormGroup
  constructor(private editProd: EditProductService) { }

  ngOnInit(): void {
    // this.retriveProductById(item);
  }

  retriveProductById(item: any) {
    this.editProd.getProductById(item)
      .subscribe(
        res => {
          console.log('response form retrive edit' + res)
          this.updateProduct = res;
        },
        error => {
          console.log(error);
        });
  }

  editProduct(item: any) {
    console.log('from component ' + item);
    this.editProd.updateProduct(item)
      .subscribe(
        res => {
          console.log('log from prod comp' + res);
          this.updateProduct = res;
          console.log('uapated product  ' + this.updateProduct)
        },
        error => {
          console.log(error);
        });
  }

}
