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
      <p>Trouver un film avec l'un de nos cinéma partenaire :</p>
      <div class="cinema-list">
        <strong>Paris :</strong> Cachan, La Defence, Creteil<br>
        <strong>Montpellier :</strong> Boutonnet, Beaux Arts, Gambetta<br>
        <strong>Troyes :</strong> Les Sénardes, Sainte-Savine, La Moline
      </div>
    </div>

    <!-- 中间企业信息 -->
    <div class="footer-info">
      <div class="info-column">
        <h4>Entreprise</h4>
        <ul>
          <li><a href="#">À propos de Takima</a></li>
          <li><a href="#">Produit & Services</a></li>
          <li><a href="#">Investisseurs</a></li>
          <li><a href="#">Partenaires</a></li>
        </ul>
      </div>

      <div class="info-column">
        <h4>Contact</h4>
        <ul>
          <li>Adresse : 123 Rue de Takima, Paris</li>
          <li>Email : <a href="mailto:contact@takima.com">contact@takima.com</a></li>
          <li>Téléphone : +33 1 23 45 67 89</li>
          <li><a href="#">Dialogue avec les dirigeants</a></li>
        </ul>
      </div>

      <div class="info-column">
        <h4>Support & Feedback</h4>
        <ul>
          <li><a href="#">Centre d'aide</a></li>
          <li><a href="#">Avis et Feedback</a></li>
          <li><a href="#">Recrutement</a></li>
          <li><a href="#">Droits et déclarations</a></li>
        </ul>
      </div>

      <div class="info-column">
        <h4>Rejoignez-nous</h4>
        <form (submit)="subscribeNewsletter($event)">
          <input type="email" placeholder="Votre email" required />
          <button type="submit">S'inscrire</button>
        </form>
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

    /* 中间影院信息 */
    .footer-middle { margin: 1rem 0; font-size: 0.95rem; }
    .cinema-list { margin-top: 0.5rem; line-height: 1.5; }

    /* 中间企业信息 */
    .footer-info {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 1rem 0;
      text-align: left;
    }
    .info-column {
      flex: 1 1 200px;
      margin: 0.5rem;
    }
    .info-column h4 { margin-bottom: 0.5rem; }
    .info-column ul { list-style: none; padding: 0; }
    .info-column li { margin-bottom: 0.4rem; }
    .info-column a { color: #ccc; text-decoration: none; }
    .info-column a:hover { color: #fff; text-decoration: underline; }

    /* Newsletter */
    .info-column form { display: flex; flex-direction: column; }
    .info-column input { padding: 5px; margin-bottom: 5px; border-radius: 4px; border: none; }
    .info-column button { background-color: #f0a500; border: none; padding: 5px; border-radius: 4px; cursor: pointer; }
    .info-column button:hover { background-color: #ffb84d; }

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

    @media (max-width: 768px) {
      .footer-info { flex-direction: column; text-align: center; }
      .info-column { margin: 0.5rem 0; }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  subscribeNewsletter(event: Event) {
    event.preventDefault();
    alert("Merci pour votre inscription !");
  }
}