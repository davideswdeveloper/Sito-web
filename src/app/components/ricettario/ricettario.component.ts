import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipseService } from '../../recipse.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ricettario',
  imports: [CommonModule, FormsModule],
  templateUrl: './ricettario.component.html',
  styleUrl: './ricettario.component.css'
})
export class RicettarioComponent implements OnInit{
  constructor(
    public recipesService:RecipseService,
    @Inject(PLATFORM_ID) private platformId: Object
    ){

  }

  recipes: Recipe[] = [];
  selectedRecipe: Recipe | null = null;
  editingRecipe: Recipe | null = null;
  isEditing = false;
  isCreating = false;
  isLoading = false;
  isMobile=false;
  errorMessage = '';
  successMessage = '';
  
  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.checkIfMobile();
  }

  ngOnInit(): void {
    this.loadRecipes();
    this.checkIfMobile();
  }

  private checkIfMobile() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }
  
  loadRecipes() {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.recipesService.getRecipes().subscribe({
      next: (data) => {
        this.recipes = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Errore caricamento ricette', err);
        this.errorMessage = 'Errore nel caricamento delle ricette: ' + err.message;
        this.isLoading = false;
      },
    });
  }

  openRecipeModal(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(recipe)
    document.body.style.overflow = 'hidden'; // Previene lo scroll della pagina
  }

  closeRecipeModal() {
    this.selectedRecipe = null;
    document.body.style.overflow = 'auto'; // Ripristina lo scroll della pagina
  }

  onImageError(event: any) {
    // Fallback per immagini mancanti
    event.target.src = 'assets/images/default-recipe.jpg';
  }
}
