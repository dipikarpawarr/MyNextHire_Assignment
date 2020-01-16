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

    ngOnInit(){

        let urlFromID = parseInt(this.route.snapshot.paramMap.get('ID'));
        this.urlID = urlFromID; 

        // Instead of JSON file, we can use REST Services. Accordingly we can change keys.
        this.httpClient.get("assets/JSON_Files/" + this.urlID + ".json").subscribe(data => {
            console.log(data);
            this.JD = data;
        })

    }
}