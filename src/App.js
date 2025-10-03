import Main from './pages/Main';
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';

function App() {
  return (
    <div className='w-full flex flex-row'>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
