
import ChildProfil from './Profil/ChildProfil.js'
import Img from './assets/img.jpg'
import './App.css';

function App() {
  const user={
     fullName:"Asma Chihi",
     bio:"Etudiante chez Go My Code",
     profession:"Développeuse Web Junior"
  }
  const HandleName=(fullName)=>{alert(`Bienvenue ${user.fullName}`)}
  return (
    <div className="App">
      <ChildProfil user={user} HandleName={HandleName}>
        <h1>Image Children Props</h1>
        <img src={Img} alt="img"/>
      </ChildProfil>
    </div>
  );
}

export default App;
