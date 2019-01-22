import React from 'react';
import { Button, Card } from 'antd';
import NoteForm from '../components/NoteForm';
import axios from 'axios';

class NotesDetail extends React.Component {
    state = {
        note: {}
    }
    
    componentDidMount(){
        const noteID = this.props.match.params.noteID;
        axios.get(`http://127.0.0.1:8000/api/note/${noteID}`)
            .then(res => {
                this.setState({
                note: res.data
                });
                console.log(res.data);
            })
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
			<Card title={this.state.note.title}>
				<p>{this.state.note.description}</p>
			</Card>	
            <NoteForm 
            requestType="put"
            noteID={this.props.match.params.noteID}
            btnText="Update"/>
            <form onSubmit={this.handleDelete}>
                <Button type="danger" htmlType="submit"> Delete </Button>
            </form>
            </div>
		)	
    }
}

export default NotesDetail;