
import * as React from 'react';
import RoutePage from './Router'
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  public componentDidMount() {
  }

  public render() {
    return (
      <React.Fragment>
        <Header/>
        <RoutePage/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
