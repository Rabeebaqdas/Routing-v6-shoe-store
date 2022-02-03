import React from 'react';
import { BrowserRouter as Router,Switch,Route, } from "react-router-dom";
import home from './components/home';
import about from './components/about';
import contact from './components/contact';
import product from './components/product';
import ProductItems from './components/ProductItems';
import Navbar from './components/Navbar'
function Routing(){
    return(
        <div>
       <Router>
           <Navbar />
           <Switch>
           <Route exact path="/" component={home} />
           <Route path="/about" component={about} />
           <Route path="/contact" component={contact} />
           <Route exact path="/product" component={product} />
           <Route path="/product/:id" component={ProductItems} />
           <Route path="*" component={()=><h1>Error 404 Page Not Found</h1>} />
           </Switch>
       </Router>
       </div>

    );
}

export default Routing;