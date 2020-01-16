import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-jobApplication',
    templateUrl:'./JobApplication.component.html',
    styleUrls:['./JobApplication.component.css']
})
export class JobApplicationComponent implements OnInit{
    JD : any = [];
    public urlID;

    constructor(private route:ActivatedRoute, private httpClient:HttpClient){}
    //constructor(private httpClient:HttpClient){}

    ngOnInit(){
        //Here I have used JSON file for dynamic data. Instead of JSON file you can use your REST API.
        this.httpClient.get("assets/Job_Description.json").subscribe(data => {
            console.log(data);
            this.JD = data;
        })

        let urlFromID = parseInt(this.route.snapshot.paramMap.get('ID'));
        this.urlID = urlFromID; 
    }
}