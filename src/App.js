import appStyles from './App.module.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';


function App() {
  return (
    <div className={appStyles.App}>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
