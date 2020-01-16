import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
    selector:'app-career',
    templateUrl:'./Career.component.html',
    styleUrls:['./Career.component.css']
})
export class CareerComponent implements OnInit {
    public searchText : string;

    careerTableData : any = [];
    
    constructor(private router:Router, private httpClient:HttpClient){}

    ngOnInit(){
        //Here I have used JSON file for dynamic data. Instead of JSON file you can use your REST API.
        this.httpClient.get("assets/Table_Data.json").subscribe(data => {
            console.log(data);
            this.careerTableData = data;
        })

    }

   onSelect(careerArr){
        this.router.navigate(['/jobDescription', careerArr.ID]);
    }
}