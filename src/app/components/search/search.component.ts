import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  noSearchItems:boolean=false
  searchResult:undefined|product[]
  constructor(private activeRoute:ActivatedRoute,private productService:ProductService){}

  ngOnInit():void{
    let query = this.activeRoute.snapshot.paramMap.get('query');
    query && this.productService.searchProduct(query).subscribe((result)=>{
      if(result.length<1){
        this.noSearchItems = true
      }
      this.searchResult=result;
    })
  }
}
