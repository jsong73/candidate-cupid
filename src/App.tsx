import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { CandidateProvider } from "./context/CandidateContext"

function App() {
  return (
    <CandidateProvider>
      <Nav />
      <main>
        <Outlet />
      </main>
      </CandidateProvider>
  );
}

export default App;
