import React, { FC } from 'react';
import { IUser } from '../types/types';
import UserItem from './UserItem';

interface UserListProps {
	users: IUser[];
}
//00:14:00 React TypeScript ПОЛНЫЙ КУРС 2021. Props, Events, Router, Hooks

const UserList: FC<UserListProps> = ({ users }) => {
	return (
		<div>
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
};

export default UserList;
