import React from 'react';
import { Route } from 'react-router-dom';
import NotesList from './containers/NotesListView';
import NotesDetail from './containers/NotesDetailView';
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () => (
	<div>
		<Route exact path='/' component={NotesList} />
        <Route exact path='/notes/:noteID' component={NotesDetail} />
		<Route exact path="/login/" component={Login} />{" "}
		<Route exact path="/signup/" component={Signup} />{" "}
	</div>
)

export default BaseRouter;