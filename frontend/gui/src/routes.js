import React from 'react';
import { Route } from 'react-router-dom';
import ExerciseList from './containers/ExerciseiListView';
import ExerciseDetail from './containers/ExerciseDetailView';
import Login from './containers/Login';
import Signup from "./containers/Signup";
import PostExercise from "./containers/postExercise"
const BaseRouter = () => (
    <div>
        <Route exact path = '/exercises/' component={ExerciseList} />
        <Route exact path = '/exercises/:exerciseID' component={ExerciseDetail} />
        <Route exact path = '/addExercise' component={PostExercise} />
        <Route exact path="/login/" component={Login} />{" "}
        <Route exact path="/signup/" component={Signup} />{" "}
        
    </div>
);
export default BaseRouter   