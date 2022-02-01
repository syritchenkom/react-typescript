import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
// import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {
	// 00:38:00  React TypeScript ПОЛНЫЙ КУРС 2021. Props, Events, Router, Hooks, Requests.

	// const users: IUser[] = [
	// 	{
	// 		id: 1,
	// 		name: 'Alex Shall',
	// 		email: 'ash@mail.com',
	// 		address: { city: 'Warszaw', street: 'Grono', zipcode: '1234' }
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Adom Shill',
	// 		email: 'ash@mail.com',
	// 		address: { city: 'Wroclaw', street: 'Granda', zipcode: '124' }
	// 	}
	// ];

	return (
		<BrowserRouter>
			<div>
				<div>
					<NavLink to={'/users'}>Users</NavLink>
					<NavLink to="/todos">Todo list</NavLink>
				</div>
				<Route path={'/users'} exact>
					<UserPage />
				</Route>
				<Route path={'/todos'} exact>
					<TodosPage />
				</Route>
				<Route path={'/users/:id'}>
					<UserItemPage />
				</Route>
				<Route path={'/todos/:id'}>
					<TodoItemPage />
				</Route>
			</div>
		</BrowserRouter>
	);
};

export default App;
