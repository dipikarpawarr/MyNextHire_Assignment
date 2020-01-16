import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector:'app-jobDescription',
    templateUrl:'./JobDescription.component.html',
    styleUrls:['./JobDescription.component.css']
})
export class JobDescriptionComponent implements OnInit{
    jobDescription : {ID};

    JD : any = [];
    public urlID;
   
    constructor(private router:Router, private route:ActivatedRoute, private httpClient:HttpClient){}

    ngOnInit(){

        let urlFromID = parseInt(this.route.snapshot.paramMap.get('ID'));
        this.urlID = urlFromID;

        this.jobDescription = {
            ID : this.route.snapshot.params['ID']
        }
       
         // Instead of JSON file, we can use REST Services. Accordingly we just change keys.
        this.httpClient.get("assets/JSON_Files/" + this.urlID + ".json").subscribe(data => {
            console.log(data);
            this.JD = data;
        })
        
    }

    onSelect(jd){
        this.router.navigate(['/jobApplication', jd.ID]);
    }

 }