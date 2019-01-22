import React, { Component } from 'react';
import CustomLayout from './containers/Layout';
import SharedNotesList from './containers/SharedNotesListView';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <SharedNotesList />
        </CustomLayout>
      </div>
    );
  }
}

export default App;
