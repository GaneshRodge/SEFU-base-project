import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-vendor-finance',
  templateUrl: './vendor-finance.component.html',
  styleUrls: ['./vendor-finance.component.css']
})
export class VendorFinanceComponent implements OnInit {

  toggle = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  show() {
    this.router.navigate(['manageIm'], {relativeTo:this.route});
    this.toggle = true
  }

}
