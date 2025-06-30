import { Component } from '@angular/core';
import { Recipe, Ingredient, Step } from '../../recipe.model';
import { RecipseService } from '../../recipse.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-db',
  imports: [CommonModule, FormsModule],
  templateUrl: './db.component.html',
  styleUrl: './db.component.css'
})
export class DbComponent {

  recipes: Recipe[] = [];
  editingRecipe: Recipe | null = null;
  isEditing = false;
  isCreating = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  
  // Form per nuova ricetta
  newRecipe: Recipe = {
    id: '',
    title: '',
    subtitle: '',
    cooking_time: '',
    serving: '',
    main_image: '',
    video_url: '',
    ingredients: [],
    steps: []
  };

  // Ingredienti e step temporanei per il form
  newIngredient: Ingredient = { name: '', quantity: '' };
  newStep: Step = { step: '', title: '', description: '' };

  // Variabili separate per il form di modifica
  editIngredient: Ingredient = { name: '', quantity: '' };
  editStep: Step = { step: '', title: '', description: '' };

  constructor(private recipesService: RecipseService) {}

  ngOnInit(): void {
    this.loadRecipes();
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

  deleteRecipe(id: string) {
    if (confirm('Sei sicuro di voler eliminare questa ricetta?')) {
      this.isLoading = true;
      this.errorMessage = '';
      
      this.recipesService.deleteRecipe(id).subscribe({
        next: () => {
          this.loadRecipes();
          this.successMessage = 'Ricetta eliminata con successo!';
          setTimeout(() => this.successMessage = '', 3000);
        },
        error: (err) => {
          console.error('Errore cancellazione', err);
          this.errorMessage = 'Errore nell\'eliminazione della ricetta: ' + err.message;
          this.isLoading = false;
        },
      });
    }
  }

  updateRecipe(recipe: Recipe) {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.recipesService.updateRecipe(recipe.id, recipe).subscribe({
      next: (updated) => {
        console.log('Aggiornato:', updated);
        this.loadRecipes();
        this.cancelEdit();
        this.successMessage = 'Ricetta aggiornata con successo!';
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        console.error('Errore aggiornamento', err);
        this.errorMessage = 'Errore nell\'aggiornamento della ricetta: ' + err.message;
        this.isLoading = false;
      },
    });
  }

  // Metodi per gestire l'editing
  startEdit(recipe: Recipe) {
    this.editingRecipe = { ...recipe };
    this.isEditing = true;
    this.isCreating = false;
    this.errorMessage = '';
  }

  cancelEdit() {
    this.editingRecipe = null;
    this.isEditing = false;
    this.isCreating = false;
    this.resetNewRecipe();
    this.errorMessage = '';
  }

  // Metodi per gestire la creazione
  startCreate() {
    this.isCreating = true;
    this.isEditing = false;
    this.editingRecipe = null;
    this.resetNewRecipe();
    this.errorMessage = '';
  }

  createRecipe() {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.recipesService.createRecipe(this.newRecipe).subscribe({
      next: (created) => {
        console.log('Creata:', created);
        this.loadRecipes();
        this.cancelEdit();
        this.successMessage = 'Ricetta creata con successo!';
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        console.error('Errore creazione', err);
        this.errorMessage = 'Errore nella creazione della ricetta: ' + err.message;
        this.isLoading = false;
      },
    });
  }

  // Metodi per gestire ingredienti e step
  addIngredient() {
    if (this.isEditing && this.editingRecipe) {
      if (this.editIngredient.name && this.editIngredient.quantity) {
        this.editingRecipe.ingredients.push({ ...this.editIngredient });
        this.editIngredient = { name: '', quantity: '' };
      }
    } else {
      if (this.newIngredient.name && this.newIngredient.quantity) {
        this.newRecipe.ingredients.push({ ...this.newIngredient });
        this.newIngredient = { name: '', quantity: '' };
      }
    }
  }

  removeIngredient(index: number) {
    if (this.isEditing && this.editingRecipe) {
      this.editingRecipe.ingredients.splice(index, 1);
    } else {
      this.newRecipe.ingredients.splice(index, 1);
    }
  }

  addStep() {
    if (this.isEditing && this.editingRecipe) {
      if (this.editStep.title && this.editStep.description) {
        this.editStep.step = (this.editingRecipe.steps.length + 1).toString();
        this.editingRecipe.steps.push({ ...this.editStep });
        this.editStep = { step: '', title: '', description: '' };
      }
    } else {
      if (this.newStep.title && this.newStep.description) {
        this.newStep.step = (this.newRecipe.steps.length + 1).toString();
        this.newRecipe.steps.push({ ...this.newStep });
        this.newStep = { step: '', title: '', description: '' };
      }
    }
  }

  removeStep(index: number) {
    if (this.isEditing && this.editingRecipe) {
      this.editingRecipe.steps.splice(index, 1);
      // Rinumera i step
      this.editingRecipe.steps.forEach((step, i) => {
        step.step = (i + 1).toString();
      });
    } else {
      this.newRecipe.steps.splice(index, 1);
      // Rinumera i step
      this.newRecipe.steps.forEach((step, i) => {
        step.step = (i + 1).toString();
      });
    }
  }

  private resetNewRecipe() {
    this.newRecipe = {
      id: '',
      title: '',
      subtitle: '',
      cooking_time: '',
      serving: '',
      main_image: '',
      video_url: '',
      ingredients: [],
      steps: []
    };
    this.newIngredient = { name: '', quantity: '' };
    this.newStep = { step: '', title: '', description: '' };
    this.editIngredient = { name: '', quantity: '' };
    this.editStep = { step: '', title: '', description: '' };
  }

}
