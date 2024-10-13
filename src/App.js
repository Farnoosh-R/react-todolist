
import './App.css';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm';
import FilterFooter from './Components/FilterFooter/FilterFooter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import TaskList from './Components/TaskList/TaskList';


function App() {
  return (
    <div className="App">
    <Header />
    <div className='content-holder'>
    <AddTaskForm />
    <TaskList />
    <FilterFooter />
    </div>
    <Footer />
    </div>
  );
}

export default App;
