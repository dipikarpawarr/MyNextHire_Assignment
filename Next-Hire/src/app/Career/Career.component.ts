import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

        // Instead of JSON file, we can use REST Services. Accordingly we can change keys.
        this.httpClient.get("assets/JSON_Files/Table_Data.json").subscribe(data => {
            console.log(data);
            this.careerTableData = data;
        })

    }

   onSelect(careerArr){
       // Using routing, we can navigate to Job Description Page with current Job ID
       // OR We can directly navigate to particular page using this url-'http://localhost:4200/jobApplication/58'
        this.router.navigate(['/jobDescription', careerArr.ID]);
    }
}