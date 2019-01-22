import React from 'react';
import { Route } from 'react-router-dom';
import NotesList from './containers/NotesListView';
import NotesDetail from './containers/NotesDetailView';

const BaseRouter = () => (
	<div>
		<Route exact path='/' component={NotesList} />
        <Route exact path='/:noteID' component={NotesDetail} />
	</div>
)

export default BaseRouter;