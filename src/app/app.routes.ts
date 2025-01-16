import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';

export const routes: Routes = [
    { 
        path: '',
        component: HelloComponent
    },
    {
        path: '',
        component: WorldComponent
    }
];
