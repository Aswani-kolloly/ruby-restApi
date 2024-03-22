import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup
  imgfile: any = []
  submitted = false;
  error_message: any;
  valid = false;
  imageSrc1: any;
  imageSrc2:any
  imageSrc3:any
  param!:string | number;
  heading="Add New";
  formdata: any;
  btn="Save";
  check_val:boolean | undefined
  categorylist:any
  category:any
  constructor(private router: Router, private fb: FormBuilder, private service: AdminService, private sanitizer: DomSanitizer,private Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    var b = document.querySelector("#prod") as HTMLDivElement
    b.className = "nav-link  active"
    this.productForm = this.fb.group({
      productName: ['', [Validators.required,Validators.maxLength(100)]],
      categoryId: ['', [Validators.required]],
      sellingQty: ['', [Validators.required]],
      sellingPrice: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      unitPrice: ['', [Validators.required]],
      description: ['', [Validators.required,Validators.maxLength(250)]],
      tags: ['', [Validators.required,Validators.maxLength(100)]],
      status: [''],
      img1: [''],
      img2: [''],
      img3: ['']
    });
    this.service.viewCategoryList().subscribe((resp: any) => {
      console.log(resp)
     this.categorylist=resp
     })
     this.param = this.Activatedroute.snapshot.queryParamMap.get('id') || 0;
     console.log("query parameter:" + this.param);
 
     if (this.param != 0) {
       this.service.viewProduct(this.param).subscribe((resp: any) => {
         this.heading = "UPDATE";
         this.btn = "Update";
         this.formdata = resp;
         console.log(resp)
         let st=0
         if(this.formdata.status==1)
         st=1
        this.category=this.formdata.category
         this.productForm.patchValue({
          productName: this.formdata.productName,          
          stock:this.formdata.stock,
          sellingQty:this.formdata.sellingQuantity,
          sellingPrice:this.formdata.sellingPrice,
          unitPrice:this.formdata.unitPrice,
          tags:this.formdata.tags,
          description: this.formdata.description,
          status: st,
          
         });     
         this.imageSrc1="assets/products/"+this.formdata.img1,
         this.imageSrc2="assets/products/"+this.formdata.img2,
         this.imageSrc3="assets/products/"+this.formdata.img3
 
       })
     }
 

  }
  img_clk_1(event: any){
    this.imgfile[0]=event.target.files[0]
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    this.imageSrc1 = this.sanitizer.bypassSecurityTrustUrl(imgUrl)

  }
  img_clk_2(event: any){
    this.imgfile[1]=event.target.files[0]
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    this.imageSrc2 = this.sanitizer.bypassSecurityTrustUrl(imgUrl)
    
  }
  img_clk_3(event: any){
    this.imgfile[2]=event.target.files[0]
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    this.imageSrc3 = this.sanitizer.bypassSecurityTrustUrl(imgUrl)
    
  }
  add() {
    this.submitted = true;
    if (this.productForm.valid) {
      this.valid = true;
      const name = this.productForm.value.productName;
      const cat=this.productForm.value.categoryId;
      const sellingqty=this.productForm.value.sellingQty
      const sellingprice=this.productForm.value.sellingPrice
      const stock=this.productForm.value.stock
      const unitprice=this.productForm.value.unitPrice
      const tags=this.productForm.value.tags
      const desc = this.productForm.value.description;
      let status = this.productForm.value.status;
      if(status==false)
        status=0
        else if(status==true)
        status=1
      const data = {
        "productName": name,
        "category":cat,
        "stock":stock,
        "sellingQuantity":sellingqty,
        "sellingPrice":sellingprice,
        "unitPrice":unitprice,
        "tags":tags,
        "description": desc,
        "status": status
      }
      
      const formdata = new FormData()
      formdata.append("formdata", JSON.stringify(data))          
     /* console.log(this.imgfile[0],this.imgfile[1],this.imgfile[2])*/
      for (let i = 0; i < this.imgfile.length; i++)
      formdata.append('image', this.imgfile[i]);

      if (this.param != 0) 
      this.service.updateProduct(this.param,formdata).subscribe((resp: any) => {
        //this.router.navigateByUrl("admin/viewproducts");
        alert("success")

      })
      else
      {
      this.service.saveProduct(formdata).subscribe((resp: any) => {
        //this.router.navigateByUrl("admin/viewproducts");
        alert("success");
         })
        }
    }

  }

}
