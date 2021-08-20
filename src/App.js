import { SearchProvider } from "./context";
import { GlobalStyles } from "./GlobalStyle";
import Pages from "./pages";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <SearchProvider>
        <Pages />
      </SearchProvider>
    </div>
  );
}

export default App;
