import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/shared/Footer";

function App() {
  return (
    <>  
      <Navbar />
      <main className="w-screen overflow-x-hidden">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App;