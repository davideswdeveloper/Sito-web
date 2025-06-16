import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .header {
      background-color: white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }

    .main-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }

    .logo h1 {
      font-size: 1.5rem;
      color: #4CAF50;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
    }

    .nav-links a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-links a:hover {
      color: #4CAF50;
    }

    .cta-button {
      background-color: #4CAF50;
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }

    .cta-button:hover {
      background-color: #45a049;
    }

    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .mobile-menu-btn span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: #333;
      margin: 5px 0;
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .mobile-menu-btn {
        display: block;
      }

      .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        padding: 1rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }

      .nav-links.active {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .nav-links li {
        margin: 1rem 0;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
} 