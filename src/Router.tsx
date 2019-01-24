import * as React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import review from './pages/review/Review'
import reviewEdit from './pages/review/ReviewEdit';
import heroList from './pages/hero/Hero';
import humanList from './pages/human/Human';

type Prop = {}

type State = Readonly<{}>

class Router extends React.Component<Prop, State> {


    public render() {
        return (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/review" component={review} />
            <Route path='/review/edit' component={reviewEdit} />
            <Route path='/hero' component={heroList}/>
            <Route path='/human' component={humanList}/>
          </Switch>
        );
      }
    }
    
    export default Router;
    