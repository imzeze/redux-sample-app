# Redux

## Concept

- action
  - describes something that happened in the application
  - (payload) ⇒ return obj
- reducer
  - event listener which handles events based on the received action (event) type.
  - (state, action) ⇒ return new state
- store
  - state lives in an object called the store
  - method
    - getState : () ⇒ return current state
    - dispatch : (action) ⇒ update and save new state
- selector
  - extract specific pieces of information from a store state value

<br/>  
<br/>

## Structure

- createSlice
  - redux toolkit 함수
  - A "slice" is a collection of Redux reducer logic and actions for a single feature
  - call `immer` library
    ```jsx
    function reducerWithImmer(state, action) {
      state.first.second[action.someId].fourth = action.someValue;
    }
    ```
    실제로는 state update가 immutable하게 일어난다.
- thunk
  ```jsx
  const getUser = () => {
    // thunk
    return () => {
      return axios.get('/user');
    };
  };
  ```
  - redux-thunk
    - 객체 대신 함수를 생성하는 action 생성 함수를 작성할 수 있게 한다.
    - ex) action이 특정 상황에 일어나게 해야하는 경우
    ```jsx

      function createThunkMiddleware(extraArgument) {
        var middleware = function middleware(_ref) {
          var dispatch = _ref.dispatch,
              getState = _ref.getState;
          return function (next) {
            return function (action) {
    					// The thunk middleware looks for any functions that were passed to `store.dispatch`.
              // If this "action" is really a function, call it and return the result.
              if (typeof action === 'function') {
                // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
    						return action(dispatch, getState, extraArgument);
              }
    					// Otherwise, pass the action down the middleware chain as usual
              return next(action);
            };
          };
        };
    ```
    \*\* redux-toolkit 내 redux-thunk 내장되어 있음

<br/>  
<br/>

---

#### reference

[redux.js.org](https://redux.js.org/introduction/getting-started)
