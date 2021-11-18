import { LocalStorageService } from './../../../Shared/Services/local-storage.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit, OnChanges {
  @Input() OutgoingValueToChildComponent: any;

  _GetHighestPoints: Number = 0;
  _Data: any;
  _TemporaryArray: any = [];
  constructor(private _LocalStorageService: LocalStorageService) { }
  ngOnInit(): void {
    console.log('ngoninti');
    console.log(this.OutgoingValueToChildComponent);
    // this.processArticle(this.OutgoingValueToChildComponent);
  }

  ngOnChanges(): void {
    console.log('ngonchange');
    console.log(this.OutgoingValueToChildComponent);
    // this.processArticle(this.OutgoingValueToChildComponent);
  }


  //Adding Article To Local Storage
  private processArticle(data: any): void {
    let _LocalStorageData = this._LocalStorageService.GetLocalStorageForArticleData();
    if (data != null) {
      if (_LocalStorageData != null) {
        _LocalStorageData.map((_KeyPair: any) => {
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
      //ToDo if the local storage is empty dont run anything
      if (_LocalStorageData != null) {
        this._Data = this._LocalStorageService.GetLocalStorageForArticleData();
        this._GetHighestPoints = this._Data[0]._Points;
      }else{
        this._Data = null;
      }
    }
  }
  //Adding Article To Local Storage


  //Voting to UpVote
  UpVote(_Id: any) {
    let _LocalStorageData = this._LocalStorageService.GetLocalStorageForArticleData();
    let _SortedItems = _LocalStorageData
      .map((_KeyPair: any) => {
        if (_KeyPair._Id === _Id) {
          _KeyPair._Points++;
        }
        return _KeyPair;
      })
      .sort((a: any, b: any) => b._Points - a._Points);
    this._LocalStorageService.SetLocalStorageForArticleData(_SortedItems);
    this.OutgoingValueToChildComponent = null;
    this.ngOnInit();



    // _LocalStorageData.map((_KeyPair: any) => {
    //   if (_KeyPair._Id === _Id) {
    //     _KeyPair._Points++;
    //     let _SortedArray = _LocalStorageData.sort((a:any, b:any) => (b._Points) - (a._Points));
    //     this._GetHighestPoints = _SortedArray[0]._Points;
    //     this._LocalStorageService.SetLocalStorageForArticleData(_LocalStorageData);
    //     this.OutgoingValueToChildComponent = null;
    //     this.ngOnInit();
    //   }
    // })
  }
  //Voting to UpVote


  DownVote(_Id: any) {
    let _LocalStorageData = this._LocalStorageService.GetLocalStorageForArticleData();
    const _SortedItems = _LocalStorageData
      .map((_KeyPair: any) => {
        if (_KeyPair._Id === _Id) {
          if (_KeyPair._Points != 0) {
            _KeyPair._Points--;
          }
        }
        return _KeyPair;
      })
      .sort((a: any, b: any) => b._Points - a._Points);
    this._LocalStorageService.SetLocalStorageForArticleData(_SortedItems);
    this.OutgoingValueToChildComponent = null;
    this.ngOnInit();
    // _LocalStorageData = this._LocalStorageService.GetLocalStorageForArticleData();
    // _LocalStorageData.map((_KeyPair: any) => {
    //   if (_KeyPair._Id === _Id) {
    //     if (_KeyPair._Points != 0) {
    //       _KeyPair._Points--;
    //       _LocalStorageData.sort((a:any, b:any) => (b._Points) - (a._Points));
    //       this._LocalStorageService.SetLocalStorageForArticleData(_LocalStorageData);
    //       this.OutgoingValueToChildComponent = null;
    //       this.ngOnInit();
    //     }
    //   }
    // })
  }
  //Voting to DownVote


  //Delete Article Card From Local Storage


  Delete(_Id: any) {
    // console.time('Start');
    // let _ObjectToDelete: any;
    // let _LocalStorageData = this._LocalStorageService.GetLocalStorageForArticleData();
    // if (_LocalStorageData.length > 1) {
    //   let _SortedItems = _LocalStorageData.map((_KeyPair: any) => {
    //     if (_KeyPair._Id === _Id) {
    //       return _KeyPair;
    //     }else{
    //       void(0);
    //     }
    //   })
    //   console.log(_SortedItems);
    //   // this._LocalStorageService.SetLocalStorageForArticleData(_SortedItems);
    // } else {
    //   this._LocalStorageService.ClearLocalStorage();
    // }
    // this.OutgoingValueToChildComponent = null;
    // this.ngOnInit();
    // console.timeEnd('Start');
    let _LocalStorageData = this._LocalStorageService.GetLocalStorageForArticleData();
    if (_LocalStorageData.length > 1) {
      let _FilteredArray = _LocalStorageData.filter((_KeyPair: any) => _KeyPair._Id != _Id);
      this._LocalStorageService.SetLocalStorageForArticleData(_FilteredArray);
    }
    else {
      this._LocalStorageService.ClearLocalStorage();
    }
    this.OutgoingValueToChildComponent = null;
    this.ngOnInit();
  }


  //Delete Article Card From Local Storage


}


