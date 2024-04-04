
import { Container } from 'react-bootstrap';
import './App.css';
import ListData from './components/ListData';
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';


function App() {
  const [listData, setListData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setListData(data))
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Container >
        <ListData data={listData} />
      </Container>


    </div >
  );
}

export default App;
