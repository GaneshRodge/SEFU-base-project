import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-im',
  templateUrl: './list-of-im.component.html',
  styleUrls: ['./list-of-im.component.css']
})
export class ListOfImComponent implements OnInit {

  demoArray: any = [
    {imName:'abc', nickname:'xyz', city:'pune', phone: 9673763071, business:'TechMahindra', debitAcc:'123456789', imLimit:1000, limitDate:"10/05/2022", Status:'Approved', Action: true},
    {imName:'abc', nickname:'xyz', city:'pune', phone: 9673763071, business:'TechMahindra', debitAcc:'123456789', imLimit:1000, limitDate:"10/05/2022", Status:'Approved', Action: true},
    {imName:'abc', nickname:'xyz', city:'pune', phone: 9673763071, business:'TechMahindra', debitAcc:'123456789', imLimit:1000, limitDate:"10/05/2022", Status:'Approved', Action: true},
    {imName:'abc', nickname:'xyz', city:'pune', phone: 9673763071, business:'TechMahindra', debitAcc:'123456789', imLimit:1000, limitDate:"10/05/2022", Status:'Approved', Action: true},
    {imName:'abc', nickname:'xyz', city:'pune', phone: 9673763071, business:'TechMahindra', debitAcc:'123456789', imLimit:1000, limitDate:"10/05/2022", Status:'Approved', Action: true},
    {imName:'abc', nickname:'xyz', city:'pune', phone: 9673763071, business:'TechMahindra', debitAcc:'123456789', imLimit:1000, limitDate:"10/05/2022", Status:'Approved', Action: true},
    {imName:'abc', nickname:'xyz', city:'pune', phone: 9673763071, business:'TechMahindra', debitAcc:'123456789', imLimit:1000, limitDate:"10/05/2022", Status:'Approved', Action: true},
    {imName:'abc', nickname:'xyz', city:'pune', phone: 9673763071, business:'TechMahindra', debitAcc:'123456789', imLimit:1000, limitDate:"10/05/2022", Status:'Approved', Action: true},
    {imName:'abc', nickname:'xyz', city:'pune', phone: 9673763071, business:'TechMahindra', debitAcc:'123456789', imLimit:1000, limitDate:"10/05/2022", Status:'Approved', Action: true},
    {imName:'abc', nickname:'xyz', city:'pune', phone: 9673763071, business:'TechMahindra', debitAcc:'123456789', imLimit:1000, limitDate:"10/05/2022", Status:'Approved', Action: true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
