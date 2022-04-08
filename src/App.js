import { fetchWeather } from "./api/fetchWeather";
import { useState } from "react";
import "./App.css";
function App() {
  const [query, setQuery] = useState("");
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      console.log(data);
    }
  };

  return (
    <div className="main-container">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={(e) => search(e)}
      />
    </div>
  );
}

export default App;
