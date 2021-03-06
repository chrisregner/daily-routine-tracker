Daily Routine Tracker
========================================

Working app [here](https://chrisregner.github.io/daily-routines-tracker).

It is a simple app that...

1. lets you manage (add, edit, delete, sort) a list of routines (so, another to do app?);
2. lets you specify how much time you want to work on each routine;
3. lets you track the time for that routine; and...
4. notifies you when you've tracked the specified amount of time for a routine.

You can also import/export data (routines), and the data should persist&ast; as long as you don’t clear the [local storage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage).

&ast;*Data persistence is actually buggy depending on how a browser handles the `onbeforeunload` event. I wanted to try implementing it myself rather than using a library.*

## Main tools/libraries used:

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [React-Router](https://reacttraining.com/react-router/)
- [Webpack](https://webpack.js.org/)
- [Ant Design](https://ant.design/) (UI library)
- [Tachyons](http://tachyons.io/) (functional CSS framework. Try it, it’s fun!)
- [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/api/bdd/), [Enzyme](http://airbnb.io/enzyme/) and [Testdouble](https://github.com/testdouble/testdouble.js/) (for unit-tests)


## Attributions

Thanks for [this](https://freesound.org/people/hykenfreak/sounds/202029/) quality notification sound I found on [freesound.org](https://freesound.org/), created by [hykenfreak](https://freesound.org/people/hykenfreak/)
