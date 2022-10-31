import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories: any;

  constructor(private _category: CategoryService) { }

  ngOnInit(): void {
    this._category.categories().subscribe(
      (_data: any) => {
        this.categories = _data;
        console.log(this.categories);
      },
      (_error: any) => {
        console.log(_error);
        Swal.fire('Error', 'error in loading data', 'error');
      }
    )
  }
}