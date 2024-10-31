import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from "./Redux/store.js"
import router from './router/route.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
const persistor = persistStore(store)
createRoot(document.getElementById('root')).render(
  <>

    <Provider store={store}>
      <ToastContainer />
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </>
)
