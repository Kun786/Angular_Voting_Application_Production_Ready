import { LocalStorageService } from './../../../Shared/Services/local-storage.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit, OnChanges {
  @Input() OutgoingValueToChildComponent: any;
  AddBackGroundImage = {
    'background-image': '',
    'background-repeat': 'no-repeat'
  };
  _Data: any;
  _TemporaryArray: any = [];
  _LocalStorageData: any;
  constructor(private _LocalStorageService: LocalStorageService) { }
  ngOnInit(): void {
    this.processArticle(this.OutgoingValueToChildComponent);
  }

  ngOnChanges(): void {
    this.processArticle(this.OutgoingValueToChildComponent);
  }


  //Adding Article To Local Storage
  private processArticle(data: any): void {
    if (data != null) {
      this._LocalStorageData = this._LocalStorageService.GetLocalStorageForArticleData();
      if (this._LocalStorageData != null) {
        this._LocalStorageData.map((_KeyPair: any) => {
          this._TemporaryArray.push({
            _Id: _KeyPair._Id,
            Title: _KeyPair.Title,
            Link: _KeyPair.Link,
            ImageUrl: _KeyPair.ImageUrl,
            _Points: 0
          })
        })
        this._TemporaryArray.push(data);
      } else {
        this._TemporaryArray.push(data);
      }
      this._LocalStorageService.SetLocalStorageForArticleData(this._TemporaryArray);
      this._Data = this._LocalStorageService.GetLocalStorageForArticleData();
      this._TemporaryArray = [];
      console.log(this._Data.length);
      // this.AddBackGroundImage['background-image'] = 'url('+this._Data.ImageUrl+')';
    } else {
      this._Data = this._LocalStorageService.GetLocalStorageForArticleData();
      this._TemporaryArray = [];
      console.log(this._Data.length);
    }
  }
  //Adding Article To Local Storage


  //Voting to UpVote
  UpVote(_Id: any) {
    this._LocalStorageData = this._LocalStorageService.GetLocalStorageForArticleData();
    this._LocalStorageData.map((_KeyPair: any) => {
      if (_KeyPair._Id === _Id) {
        _KeyPair._Points++;
        this._LocalStorageData.sort((a:any, b:any) => parseFloat(b._Points) - parseFloat(a._Points));
        this._LocalStorageService.SetLocalStorageForArticleData(this._LocalStorageData);
        this.OutgoingValueToChildComponent = null;
        this.ngOnInit();
      }
    })
  }
  //Voting to UpVote


  //Voting to DownVote
  DownVote(_Id: any) {
    this._LocalStorageData = this._LocalStorageService.GetLocalStorageForArticleData();
    this._LocalStorageData.map((_KeyPair: any) => {
      if (_KeyPair._Id === _Id) {
        if (_KeyPair._Points != 0) {
          _KeyPair._Points--;
          this._LocalStorageService.SetLocalStorageForArticleData(this._LocalStorageData);
          this.OutgoingValueToChildComponent = null;
          this.ngOnInit();
        }
      }
    })
  }
  //Voting to DownVote


  //Delete Article Card From Local Storage
  Delete(_Id: any) {
    this._LocalStorageData = this._LocalStorageService.GetLocalStorageForArticleData();
    if (this._LocalStorageData.length > 1) {
      this._LocalStorageData.map((_KeyPair: any) => {
        if (_KeyPair._Id === _Id) {
          let _LocalStorageToUpdate = this._LocalStorageData.filter((_KeyPair: any) => _KeyPair._Id != _Id);
          this._LocalStorageService.SetLocalStorageForArticleData(_LocalStorageToUpdate);
        } else {
          void (0);
        }
      })
    } else {
      this._LocalStorageService.ClearLocalStorage();
    }
    this.OutgoingValueToChildComponent = null;
    this.ngOnInit();
  }
  //Delete Article Card From Local Storage


}


