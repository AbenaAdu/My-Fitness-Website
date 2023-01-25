import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Nav from "./Nav"
import Home from "./Home"
import Signup from './Signup';
import Login from './Login';
import WorkoutDisplay from './WorkoutDisplay';
import Food from './Food';
import FoodForm from './FoodForm';

function App() {
  const [user, setUser] = useState(null)
  const [workouts, setWorkouts] = useState([])
  const [comments, setComments] = useState([])
  const [searchWorkouts, setSearchWorkouts] = useState('')

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  useEffect(()=> {
    fetch ("/workouts")
    .then(res => res.json())
    .then(data => setWorkouts(data))
    },[])

  useEffect(()=> {
    fetch ("/comments")
    .then(res => res.json())
    .then(data => setComments(data))
    },[])

    

  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="signup" element= {<Signup />} />
      <Route path="signin" element= {<Login onLogin={handleLogin} setUser={setUser}/>} />
      <Route path="workouts" element={<WorkoutDisplay workouts={workouts} comments={comments}/>}/>
      <Route path="food" element={<Food />}/>
      <Route path="foodform" element={<FoodForm />}/>
      </Routes >
    </div>
  );
}

export default App;
