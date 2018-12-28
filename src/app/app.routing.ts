import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/index';
import { FeedbackComponent } from './feedback/feedback.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);  