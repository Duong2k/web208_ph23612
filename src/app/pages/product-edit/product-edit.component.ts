import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0]
  })
  constructor(private router: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder) {
    this.router.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.productService.getProduct(id).subscribe(data => {
        this.product = data;
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
        })
      }, error => console.log(error.message));
    })
  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0
      }
      this.productService.updateProduct(product).subscribe((product) => {
        console.log('product', product);
      })
    }
  }
}
