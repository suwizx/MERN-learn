import Header from './components/Header';
import { Routes , Route } from 'react-router-dom';
import PageCreate from './page/PageCreate';
import PageHome from './page/PageHome';
import PageSingle from './page/PageSingle';
import EditPost from './page/EditPost';
import LoginPage from './page/LoginPage';


function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />}></Route>
        <Route path="/create" element={<PageCreate />}></Route>
        <Route path="/post/:slug" element={ <PageSingle />}></Route>
        <Route path="/edit/:slug" element={ <EditPost />}></Route>
        <Route path="/login/" element={ <LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
