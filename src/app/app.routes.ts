import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

export const routes: Routes = [
    /*{ 
        path: 'hello', loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule) 
    }*/
    {
        path: '',
        component: HelloComponent
    }
];
