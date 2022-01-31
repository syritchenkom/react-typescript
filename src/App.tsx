import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
	const users: IUser[] = [
		{
			id: 1,
			name: 'Alex Shall',
			email: 'ash@mail.com',
			address: { city: 'Warszaw', street: 'Grono', zipcode: '1234' }
		},
		{
			id: 2,
			name: 'Adom Shill',
			email: 'ash@mail.com',
			address: { city: 'Wroclaw', street: 'Granda', zipcode: '124' }
		}
	];
	return (
		<div>
			<Card
				// onClick={(num) => console.log('click', num)}
				variant={CardVariant.outlined}
				width="200px"
				height="200px">
				<button>Button</button>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
					odio numquam inventore quod voluptate reiciendis delectus pariatur
					vitae repudiandae modi nobis mollitia perspiciatis doloremque
					voluptas, facere corrupti nihil at? Tempore?
				</div>
			</Card>
			<UserList users={users} />
		</div>
	);
};

export default App;
