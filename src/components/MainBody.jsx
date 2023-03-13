import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, useDisclosure, Button, Modal, ModalOverlay, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useAccordion } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/action';
import TableData from './TableData';

function NoFilter() {
  return ( <>
      <Table size='md' className='h-[100vh]' colorScheme='facebook'>
        <Thead>
          <Tr className='text-'>
            <Th isNumeric className='text-[2rem]'>Id</Th>
            <Th className='text-[2rem]'>Name</Th>
            <Th className='text-[2rem]'>Username</Th>
            <Th className='text-[2rem]'>Email</Th>
          </Tr>
        </Thead>
        <TableData/>
      </Table>  
    </>
  );
}

export default NoFilter;
