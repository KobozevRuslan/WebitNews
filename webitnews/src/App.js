import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/main-page/MainPage';
import ItemNews from './components/main-page/ItemNews/ItemNews';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/news" component={ItemNews}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
