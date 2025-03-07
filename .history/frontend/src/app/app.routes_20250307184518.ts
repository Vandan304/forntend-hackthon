import { Routes } from '@angular/router';
import { PostConfessionComponent } from './components/post-confession/post-confession.component';

export const routes: Routes = [
    {
        path:'post-confession',
        component:PostConfessionComponent
    },
    {
        path:'secret-msg'
    }
];
