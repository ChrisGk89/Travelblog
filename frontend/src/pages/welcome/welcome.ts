import { Component, OnInit } from '@angular/core';

import { ModalController } from 'ionic-angular';
import { Place } from "../../models/place";
import { PlacesService } from "../../services/places";
import { PlacePage } from "../place/place";
import {HomePage} from "../home/home";

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage implements OnInit {
    HomePage = HomePage;
    places: Place[] = [];


    constructor(private modalCtrl: ModalController,
                private placesService: PlacesService) {

    }

    ngOnInit() {
        this.placesService.fetchPlaces()
            .then(
                (places: Place[]) => this.places = places
            );
    }

    ionViewWillEnter() {
        this.places = this.placesService.loadPlaces();
    }

    onOpenPlace(place: Place, index: number) {
        const modal = this.modalCtrl.create(PlacePage, {place: place, index: index});
        modal.present();
        modal.onDidDismiss(
            () => {
                this.places = this.placesService.loadPlaces();
            }
        );
    }



}
