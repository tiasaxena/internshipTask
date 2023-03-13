import React, { useState } from 'react';
import { Table, Thead, Tr, Th, filter } from '@chakra-ui/react';
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
      <Table size='md' colorScheme='facebook'>
        <Thead>
          <Tr className='text-'>
            <Th isNumeric className='text-[2rem]'>Id</Th>
            <Th className='text-[2rem]'>Name</Th>
            <Th className='text-[2rem]'>Username</Th>
            <Th className='text-[2rem]'>Email</Th>
          </Tr>
        </Thead>
        <TableData wordToSearch={filterSearch}/>
      </Table>  
    </>
  );
}

export default MainBody;
