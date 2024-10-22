
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

// import SearchQueary from './components/SearchQueary';



const appRouter = createBrowserRouter([{
  path:"/",
  element :  <Body/>,
  children : [
    {
      path: "/",
      element:<MainContainer/>
    },
    {
      path: "/watch",
      element:<WatchPage/>
    },
    // {
    //   path:"/search",
    //   element : <SearchQueary/>
    // },
    

  ]
}])


function App() {
  return (
    <Provider store={store}>
        <Head/>
        <div >
          <RouterProvider router={appRouter}/>
        </div>

    </Provider>
  );
}

export default App;
