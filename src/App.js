import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meal/Meals";
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;
