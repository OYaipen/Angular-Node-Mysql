import { Component, OnInit, HostBinding } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../../services/products.service";
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @HostBinding('class') classees = 'row';
  product: Product = {
    id: 0,
    title: '',
    description: '',
    image: '',
    create_at: new Date()
  };
  edit: boolean = false;
  constructor(private productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {

      this.productsService.getProduct(params.id).subscribe(
        res => {
          this.product = res,
            this.edit = true,
            console.log(res)
        },
        err => console.log(err)
      )
    }
  }
  saveNewProduct() {
    delete this.product.create_at;
    delete this.product.id;
    this.productsService.saveProduct(this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/products'])
      },
      err => console.error(err)
    )
  }
  updateProduct() {
    delete this.product.create_at;
    this.productsService.updateProduct(this.product.id, this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/products'])
      },
      err => console.log(err)
    )
  }
}
