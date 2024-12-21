import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { AppRoutingModule, routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // Importez seulement les modules et fournisseurs nécessaires
  ]
})
.catch(err => console.error(err));
