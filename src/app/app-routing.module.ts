import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { GalleryComponent } from "../app/gallery/gallery.component"
import { ImageDetailComponent } from "../app/image/image-detail.component"

export const appRoutes:Routes = [
  { path: "gallery", component: GalleryComponent },
  { path: "image/:id", component: ImageDetailComponent },
  { path: "", redirectTo: "/gallery", pathMatch: 'full' },
]