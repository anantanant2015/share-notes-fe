import React from 'react';
import Notes from '../components/Notes';
import NoteForm from '../components/NoteForm';
import axios from 'axios';

class NotesList extends React.Component {
    state = {
        notes: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/note/')
            .then(res => {
                this.setState({
                notes: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return(
            <div>
                <Notes data={this.state.notes} />
                <br />
                <h2> Create Note </h2>
                <NoteForm 
                requestType="post"
                sharednotesID={null}
                btnText="Create"/>
            </div>
        )	
    }
}

export default NotesList;