import { AuthServiceService } from './../../auth-service.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-invntory',
  templateUrl: './invntory.component.html',
  styleUrls: ['./invntory.component.scss']
})
export class InvntoryComponent implements OnInit {

    formGroup! : FormGroup;

  constructor(private invvenService:InventoryService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    if (this.formGroup.valid) {
      this.invvenService.getProducts().subscribe(result => {
        if (result.success) {
          console.log(result);
          alert(result.message)
        } else {
          alert(result.message)
        }
      })
    }
  }

}
