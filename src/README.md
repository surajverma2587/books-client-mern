# Interpretation of what we did

We create a context.

So that we can share state between components.

We then create a Provider from that context and wrap our components.

We use, 'useReducer' to enable the use of 'actions' to manipulate our state.

> The alternative would be 'useState' so that we can 'setState'.
>
> > Instead of passing 'dispatch' we would be passing 'setState'.

Our Provider value is then set to the state (globally available state) of this Reducer.

Books wants to use the 'books' state. This is in the Context.

> To get this we use 'useContext' and set it to 'AppContext'

useEffect / componentDidMount then runs that 'dispatch' function to 'GET_ALL_BOOKS'.

> 'GET_ALL_BOOKS' is purely an alias, it could be 'GARY_LIVES'.
> This action HAS to have a corresponding condition in the reducer.
