import { Component, OnInit  } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {dataService} from './service/data-service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  { 
  name = 'Angular'; 
  fieldName : string = "";
  fieldSort : any = {}
  list_Of_Books = [
    {
    
      id:1234,
      book_title:"Book title 1",
      author:"Author Name 3",
      year_published:1991
    },
    {
    
      id:1235,
      book_title:"Book title 2",
      author:"Author Name 2",
      year_published:1992
    },
    {
    
      id:1236,
      book_title:"Book title 3",
      author:"Author Name 1",
      year_published:1993
    },
    {
    
      id:1237,
      book_title:"Book title 4",
      author:"Author Name 45",
      year_published:1994
    },
    {
      id:1238,
      book_title:"Book title 5",
      author:"Author Name 22",
      year_published:1995
    }]

    constructor(private _dataService: dataService) {


    }

    ngOnInit() {
      this._dataService.getBooks().subscribe((response : any) => {
        console.log(response);
        // this.list_Of_Books = response
      });
    }



    sortBookList = (key:string) => {
      this.fieldName = key;
      
      this.list_Of_Books = this.list_Of_Books.sort(function(a, b) {
        // Compare the 2 dates
        if (a[key] < b[key])
            return -1;
          if ( a[key] > b[key])
            return 1;
          return 0;
      });
      Object.keys(this.fieldSort).forEach(fieldkey => {
        if(fieldkey !== key){
          this.fieldSort[fieldkey] = "";
        }
      });
      this.fieldSort[key] = this.fieldSort[key] === 'asc' ? 'desc' : 'asc';
      if(this.fieldSort[key] === 'desc'){
        this.list_Of_Books = this.list_Of_Books.reverse();
      }

    }

}
