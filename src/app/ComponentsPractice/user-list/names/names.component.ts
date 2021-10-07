import { LocalStorageService } from './../../../Shared/Services/local-storage.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit, OnChanges {
  @Input() OutgoingValueToChildComponent: any;

  _GetHighestPoints=27;
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
            _Points: _KeyPair._Points
          })
        })
        this._TemporaryArray.push(data);
      } else {
        this._TemporaryArray.push(data);
      }
      this._LocalStorageService.SetLocalStorageForArticleData(this._TemporaryArray);
      this._Data = this._LocalStorageService.GetLocalStorageForArticleData();
      this._TemporaryArray = [];
    } else {
      this._Data = this._LocalStorageService.GetLocalStorageForArticleData();
    }
  }
  //Adding Article To Local Storage


  //Voting to UpVote
  UpVote(_Id: any) {
    this._LocalStorageData = this._LocalStorageService.GetLocalStorageForArticleData();
    this._LocalStorageData.map((_KeyPair: any) => {
      if (_KeyPair._Id === _Id) {
        _KeyPair._Points++;
        let _SortedArray = this._LocalStorageData.sort((a:any, b:any) => (b._Points) - (a._Points));
        console.log(_SortedArray);
        this._GetHighestPoints = Math.max(this._LocalStorageData.map((o:any) => o._Points), 1);
        console.log(this._GetHighestPoints);
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
          let _SortedArray = this._LocalStorageData.sort((a:any, b:any) => (b._Points) - (a._Points));
          console.log(_SortedArray);
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


