import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(App, {
    providers: [
        provideRouter(routeConfig),
        provideAnimationsAsync(),
    ]
})
  .catch((err) => console.error(err));
