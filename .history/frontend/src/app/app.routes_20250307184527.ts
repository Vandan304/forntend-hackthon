import { Routes } from '@angular/router';
import { PostConfessionComponent } from './components/post-confession/post-confession.component';
import { SecretMessageComponent } from './components/secret-message/secret-message.component';

export const routes: Routes = [
    {
        path:'post-confession',
        component:PostConfessionComponent
    },
    {
        path:'secret-msg',
        component:SecretMessageComponent
    }
];
