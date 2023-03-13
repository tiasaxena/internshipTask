import React, { useState, useEffect } from 'react';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';

function Head () {

  const [ userData, setUserData ] = useState([]);

  const [ text, setText ] = useState('');
  let data = [];
  let suggestions = [];

  function getMatches(wordToCheck, data) {
    data.filter((user) => {
      const regex = new RegExp(wordToCheck, "gi");
      return user.match(regex);
    });
  }

  function matchUsers (wordToCheck)  {
    
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUserData(json);
      })
      .then(() => {
        console.log('Head userData', userData);
        userData.map((user) => {
          data.push(user.name, user.email, user.username);
        })
        return data;
      })
      .then(data => {
        console.log('data', data);
        suggestions = getMatches(wordToCheck, data);
        console.log('suggestions', suggestions);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const onTextChange = (e) => {
    e.preventDefault();
    const wordToCheck = e.target.value;
    setText(wordToCheck);
    matchUsers(wordToCheck);
  }

  return (
    <div className='w-[88%] mx-auto pb-[3rem]'>
      <h1 className='text-stone-600 text-5xl pb-[1rem]'>Users</h1>
      <InputGroup>
        <InputLeftElement
        pointerEvents='none'
        children='&#9758;'
        fontSize={'lg'}
      />
        <Input
          placeholder='Search by Name, Username, Email'
          _placeholder={{ opacity: 1, color: 'gray.500' }}
          size='lg'
          value={text}
          onChange={onTextChange}
        />
      </InputGroup>
    </div>
  )
}

export default Head