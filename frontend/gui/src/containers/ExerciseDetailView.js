import React from 'react';
import axios from 'axios';
import { Button, Card } from 'antd';
import CustomForm from '../components/Form'

class ExerciseDetail extends React.Component{
state = {
    exercise: {}
}
componentDidMount(){
    const exerciseID = this.props.match.params.exerciseID;
    
    axios.get(`http://127.0.0.1:8000/api/${exerciseID}`)
    .then(res =>{
        this.setState({
            exercise: res.data
            
        });
        console.log(exerciseID);
    });
}
handleDelete = (event) => {
    const exerciseID = this.props.match.params.exerciseID;
    
    axios.delete(`http://127.0.0.1:8000/api/${exerciseID}`)
    this.props.history.push('/exercises');
    window.location.reload();

}
    render(){
        return(
            <div>
            <Card title={this.state.exercise.title}>
                <p>{this.state.exercise.descriptions}</p>
            </Card>
            <CustomForm requestType = "put" exerciseID={this.props.match.params.exerciseID} btn="Update"/>
            
            <form onSubmit={this.handleDelete}>
                <Button type = "danger" htmlType="submit">Delete</Button>
            </form>
            </div>
        );
    }
}
export default ExerciseDetail