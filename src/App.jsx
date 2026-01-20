import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>  
      <Navbar />
      <main className="w-screen">
        <Home />
      </main>
    </>
  )
}

export default App;