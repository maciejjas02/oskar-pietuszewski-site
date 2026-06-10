import PlayerProfile from './components/PlayerProfile';
import Schedule from './components/Schedule'; 

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] font-sans selection:bg-yellow-500 selection:text-black overflow-hidden pb-16">
      <PlayerProfile />
      <Schedule /> {}
    </div>
  );
}

export default App;