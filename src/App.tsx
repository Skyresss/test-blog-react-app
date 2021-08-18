import { Provider } from 'react-redux';
import { store } from './state';
import PostList from './components/PostList';
import { Header } from './components/Header';
import AddButton from './components/AddButton';
import PostPage from './components/PostPage';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <AddButton />

        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route exact path="/create-post">
            <NewPost />
          </Route>
          <Route exact path="/post/:id">
            <PostPage />
          </Route>
          <Route exact path="/edit-post/:id">
            <EditPost />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
