# TestAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0.

### This project demonstrates
 - Dynamic component loading using directive
 - REST call to backend
 - Reactive  form with dynamic patching of form elements.


### Dockerisation
  1. Environment variable externalisation :   
     a. Introduce new template env JS : add a new script `env.js` (can be found under `assets` folder)   
     b. Include this JS: include this script in `index.html` like `<script src="assets/env.js"></script>`

  2. Env variable injection  
     In the `environments/environment.ts` and `environment.prod.ts` files add the new property `apiUrl: (window as { [key: string]: any })["env"]["apiUrl"] || "default",`  
     This would replace the `apiUri` from the `env.js` file .

  3. Docker build  
    Build the docker image (from root of the project) using `docker build -t angular-test-app-image -f DockerFile .`  
    This would build the Angular project and copy the whole project to the nginx `html` folder.  
    During runtime  docker  would also replace the env variables with the ones passed .
    
  4. Docker run  
     Run the docker image using `docker run --name av-app-container --rm -p 8080:80 -e API_URL=http://localhost:2200/  angular-test-app-image`  
     Remember to use the `--rm` flag to remove the container after it is killed. 
     Also notice how the env variable `API_URL` is passed.
    

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
