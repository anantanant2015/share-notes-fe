import React from 'react';
import axios from 'axios';

import {
    Form, Input, Button,
  } from 'antd';
  
  class NoteForm extends React.Component {
  
    handleFormSubmit = (event, requestType, noteID) => {
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
    
        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/note/', {
                title: title,
                description: description
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/note/${noteID}/`, {
                title: title,
                description: description
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));
        }   
    }

    handleDelete = (event) => {
      const noteID = this.props.match.params.noteID;
      axios.delete(`http://127.0.0.1:8000/api/note/${noteID}`);
      this.props.history.push('/');
      this.forceUpdate();
  }

    render() {
      return (
        <div>
          <Form onSubmit={(event) => this.handleFormSubmit(
            event,
            this.props.requestType,
            this.props.noteID
            )}>
            <Form.Item
              label="Title">
              <Input name="title" placeholder="Specify title." />
            </Form.Item>
            <Form.Item
              label="Description">
              <Input name="description" placeholder="Add description here." />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
  }
  
  export default NoteForm;