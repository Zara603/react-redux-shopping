# Front End Starter Kit

> The front end project template is powered by [Gulp](http://gulpjs.com/),
> [Handlebars](https://github.com/ericf/express-handlebars), [Bootstrap](http://getbootstrap.com/),
> [React](https://facebook.github.io/react/), [Redux](https://github.com/rackt/redux),
> [LESS](http://lesscss.org/) and [BrowserSync](http://www.browsersync.io).

## Prerequisites

1. Node JS v4.1.2

## Installation

```
npm install
```

## Development

```
gulp watch
gulp nodemon
```
By default, Browsersync is turned off, to active:
```
gulp watch --browserSync on
```

Gulp will watch all your .less, .js and static .hbs files for you.
Browsersync has the known issue to lag behind a bit, so a manual refresh is required from time to time.

## Deploy

```
gulp build
```
Will compile all public code and assets to a /build directory. This is what the back end project will consume

## HTML
Use [suit](https://suitcss.github.io/) for scooping styles
[SEO](https://pacificmagazines.atlassian.net/wiki/display/BED/SEO+Best+Practices) is important, follow these guidelines

## CSS / LESS
The standard pre-compiling langauge is [LESS](http://lesscss.org/) together with [Bootstrap](http://getbootstrap.com/)
Look to the bootstrap.less file to add/remove components. By default, only the bare essentials are added. So don't scratch your head if your component styles are not being inherited.

## JS
Everything is written in [es6 standards](https://github.com/lukehoban/es6features) and pre-compiled with [babel](https://babeljs.io/)
Framework of choice is [React](https://facebook.github.io/react/) with [Redux](https://github.com/rackt/redux)



## About the project
This is a small project for learning Redux. This is a main page of a list of products and then you can add and remove them from wishlist. 
## Credits

Dennis Tang, Cynthia Garcia, Rachel Mulvey, William Wu, Zahra Dargahi
