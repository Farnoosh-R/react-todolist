
import './App.css';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm';
import FilterFooter from './Components/FilterFooter/FilterFooter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import TaskList from './Components/TaskList/TaskList';
import TodoApp from './Components/TodoApp/TodoApp';


function App() {
  return (
    <div className="App">
    <Header />
    <div className='content-holder'>
    <TodoApp />
    </div>
    <Footer />
    </div>
  );
}

export default App;
