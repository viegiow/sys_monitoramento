import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HumidityService {

  constructor() { }

  getUmidade() {
    console.log("hmm úmido")
  }

  getAcidez() {
    console.log("hmm àcido")
  }

  getNutrientes() {
    console.log("hmm úmido")
  }
}
