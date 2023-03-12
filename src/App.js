import appStyles from './App.module.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className={appStyles.App}>
      <Navbar />
    </div>
  );
}

export default App;
