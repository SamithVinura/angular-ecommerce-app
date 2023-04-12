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

  searchResult:undefined|product[]
  constructor(private activeRoute:ActivatedRoute,private productService:ProductService){}

  ngOnInit():void{
    let query = this.activeRoute.snapshot.paramMap.get('query');
    console.warn(query);
    query && this.productService.searchProduct(query).subscribe((result)=>{
      this.searchResult=result;
    })
  }
}
