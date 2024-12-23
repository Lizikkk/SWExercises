import logo from './harryPotter.jpg';
import '../styles/mainStyle.css'

const MainPage = () => {
    return <div className='centered'>
        <div className='box'>
            <h1>Harry Potter</h1>
            <img  src={logo}/>
        </div>
    </div>
}

export default MainPage;