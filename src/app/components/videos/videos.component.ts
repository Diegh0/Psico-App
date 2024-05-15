import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, from } from 'rxjs';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { EmocionesService } from '../../services/emociones.service';
import { VideosService } from '../../services/videos.service';
import { collection, query, where, getDocs, Firestore } from "firebase/firestore";
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TemaAppService } from '../../services/tema-app.service';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [NgIf,AsyncPipe,NgFor],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {
  sentimiento: string;
  videos$: Observable<any[]>;

  constructor(private route: ActivatedRoute, private videoService: VideosService, private sanitizer: DomSanitizer) {}
  temaService = inject(TemaAppService);
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sentimiento = params['sentimiento'];
      this.getVideosBySentimiento(this.sentimiento);
    });
  }

  getVideosBySentimiento(sentimiento: string): void {
    this.videos$ = this.videoService.getVideosBySentimiento(sentimiento);
  }
  getSafeUrl(videoUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
  isDarkTheme(): boolean {
    return this.temaService.isDarkTheme();
  }
}
