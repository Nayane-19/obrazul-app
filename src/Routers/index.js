import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'


function Routers() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home}/>
     </Switch>
     </BrowserRouter>
    );
  }
  
  export default Routers;
  