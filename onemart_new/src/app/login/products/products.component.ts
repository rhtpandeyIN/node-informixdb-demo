import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  public productList: any;
  constructor(private prodServ: ProductService) { }

  ngOnInit(): void {
    this.retriveProducts();
  }

  retriveProducts() {
    this.prodServ.getProduct()
      .subscribe(
        res => {
          console.log(res)
          this.productList = res;
        },
        error => {
          console.log(error);
        });
  }

  editProduct(item: any) {
    console.log('edit component pressed')
    this.prodServ.getProductById(item)
      .subscribe(
        res => {
          console.log('edit component' + res)
          this.productList = res;
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct(item: any) {
    console.log('deellete componrnt')
    console.log(item);
    if (window.confirm('Do you want to go ahead?')) {
      this.prodServ.deleteProduct(item).subscribe(() => {
        //this.message("Data Deleted!");
        this.retriveProducts();
      })
    }
  }
}
