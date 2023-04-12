import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string ='default'
  sellerName:string =''
  searchResult:undefined|product[]

  constructor(private router:Router,private productService:ProductService){}

  ngOnInit():void{
    this.router.events.subscribe((val:any)=>{

      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          let sellerStore = localStorage.getItem('seller')
          let sellerData = sellerStore && JSON.parse(sellerStore)[0]
          this.sellerName = sellerData.name
          this.menuType='seller'
        }else{
          this.menuType='default'
        }

      }
    })
  }

  logout(){
    localStorage.removeItem('seller')
    this.router.navigate(['/'])
  }

  searchProduct(query:KeyboardEvent){
    if(query){
      const element  = query.target as HTMLInputElement
      this.productService.searchProduct(element.value).subscribe((res)=>{
        /* if(res.length>5){
          res.length = length
        } */
        this.searchResult = res
      })
    }
  }

  hideSearch(){
    this.searchResult = undefined
  }

}
