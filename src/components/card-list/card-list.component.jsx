import React from 'react';
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.users.map(user => (<h1 key={user.id}>{user.name}</h1>))}
    </div>
)