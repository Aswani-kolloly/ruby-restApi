import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm!: FormGroup
  imgfile: any = []
  submitted = false; 
  imageSrc: any;
  param!: string | number;
  heading = "Add New";
  formdata: any;
  btnHeading = "Save";
  check_val: boolean | undefined
  constructor(private router: Router, private fb: FormBuilder, private service: AdminService, private sanitizer: DomSanitizer, private Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    var b = document.querySelector("#cat") as HTMLDivElement
    b.className = "nav-link  active"
    this.categoryForm = this.fb.group({
      categoryName: ['', [Validators.required, Validators.maxLength(55)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      status: [''],
      file: ['', Validators.required]
    });
    this.param = this.Activatedroute.snapshot.queryParamMap.get('id') || 0;
    console.log("query parameter:" + this.param);

    if (this.param != 0) {
      this.service.viewCategory(this.param).subscribe((resp: any) => {
        this.heading = "UPDATE";
        this.btnHeading = "Update";
        this.formdata = resp;
        console.log(resp)
        let st = 0
        if (this.formdata.status == 1)
          st = 1

        this.categoryForm.patchValue({
          categoryName: this.formdata.name,
          description: this.formdata.description,
          status: st,

        });

        this.imageSrc = "assets/category/"+this.formdata.imgurl
      })
    }

  }
  onFileChanged(event: any) {
    this.imgfile[0] = event.target.files[0]
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(imgUrl)

  }
  add() {
    this.submitted = true;
    if (this.categoryForm.valid) {
      
      const name = this.categoryForm.value.categoryName;
      const desc = this.categoryForm.value.description;
      let status = this.categoryForm.value.status;
      if (status == false)
        status = 0
      else if (status == true)
        status = 1
      const data = {
        "name": name,
        "description": desc,
        "status": status
      }

      const formdata = new FormData()
      formdata.append("formdata", JSON.stringify(data))
      if (this.imgfile[0] != null)
        formdata.append('image', this.imgfile[0]);
      if (this.param != 0)
        this.service.updateCategory(this.param, formdata).subscribe((resp: any) => {
          //this.router.navigateByUrl("admin/viewproducts");
          alert("updated successfully" )

        })
      else
        this.service.saveCategory(formdata).subscribe((resp: any) => {
          //this.router.navigateByUrl("admin/viewproducts");
          alert("saved successfully");

        })
    }

  }

}
