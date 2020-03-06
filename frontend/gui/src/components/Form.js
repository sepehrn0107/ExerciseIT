import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios'
import { connect } from "react-redux";
import "../styles/styles.css";

class CustomForm extends React.Component {
    handleFormSubmit = (event, requestType, exerciseID) => {
        event.preventDefault();
        const title = event.target.elements.title.value
        const description = event.target.elements.description.value
        window.location.reload();
        
        switch(requestType){
            case 'post':
                return axios.post("http://127.0.0.1:8000/api/",{
                    title: title,
                    descriptions: description
                }).then(response => console.log(response))
                .catch(err => console.error(err))
            case 'put': 
                return axios.put(`http://127.0.0.1:8000/api/${exerciseID}/`,{
                        title: title,
                        descriptions: description
                    }).then(response => console.log(response))
                    .catch(error => console.error(error))
        }
    }

    render() {
        return (
        <div className="DefaultForm">
            <Form onSubmit = {(event) => this.handleFormSubmit(event, 
                this.props.requestType,
                this.props.exerciseID)}>
            <Form.Item label="Exercise" >
                <Input name ="title" placeholder="" />
            </Form.Item>
            <Form.Item label="Description" >
                <Input name ="description" placeholder="Sets/Reps" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">{this.props.btn}</Button>
            </Form.Item>
            </Form>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      token: state.token
    };
  };
  
  export default connect(mapStateToProps)(CustomForm);