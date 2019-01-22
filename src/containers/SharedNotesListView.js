import React from 'react';
import SharedNotes from '../components/SharedNotes';
import axios from 'axios';

class SharedNotesList extends React.Component {
    state = {
        sharednotes: []
    }
    
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                sharednotes: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <SharedNotes data={this.state.sharednotes} />
        )	
    }
}

export default SharedNotesList;