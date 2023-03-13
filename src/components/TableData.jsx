import { useEffect, useState } from 'react';
import { Tbody, Tr, Td, useDisclosure, Button, Modal, ModalOverlay, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useAccordion } from '@chakra-ui/react';
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

  useEffect( () => {
    dispatch(fetchUsers())
  }, []);

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
        <Tbody >
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
          })
          }
        </Tbody>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
               Address: {address.street}, {address.city}, {address.zipcode}
            </p>
            <p>
               Phone: {phone}
            </p>
            <p>
               Website: {website}
            </p>
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
