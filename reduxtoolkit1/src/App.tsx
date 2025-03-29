import { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { decrement, increment } from './store/users/user.slice'
import { fetchUsers } from './store/users/actions'

function App() {

  const {count, users, isLoading, error} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  if(isLoading) return <h1>Loading.....</h1>
  return (
    <>
      {users.map(({id, email}) => 
      <div key={id}>
        <h4>{email}</h4>

      </div>)}
      {error && <h1>{error}</h1>}
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>

    </>
  )
}

export default App
