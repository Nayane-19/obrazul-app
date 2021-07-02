import {Provider} from 'react-redux'
import Store from './store'
import Routes from './Routers'




function App() {
  return (
    
   <Provider store={Store}>
    <Routes />
   </Provider>
  
  );
}

export default App;
