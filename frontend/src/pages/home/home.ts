import { Component, OnInit } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';
import { AddPlacePage } from "../add-place/add-place";
import { Place } from "../../models/place";
//import { PlacesService } from "../../services/post";
import { Posts } from "../../services/post-service";
import { ShowPage } from "../show/show";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  addPlacePage = AddPlacePage;
  places: Place[] = [];
  posts: Posts[] = [];



  constructor(private modalCtrl: ModalController,
            private navCtrl: NavController,
              private postService: Posts
              ) {

  }

  ngOnInit() {
    

  this.postService.getposts().then((data) => {
      this.posts = data;
      console.log(data);
    });
}




  onOpenPost(id: number) {
    this.navCtrl.push(ShowPage, {id:id});
  }
  


}
