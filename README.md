# MoneyTransfer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Structure of the Project

In this project inside src>app>components, I have stored all the components. As I am not using multiple module or lazy loading concept here thats why these components are independent components. Also, they all are reusable components. For searching and filtering we can use pipe as well, But I didn't use it because I wanted to show the actual logic behind the pipes. Otherwise pipes are the best way for these things. 

## Responsive

This project is working fine for Mobile device and Desktop device(I didn't write media queries for Table)

## use of BehaviorSubject

As you can see, I used "BehaviorSubject" in amount-transfer component, we can skip this as well and use normal variable inside amount file, but the reasons behind using "BehaviorSubject" are -
    1. In "BehaviorSubject" we can pass initial value, I am passing "5824.76"
    2. In future If we want to show "5824.76" somewhere else on screen(in different component) then we can update the amount at both the places at the same time by subscribing this "BehaviorSubject" and getting the next value by using .next()