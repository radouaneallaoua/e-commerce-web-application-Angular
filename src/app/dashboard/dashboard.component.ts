import { Component } from '@angular/core';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
import {NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgxChartsModule, NgOptimizedImage],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  multi: any[]=[
    {
      "name": "Produit 1",
      "series": [
        {
          "name": "8",
          "value": 100
        },
        {
          "name": "9",
          "value": 200
        }
      ]
    },

    {
      "name": "Produit 2",
      "series": [
        {
          "name": "8",
          "value": 70
        },
        {
          "name": "9",
          "value": 80
        }
      ]
    },

    {
      "name": "Produit 3",
      "series": [
        {
          "name": "8",
          "value": 30
        },
        {
          "name": "9",
          "value": 40
        }
      ]
    },
    {
      "name": "Produit 4",
      "series": [
        {
          "name": "8",
          "value": 8
        },
        {
          "name": "9",
          "value": 25
        }
      ]
    }
    ,
    {
      "name": "Produit 5",
      "series": [
        {
          "name": "8",
          "value": 7
        },
        {
          "name": "9",
          "value": 15
        }
      ]
    }
  ];
  single2 :any[]= [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
    {
      "name": "UK",
      "value": 5200000
    },
    {
      "name": "Italy",
      "value": 7700000
    },
    {
      "name": "Spain",
      "value": 4300000
    }
  ];

  view = [700, 400];

  // options

  view2: any[] = [500, 400];
  legend2: boolean = true;
  legendPosition2: LegendPosition = LegendPosition.Below;

  colorScheme2 = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Produits';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Ventes';
  legendTitle: string = 'Mois';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi:this.multi,single2:this.single2})
  }

 onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  onSelect2(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate2(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate2(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  protected readonly Number = Number;
}
