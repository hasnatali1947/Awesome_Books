import AddBook from './components/AddBook'
import Contact from './components/contact'
import ListBooks from './components/ListBooks';
import { MyProvider } from './context/MyContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app/style/App.css"
import DataTime from './components/DataTime';
import Navigation from './components/Navigation';

const App = () => {

  return (
    <div className='main'>
      <MyProvider>
        <Router>
          <Navigation />
          <DataTime />
          <Routes>
            <Route path='/' exact Component={ListBooks} />
            <Route path='/AddBook' exact Component={AddBook} />
            <Route path='/Contact' exact Component={Contact} />
          </Routes>
        </Router>
      </MyProvider>
    </div>

  )
}

export default App
