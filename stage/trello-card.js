import React from 'react';
import ReactDOM from 'react-dom';

import TrelloCard from 'view/components/TrelloCard';

const placeholder = document.querySelector('#app');
const anchor = document.querySelector('a');

const card = require('./data/card1.json');

ReactDOM.render(
  <TrelloCard
    {...card}
    refreshCard={(cardID) => console.log('refresh: ', cardID) }
    deleteCard={(cardID) => console.log('delete: ', cardID) }
    onChangeName={(cardID, newName) => console.log('change name: ', newName) }
    onChangeDescription={(cardID, newDescription) => console.log('change description: ', newDescription) }
    hasAnotherCard={false}
    fullWidth={false}
    originalAnchor={anchor} ></TrelloCard>,
  placeholder
);