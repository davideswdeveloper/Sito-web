import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Observable, from } from 'rxjs';
import { Recipe } from './recipe.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipseService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      }
    });
    
  }

  // GET tutte le ricette
  getRecipes(): Observable<Recipe[]> {
    return from(
      this.supabase
        .from('recipes')
        .select('*')
        .then(({ data, error }) => {
          if (error) throw error;
          return data || [];
        })
    );
  }

  // GET ricetta singola per id
  getRecipe(id: string): Observable<Recipe> {
    return from(
      this.supabase
        .from('recipes')
        .select('*')
        .eq('id', id)
        .single()
        .then(({ data, error }) => {
          if (error) throw error;
          return data;
        })
    );
  }

  // DELETE ricetta per id
  deleteRecipe(id: string): Observable<any> {
    return from(
      this.supabase
        .from('recipes')
        .delete()
        .eq('id', id)
        .then(({ error }) => {
          if (error) throw error;
          return { success: true };
        })
    );
  }

  // UPDATE ricetta (PUT)
  updateRecipe(id: string, data: Recipe): Observable<Recipe> {
    return from(
      this.supabase
        .from('recipes')
        .update({
          title: data.title,
          subtitle: data.subtitle,
          cooking_time: data.cooking_time,
          serving: data.serving,
          main_image: data.main_image,
          video_url: data.video_url,
          ingredients: data.ingredients,
          steps: data.steps
        })
        .eq('id', id)
        .select()
        .single()
        .then(({ data, error }) => {
          if (error) throw error;
          return data;
        })
    );
  }

  // POST nuova ricetta
  createRecipe(data: Recipe): Observable<Recipe> {
    return from(
      this.supabase
        .from('recipes')
        .insert({
          title: data.title,
          subtitle: data.subtitle,
          cooking_time: data.cooking_time,
          serving: data.serving,
          main_image: data.main_image,
          video_url: data.video_url,
          ingredients: data.ingredients,
          steps: data.steps
        })
        .select()
        .single()
        .then(({ data, error }) => {
          if (error) throw error;
          return data;
        })
    );
  }
}
