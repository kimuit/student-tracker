import  Container  from './Container';
import './App.css';
import StudentTable  from './StudentTable';
import NavBar from './NavBar';

function App() {
  return (
    <Container>
      <div>
      <NavBar/>
      </div>
      <StudentTable/>
    </Container>
  );
}

export default App;
