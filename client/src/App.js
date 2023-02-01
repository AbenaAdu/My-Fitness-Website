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
import FavWorkout from './FavWorkout';
import WorkoutForm from './WorkoutForm';

function App() {
  const [user, setUser] = useState(null)
  const [workouts, setWorkouts] = useState([])
  const [comments, setComments] = useState([])
  const [searchWorkouts, setSearchWorkouts] = useState('')
  const [searchFoods, setSearchFoods] = useState('')
  const [foods, setFoods] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  console.log(user)

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

  useEffect(()=> {
    fetch ("/foods")
    .then(res => res.json())
    .then(data => setFoods(data))
    },[])
 

    function handleLogin(user) {
      setUser(user);
    }

    const filteredWorkouts = workouts.filter(filterWorkouts => {
      return filterWorkouts.name.toLowerCase().includes(searchWorkouts.toLowerCase())
    })

    function handleWorkoutSearch(e){
      setSearchWorkouts(e.target.value)
    }

    function updateFavWorkout(updatedWorkout) {
      const updatedWorkouts = workouts.map(workout => {
        if (workout.id === updatedWorkout.id) {
          return updatedWorkout
        } else return workout
      })
      setWorkouts(updatedWorkouts) 
    }
    const favWorkouts = workouts.filter(workout => {
      if (workout.fav === true) {
        return workout
      } 
    })
    
    function deleteWorkout(id) {
      const deletedWorkouts = workouts.filter(workout => {
        return workout.id !== id
      })
      setWorkouts(deletedWorkouts)
    }


  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element= {<Home setUser={setUser} />} />
      <Route path="signup" element= {<Signup setUser={setUser}/>} />
      <Route path="signin" element= {<Login onLogin={handleLogin} setUser={setUser}/>} />
      <Route path="workouts" element={<WorkoutDisplay filteredWorkouts={filteredWorkouts} comments={comments} searchWorkouts={searchWorkouts} handleWorkoutSearch={handleWorkoutSearch} updateFavWorkout={updateFavWorkout} deleteWorkout={deleteWorkout}/>}/>
      <Route path="food" element={<Food foods={foods} />}/>
      <Route path="foodform" element={<FoodForm setFoods={setFoods} foods={foods}/>}/>
      <Route path="favworkout" element={<FavWorkout favWorkouts={favWorkouts} updateFavWorkout={updateFavWorkout} />}/>
      <Route path="workoutform" element={<WorkoutForm setWorkouts={setWorkouts} workouts={workouts}/>}/>
      </Routes >
    </div>
  );
}

export default App;
