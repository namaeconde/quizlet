import './App.css'
import Home from "./components/Home.tsx";
import Quiz from "./components/Quiz.tsx";

function App() {
  // Get current URL path
  const currentPath = window.location.pathname;
  return (
    <>
      {currentPath === '/' ? <Home /> : <Quiz id={currentPath.replace("/", "")} />}
    </>
  )
}

export default App
