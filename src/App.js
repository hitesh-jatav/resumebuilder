import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Templates from './components/templates/Templates';
import Resume1 from './components/resumes/resume-1/Resume1';
import Resume2 from './components/resumes/resume-2/Resume2';
import Resume3 from './components/resumes/resume-3/Resume3';
import About from './components/about/About';
import Connect from './components/connect/Connect';



function App() {
  return (
    <Router>

    <div className="App">
    <Header/>

    <Switch >
      <Route exact path='/'>
          <Body/>

      </Route>

      <Route exact path='/connect'>
<Connect/>

      </Route>

      <Route exact path='/templates'>
      <Templates/>
      </Route>

      <Route exact path='/about'>
      <About/>   
  
     </Route>

      <Route exact path='/templates/edit-1'>
      <Resume1/>
      </Route>

      <Route exact path='/templates/edit-2'>
      <Resume2/>
      </Route>

      <Route exact path='/templates/edit-3'>
      <Resume3/>
      </Route>


    </Switch>

  
    <Footer/>
    </div>  
    </Router>
  );
}

export default App;
