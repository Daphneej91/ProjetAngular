import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <footer class="site-footer">

    <!-- 顶部社交媒体 -->
    <div class="footer-top">
      <a href="https://www.facebook.com" target="_blank">Facebook</a> |
         
      
      <a href="https://www.instagram.com" target="_blank">Instagram</a> |
      <a href="https://twitter.com" target="_blank">X</a> |
      <a href="https://www.tiktok.com" target="_blank">TikTok</a>
    </div>

    <!-- 中间影院信息 -->
    <div class="footer-middle">
      <p>Trouver un film avec l’un de nos cinéma partenaire :</p>
      <div class="cinema-list">
        <strong>Paris :</strong> Cachan, La Defence, Creteil<br>
        <strong>Montpellier :</strong> Boutonnet, Beaux Arts, Gambetta<br>
        <strong>Troyes :</strong> Les Sénardes, Sainte-Savine, La Moline
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer-bottom">
      <button class="back-to-top" (click)="scrollToTop()">↑ Top</button>
      <p class="copyright">©{{currentYear}} Copyright: takima</p>
    </div>

  </footer>
  `,
  styles: [`
    .site-footer {
      background-color: #1c1c1c;
      color: #fff;
      padding: 2rem;
      text-align: center;
      font-family: Arial, sans-serif;
    }

    /* 顶部社交媒体 */
    .footer-top {
      margin-bottom: 1rem;
    }

    .social-icon {
      display: inline-block;
      margin: 0 0.5rem;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50%;
      color: #fff;
      text-align: center;
      font-size: 1.2rem;
      transition: background-color 0.3s;
    }
    .social-icon i { vertical-align: middle; }

    /* 不同社媒颜色 */
    .social-icon.fb { background-color: #3b5998; }
    .social-icon.fb:hover { background-color: #2d4373; }

    .social-icon.ig { background-color: #E4405F; }
    .social-icon.ig:hover { background-color: #c1355a; }

    .social-icon.x { background-color: #1DA1F2; }
    .social-icon.x:hover { background-color: #0d95e8; }

    .social-icon.tiktok { background-color: #010101; }
    .social-icon.tiktok:hover { background-color: #333; }

    /* 中间影院信息 */
    .footer-middle { margin: 1rem 0; font-size: 0.95rem; }
    .cinema-list { margin-top: 0.5rem; line-height: 1.5; }

    /* 底部 */
    .footer-bottom { margin-top: 1rem; }
    .back-to-top {
      margin-bottom: 0.5rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      background-color: #444;
      color: #fff;
      border: none;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    .back-to-top:hover { background-color: #666; }

    .copyright { font-size: 0.85rem; color: #ccc; }

    @media (max-width: 600px) {
      .social-icon { margin: 0 0.3rem; width: 35px; height: 35px; line-height: 35px; font-size: 1rem; }
      .footer-middle { font-size: 0.9rem; }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}