import React from 'react';
import Exercises from '../components/Exercises';
import axios from 'axios';
class ExerciseList extends React.Component{
state = {
    exercises: []
}
componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
    .then(res =>{
        this.setState({
            exercises: res.data.reverse()
        });
    });
}

    render(){
        return(
            <div>
            <Exercises data ={this.state.exercises}/>
            </div>
            );
    }
}
export default ExerciseList