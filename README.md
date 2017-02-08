# React app
## Folders structure
````
|- js/
   |- actions/                        #Redux action creators
   |- reducers/                       #Store reducers
   |- components/                     #React components
      |- myComponent/
          |- myComponet.scss          #Styles
          |- index.js                 #Component
          |- spec.js                  #Unit tests
          ...
   |-containers/                      #High order components
      |- laout/
      |- pages/
          |- dashboard/
              |- index.js
              |- dashboard.scss
      ...
    |- utils/                       #Helper utilities
        |- date
        |- common
        .....
    |- api/
       index.js                      #Api module
    |- constants/                    #Application constants
    |- middleware/                   #Redux middleware
        .....
|- styles/                           #Common styles
    |- _base.scss
    |- _mixins.scss
    |- _reset.scss
    |- _variables.scss
    |- icons.scss
    |- main.scss
|- images/                           #Images
|- fonts/                            #Fonts
|- webpack/                          #Webpack configs for different env
````
### Tech

* [React] - Library for building components
* [Redux] - Predictable state container for JavaScript apps
* [React Router] - A complete routing library for React
* [Webpack] - module bundler
* [Babel] - js transpiler
* [Mocha], [Chai], [Sinon], [Enzyme] - unit teststing
* [SASS] - CSS with superpowers
* [React-toolbox] - Set of react components

### Installation

You need NodeJS installed.

```sh
$ npm install
```

###  Build frontend
Build files will be located in ./dist directory
```sh
$ npm run build
```
###  Run linter
Runs eslint with eleks corporate JS rules (./eslintrc)
```sh
$ npm run lint
```
###  Run tests
```sh
$ npm test
```

### Dev server
To launch webpack dev server
```sh
$ npm run dev
```

### Server side requirements
Fleetmanager application uses HTML5 History API, so it requires some server-side support.
All GET requests should fallback to root route '/' which serves index.html, except static resources (css|jpg|gif|png|svg|ttf),and GET AJAX requests.

### Todos


License
----


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [React]: <https://facebook.github.io/react/>
   [Redux]: <http://redux.js.org/>
   [React Router]: <https://github.com/reactjs/react-router>
   [Webpack]: <https://webpack.github.io/>
   [Babel]: <https://babeljs.io/>
   [Mocha]: <https://mochajs.org/>
   [Chai]: <http://chaijs.com/>
   [Sinon]: <http://sinonjs.org/>
   [Enzyme]: <https://github.com/airbnb/enzyme>
   [SASS]: <http://sass-lang.com/>
   [React-toolbox]: <http://react-toolbox.com/>


