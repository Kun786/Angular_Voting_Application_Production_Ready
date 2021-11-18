import { LocalStorageService } from './../../Shared/Services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  _ArticleObject:any;
  _Title:any;
  _Link:any;
  _ImageUrl:any;
  fazi ='';
  constructor(private _LocalStorageService:LocalStorageService) {}

  ngOnInit(): void {
  }


  SubmitValues(title:HTMLInputElement,link:HTMLInputElement,ImageUrl:HTMLInputElement){;
    const _Key = (Math.random() + 1).toString(36).substring(7);
    this._Title=title.value;
    this._Link=link.value;
    this._ImageUrl=ImageUrl.value;
    this._ArticleObject={
      _Id:_Key,
      Title:this._Title,
      Link:this._Link,
      ImageUrl:this._ImageUrl,
      _Points:0
    }
    title.value="";
    link.value="";
    ImageUrl.value="";
  }




}
