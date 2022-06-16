
import './App.css';
import Nav from './components/Nav/Nav'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <>

      <Nav/>
      <ItemListContainer />
      <ItemDetailContainer/>
    </>
  );
}

export default App;
