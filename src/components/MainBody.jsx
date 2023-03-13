import React, { useState } from 'react';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';

import TableData from './TableData';

const MainBody = () => {

  const [ filterSearch, setFilterSearch ] = useState('');

  const onTextChange = (event) => {
    setFilterSearch(event.target.value);
  }

  return ( <>
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
          value={filterSearch}
          onChange={onTextChange}
        />
      </InputGroup>
        <TableData wordToSearch={filterSearch}/>
    </>
  );
}

export default MainBody;
