import './styles/globals.css';

import { Habit } from "./components/Habits"


function App() {
  return (
    <div>
    <Habit completed={3} />
    <Habit completed={5} />
    <Habit completed={7} />
    <Habit completed={9} />
    <Habit completed={11} />
    <Habit completed={13} />
    <Habit completed={15} />
    <Habit completed={17} />
    </div>
  )
}

export default App
