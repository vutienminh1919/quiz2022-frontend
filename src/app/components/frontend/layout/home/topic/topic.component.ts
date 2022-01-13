import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TopicService} from "../../../../../service/topic/topic.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  id: any
  listCategories: any[] = []

  constructor(private topicService: TopicService,
              private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = paramMap.get("id")
    //   this.getById(this.id)
    // })
    this.getAllTopic();
  }


  getAllTopic() {
    this.topicService.listCategory().subscribe(res =>{
      this.listCategories = res;
      console.log(this.listCategories);
    })
  }

  getQuizz(id:any)
  {

  }

}
