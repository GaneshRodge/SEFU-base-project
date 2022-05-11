import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-manage-im',
  templateUrl: './manage-im.component.html',
  styleUrls: ['./manage-im.component.css']
})
export class ManageImComponent implements OnInit {

  // isSelected: boolean = false;
  toggle = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  listShow() {
    this.router.navigate(['list-of-im'], {relativeTo:this.route});
    this.toggle = true;
    //this.isSelected = true
  }

  // getHeaderStyle(){
  //   if (this.router.url.includes('/list-of-im/') {
  //     return 'red'
  //   }
  // }

}
