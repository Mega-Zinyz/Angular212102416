import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css'
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient) { }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this._table1 = $("#table1").DataTable
    (
      {
        "columnDefs" : 
        [
          {
            "targets" : 2,
            "className" : "text-right"
          }
        ]
      }
    );

    this.getData();
  }

  ngOnInit(): void {
      
  }

  getData(): void {
    console.log("getData()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=9e3ca9dbf3ec40f19ea8d327cace6aad"

    this.http.get(url)
    .subscribe((data : any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "", "USD");
      console.log("USD : " + idr2);
      var row = [1, "USD", idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
      console.log("SGD : " + sgd2);
      var row = [2, "SGD", sgd2];
      this._table1.row.add(row);
      
      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
      console.log("BND : " + bnd2);
      var row = [3, "BND", bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, "en-US", "", "HKD");
      console.log("HKD : " + hkd2);
      var row = [4, "HKD", hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US", "", "BTC");
      console.log("BTC : " + btc2);
      var row = [5, "BTC", btc2];
      this._table1.row.add(row);

      var rub = rates.IDR / rates.RUB;
      var rub2 = formatCurrency(rub, "en-US", "", "RUB");
      console.log("RUB : " + rub2);
      var row = [6, "RUB", rub2];
      this._table1.row.add(row);

      var nad = rates.IDR / rates.NAD;
      var nad2 = formatCurrency(nad, "en-US", "", "NAD");
      console.log("NAD : " + nad2);
      var row = [7, "NAD", nad2];
      this._table1.row.add(row);

      var cup = rates.IDR / rates.CUP;
      var cup2 = formatCurrency(cup, "en-US", "", "CUP");
      console.log("CUP : " + cup2);
      var row = [8, "CUP", cup2];
      this._table1.row.add(row);

      var czk = rates.IDR / rates.CZK;
      var czk2 = formatCurrency(czk, "en-US", "", "CZK");
      console.log("CZK : " + czk2);
      var row = [9, "CZK", czk2];
      this._table1.row.add(row);

      var dop = rates.IDR / rates.DOP;
      var dop2 = formatCurrency(dop, "en-US", "", "DOP");
      console.log("DOP : " + dop2);
      var row = [10, "DOP", dop2];
      this._table1.row.add(row);

      this._table1.draw(false)
    })
  }
}
