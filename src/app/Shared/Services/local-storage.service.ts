import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
 
  constructor() { }

  SetLocalStorageForArticleData(_ArticleData:any){
    localStorage.setItem('ArticleData',JSON.stringify(_ArticleData))
  }

  GetLocalStorageForArticleData(){
    let _ParsedData;
    _ParsedData = JSON.parse(localStorage.getItem('ArticleData')!);
    return _ParsedData;
  }

  ClearLocalStorage() {
    localStorage.removeItem('ArticleData');
  }

}
