# Employee Portal Architectural Example

An example project showcasing some the basic architecture of the Investor Services Employee Portal.

> *This code-base has been simplified _a lot_ to protect the intellectual property of our client and make it more easily understood.*

## Frameworks

Below you'll find a list of frameworks used in this example project.

### React

React is [a JavaScript library for building user interfaces](https://reactjs.org/). It represents the core of our architecture and is responsible for rendering everything the user sees when interacting the application.

### Redux

Redux is [a predictable state container for JavaScript applications](https://redux.js.org/). This means it keeps track of everything that is happening in the application, including what information is available. Any changes to the state of the application are handled by reducers. Actions taken by the user can trigger a reducer to modify the state of the application, which in turn causes the user interface of the application to be re-calculated.

### Redux Saga

`redux-saga` is [a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage](https://github.com/redux-saga/redux-saga), more efficient to execute, simple to test, and better at handling failures. This means sagas are where all of the functional code lives (anything that _does_ something).

### Normalizr

Normalizr is [a small but powerful utility for taking JSON with a schema definition and returning dictionaries of nested entities keyed by their IDs](https://github.com/paularmstrong/normalizr). This means deeply nested data provided by 3rd-party services such as APIs can be much more easily stored, restructured, presented to users, updated, and utilised for further service requests.

### Reselect

Reselect is [a simple "selector" library for Redux](https://github.com/reactjs/reselect). Selectors can compute derived data, allowing Redux to store the minimal possible state. This essentially means the application state remains as simple as possible whilst the information required to construct the view of the application is computed when it is needed. Selectors also memoize data, this means that they will only recompute when input values change.

## Tooling

Below is a list of tools used in this example application. These generally facilitate development and are used to improve maintainability, scalability or code quality.

### Webpack

Webpack is [a static module bundler for modern JavaScript applications](https://webpack.js.org/). It builds the application code automatically during development and creates a high performance bundle when it comes time to deploy to production. It allows developers to specify specific transformations, treatments and rules that should be applied to the code before it is exposed to the browser.

### Babel

Babel is [a compiler for writing next generation JavaScript](https://babeljs.io/). It allows developers to write code compliant with the very latest specifications but still have it work as expected on older browsers and devices.

### ESLint

ESLint is [a pluggable linting utility for JavaScript and JSX](https://eslint.org/). It is used to ensure the code written for the project is consistent and follows generally accepted best practices within the JavaScript community.

## Application principals

So how does this all work together?

This application architecture is built entirely on a concept known as [_unidirectional data flow_](https://redux.js.org/docs/basics/DataFlow.html). This means that all data in the application flows in a single direction. In React, it flows down the tree from parent to child.

The data in our application that is core to the functionality of the application as a whole is known as the application state. This usually includes a list of the models and data being manipulated by the interface. In Redux this data is stored in a [_single immutable state tree_](https://redux.js.org/docs/introduction/ThreePrinciples.html) and can only be modified by reducers, which are are triggered by the user via actions.

Data must first be propagated to the view then the user must be able to interact with the view to cause data changes to propagate to the service layer (to make a request or modify a value in state, for example). Because data only flows in one direction, this means the order of events is cyclical.

First, a user interacts with the UI. This causes an action to be dispatched which is picked up by Redux and distributed to each of the sagas and reducers in turn.

If the application needs to interact with a utility or service as a result of the user interaction, this action would be be received by a saga. This saga might calculate some data, make a request to an API, normalize the JSON response using normalizr, then dispatch another action containing the normalized data record.

If the user interaction or service response needs to cause a change of application state, the subsequent action would be picked up by a reducer. Reducers change the application state by calculating a change to the current state using the payload of the action and returning a new state including that change. Reducers can respond to actions directly when the only result of a user interaction is a change of application state.

When the state tree changes, these changes are propagated back to the view layer. The state is received by the current component and processed using _selectors_. These selectors compute and memoize derived data, this makes them extremely performant and highly expressive.

Finally, the result of these computations flows down the component tree from parent to child, eventually arriving back at the piece of UI with which the user originally interacted. This may cause a change to the information displayed in the application or cause the application to navigate to a new view entirely.

## Running the application

You will need [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) installed to run the application.

### Installing the application

Installing the application should be as easy as:

```
npm install
```

### Starting the application

Starting the application should be just as easy:

```
npm start
```

### Testing the application

**There are no unit tests included with this example** as they only really appeal to the nerdy types anyway, but if there were you would just run:

```
npm test
```
