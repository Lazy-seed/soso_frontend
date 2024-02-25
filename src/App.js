
import './assets/scss/bottstrap_extended.scss'
import './assets/scss/custom.scss'
import './utilities/navbar.scss'
import './assets/js/boot_script.js'
import HomePages from './pages';
import { Container } from 'reactstrap';

function App() {
  return (
    <div  className=' custom-container'>
    <HomePages/>
    </div>
  );
}

export default App;
