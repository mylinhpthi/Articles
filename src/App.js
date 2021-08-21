import './App.css';
import ArticleList from './components/ArticleList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ArticleDetail from './components/ArticleDetail';
import ArticleForm from './components/ArticleForm';

function App() {
  return (
    <Router>
    <div>
      <nav className="container header">
        <Link to ="/" className="article__title">Colors Autumn</Link>
        <ul className="navigation">
          <li>
            <Link className="navigation__content home" to="/">
              <i class="fa fa-home" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link className="navigation__content addUser" to="/create">
              <i class="fa fa-user-plus" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/detail/:id">
          <ArticleDetail />
        </Route>
        <Route path="/update/:id">
          <ArticleForm />
        </Route>
        <Route path="/delete/:id">
          <ArticleList />
        </Route>
        <Route path="/create">
          <ArticleForm />
        </Route>
        
        <Route path="/">
          <ArticleList />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
