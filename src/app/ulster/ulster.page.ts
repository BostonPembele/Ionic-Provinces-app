import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons,IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ulster',
  templateUrl: './ulster.page.html',
  styleUrls: ['./ulster.page.scss'],
  standalone: true,
  imports: [IonButtons,IonBackButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UlsterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
