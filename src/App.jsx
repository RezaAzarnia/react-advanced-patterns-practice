import AddBook from './components/AddBook'
import ShowBooks from './components/ShowBooks'
import { useSelector } from 'react-redux'
// import Login from './components/Login'
import './App.css'
import CurrencyChange from './components/CurrencyChange'
import ShowCrrency from './components/ShowCrrency'

function App() {
  const user = useSelector(state => state.user.userName)
  return (
    <>
      {/* {!user ?
        <Login />
        :
        <> */}

      <h1>welocme {user}</h1>
      <ShowCrrency />
      <CurrencyChange />
      <AddBook />
      <ShowBooks />

      {/* // } */}
    </>
  )
}

export default App
