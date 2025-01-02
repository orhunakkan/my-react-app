import './App.css';
import Calendar from './Calendar';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Calendar />
      </div>
    </ThemeProvider>
  );
}

export default App;