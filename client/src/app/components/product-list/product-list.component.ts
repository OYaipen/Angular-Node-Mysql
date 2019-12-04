import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductsService } from "../../services/products.service";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  products: any = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productsService.getProducts().subscribe(
      res => {
        this.products = res;
        console.log(res)
      },
      err => console.error(err)
    );
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(
      res => {
        console.log(res)
        this.getProducts();
      },
      err => console.error(err)
    )
  }
}
