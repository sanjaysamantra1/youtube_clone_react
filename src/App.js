import Header from '../src/components/Header'
import './App.css';
import Body from './components/Body'
import WatchPage from './components/WatchPage'
import MainContainer from './components/MainContainer'
import { Provider } from  'react-redux'
import store from './utils/store'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const appRoter = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[{
    path:'/',
    element:<MainContainer/>
  },{
    path:'/watch',
    element:<WatchPage/>
  }]
}])

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     <Header />
     <RouterProvider router={appRoter} />
     <Body />
   
    </div>
    </Provider> 
  );
}

export default App;
