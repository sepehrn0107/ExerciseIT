import React from 'react';
import CustomForm from '../components/Form';

class postExercise extends React.Component{
    state = {
        exercise: {}
    }
    
    handleDelete = (event) => {
        const exerciseID = this.props.match.params.exerciseID;
        this.props.history.push('/exercises');
        window.location.reload();
    
    }
    render(){
        return(
            <div>
            <h1>Add an exercise</h1>
            <form onSubmit={this.handleDelete}>
            <CustomForm requestType = "post" exerciseID={null} btn="Post"/>
            
            </form>
            </div>
            );
    }
}

export default postExercise
        

        