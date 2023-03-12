import appStyles from './App.module.css';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <div className={appStyles.App}>
      <NavBar />
    </div>
  );
}

export default App;
