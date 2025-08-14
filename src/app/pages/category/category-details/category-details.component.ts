import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent implements OnInit {
  categoryId: any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;

  }


}
