import Header from './components/Header/Header';      // aise dalna hai file ka link, make sure krna ki folder achi tarah se hirearchy mai rahe
import Clubs from './components/Clubs/Clubs';
function App() {
  return (
    <div className="App">
      <Header/>          {/* aise add krna hai components */}
      <Clubs/>
    </div>
  );
}

export default App;
