import './App.css';
import { Main } from './screens/';
import { Container } from './components';
import {RouterView } from './Router';

function App() {
  return (
    <div>
      <RouterView>
         < Main />
         </RouterView>
     
    </div>
  );
}

export default App;

/**<Container >
        <RouterView />
      </Container>**/