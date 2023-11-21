import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ApiService} from "./api/api.service";
import {ItemsService} from "./api/items.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, MatIconModule],
  providers:[ApiService, ItemsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
