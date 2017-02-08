# React app
## Folders structure
````
|- js/
   |- actions/                        #Redux action creators
   |- reducers/                       #Store reducers
   |- components/                     #React components
      |- myComponent/
          |- myComponet.scss          #Styles
          |- myComponent.js           #Component
          |- spec.js                  #Unit tests
          ...
   |- routes/                      #High order components
      |- login/
      |- users/
          |- containers
          |- components/
              |- users.js
              |- users.scss
      ...
    |- services/                       #Helper utilities
        |- api
        |- date
        .....
    |- constants/                    #Application constants
    |- middleware/                   #Redux middleware
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
* [Mocha], [Chai], [Sinon], [Enzyme] - unit teststing
* [SASS] - CSS with superpowers
* [React-toolbox] - Set of react components

### Installation

You need NodeJS installed.

```sh
$ npm install
```

###  Build frontend
Set environment variable for REST API and run npm
```sh
$ npm run build API_URL=https://my.api.com/ 
```
Build files will be located in ./dist directory

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
Application uses HTML5 History API, so it requires some server-side support.
All GET requests should fallback to root route '/' which serves index.html, except static resources (css|jpg|gif|png|svg|ttf),and GET AJAX requests.

### Todos


License
----


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [React]: <https://facebook.github.io/react/>
   [Redux]: <http://redux.js.org/>
   [React Router]: <https://github.com/reactjs/react-router>
   [Webpack]: <https://webpack.github.io/>
   [Mocha]: <https://mochajs.org/>
   [Chai]: <http://chaijs.com/>
   [Sinon]: <http://sinonjs.org/>
   [Enzyme]: <https://github.com/airbnb/enzyme>
   [SASS]: <http://sass-lang.com/>
   [React-toolbox]: <http://react-toolbox.com/>


