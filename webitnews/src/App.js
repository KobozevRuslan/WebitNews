import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/main-page/MainPage';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
