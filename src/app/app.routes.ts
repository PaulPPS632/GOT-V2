import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'temporada/:id',
        loadComponent: () => import('./pages/temporada/temporada.component').then(m => m.TemporadaComponent),
    },
    {
        path: 'temporada/:temporadaId/capitulo/:capituloId',
        loadComponent: () => import('./pages/capitulo/capitulo.component').then(m => m.CapituloComponent),
    },
    {
        path: 'libros',
        loadComponent: () => import('./pages/libros/libros.component').then(m => m.LibrosComponent),
    },
    {
        path: 'libro/:id',
        loadComponent: () => import('./pages/libro/libro.component').then(m => m.LibroComponent),
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
