import { useEffect, useState } from 'react';
import { Tbody, Table, Tr, Td, Th, Thead, useDisclosure, Button, Modal, ModalOverlay, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useAccordion, Divider } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/action';

const TableData = (wordToSearch) => {
  const { users, loading } = useSelector((state) => ({ ...state.data }));
  const [ name, setName ] = useState('');
  const [ address, setAddress ] = useState({});
  const [ phone, setPhone ] = useState();
  const [ website, setWebsite ] = useState('');
  let [ matchedUsers, setMatchedUsers ] = useState([]);

  const dispatch = useDispatch();

  const findMatches = (wordToMatch) => {
    const regex = new RegExp(wordToMatch, "gim");
    return users.filter( ({name, email, username}, index) => {
      return (regex.test(name) || regex.test(email) || regex.test(username));
    })
  }

  useEffect(()=> {
    setMatchedUsers(findMatches(wordToSearch.wordToSearch));
  }, [wordToSearch.wordToSearch.length])

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure();
  const overlay = <OverlayTwo />
  
  return ( <>
      {matchedUsers.length === 0 && users.length === 0 && 
      <button
        className="bg-[#319795] hover:bg-[#319795b0] text-white font-bold py-2 px-4 rounded mt-[1 rem]"
        onClick={ () => dispatch(fetchUsers()) }>Fetch Users</button>
      }
      <Table size='lg' maxWidth={'100vw'} variant={'striped'} colorScheme='facebook'>
        {matchedUsers.length > 0 || users.length > 0 && 
          <Thead mb={'2rem'}>
            <Tr>
              <Th isNumeric className='text-[2rem]'>Id</Th>
              <Th className='text-[2rem]'>Name</Th>
              <Th className='text-[2rem]'>Username</Th>
              <Th className='text-[2rem]'>Email</Th>
            </Tr>
          </Thead>
        }
        <Tbody>
          {matchedUsers.length ? matchedUsers.map((user, index) => {
            return <Tr key={index}  
              onClick={() => {
                onOpen();
                setName(user.name);
                setAddress(user.address);
                setPhone(user.phone);
                setWebsite(user.website);
              }}
              className='hover:cursor-pointer'>
                <Td isNumeric className='font-medium text-base'>{user.id}</Td>
                <Td className='font-medium text-base'>{user.name}</Td>
                <Td className='font-medium text-base'>{user.username}</Td>
                <Td className='font-medium text-base'>{user.email}</Td> 
              </Tr>
          }) : users.map((user, index) => {
            return <Tr key={index}  
              onClick={() => {
                onOpen();
                setName(user.name);
                setAddress(user.address);
                setPhone(user.phone);
                setWebsite(user.website);
              }}
              className='hover:cursor-pointer'>
                <Td isNumeric className='font-medium text-base'>{user.id}</Td>
                <Td className='font-medium text-base'>{user.name}</Td>
                <Td className='font-medium text-base'>{user.username}</Td>
                <Td className='font-medium text-base'>{user.email}</Td> 
              </Tr>
          })}
        </Tbody>
      </Table>   
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p><span className='font-bold'>Address:</span>{address.street}, {address.city}, {address.zipcode}</p>
            <p><span className='font-bold'> Phone: </span> {phone}</p>
            <p><span className='font-bold'> Website: </span> {website}</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TableData;
