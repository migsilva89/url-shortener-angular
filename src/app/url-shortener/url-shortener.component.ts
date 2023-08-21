import { Component } from '@angular/core';
import { UrlShortenerService } from '../services/url-shortener.service';
import { ShortUrlData } from '../interfaces/data';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css'],
})
export class UrlShortenerComponent {
  shortUrl = '';
  hrefUrl = '';
  originalUrl = '';
  errorMsg = '';

  constructor(private urlShortenerService: UrlShortenerService) {}

  getUrl() {
    this.shortUrl = '';
    this.hrefUrl = '';
    this.errorMsg = '';

    this.urlShortenerService.getShortUrl(this.originalUrl).subscribe({
      next: (data: ShortUrlData) => {
        this.shortUrl = data.result.short_link;
        this.hrefUrl = 'https://' + data.result.short_link;
      },
      error: error => {
        this.errorMsg = error.error;
      },
    });
  }
}
