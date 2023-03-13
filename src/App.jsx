import './App.css';
import Head from './components/Head';
import MainBody from './components/MainBody';

function App() {
  
  return (
    <div className="w-[100vw] h-[100vh] text-gray-700 bg-gradient-to-r from-[#ddd6f3] to-[#faaca857] py-[10vh] px-[10vw]">
      <Head/>
      <MainBody/>
    </div>
    
  );
}

export default App;
