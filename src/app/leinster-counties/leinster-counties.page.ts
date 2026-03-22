import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton,IonButtons, IonBackButton,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-leinster-counties',
  templateUrl: './leinster-counties.page.html',
  styleUrls: ['./leinster-counties.page.scss'],
  standalone: true,
  imports: [IonButton,IonButtons, IonBackButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LeinsterCountiesPage implements OnInit {
counties: string[] = ["Carlow", "Dublin", "Kildare",
"Kilkenny", "Laois", "Longford", "Louth", "Meath",
"Offaly", "Westmeath", "Wexford", "Wicklow"];
  constructor() { }

  ngOnInit() {
  }

}
