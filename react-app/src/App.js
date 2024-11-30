import './App.css';
import self from './images/self.png';

function App() {
  return (
    <div>
      <div className='container'>
      <img src={self} alt='profile image'></img>
      <div className='text-container'>
      <p>Name: Lizi</p>
      <p>Age: 19</p>
      <p>Location: Tbilisi</p>
      <p>Email: myEmail@gmail.com</p>
      </div>
      </div>
    </div>
  );
}

export default App;
