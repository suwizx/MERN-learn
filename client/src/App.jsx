import Header from './components/Header';
import { Switch , Route } from 'react-router-dom';
import PageCreate from './page/PageCreate';
import PageHome from './page/PageHome';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <PageHome />
        </Route>
        <Route path="/create">
          <PageCreate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
