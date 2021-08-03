import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import App from './components/App/App';
import Signup from './components/Signup/Signup';
import './index.scss';

const Routes = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <App />
        </Route>
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
