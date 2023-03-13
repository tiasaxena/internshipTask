import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, useDisclosure, Button, Modal, ModalOverlay, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useAccordion } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Head from './components/Head';
import { fetchPosts, fetchs } from './redux/action';

function App() {
  const [ name, setName ] = useState('');
  const [ address, setAddress ] = useState({});
  const [ phone, setPhone ] = useState();
  const [ website, setWebsite ] = useState('');
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchPosts())
  }, []);

  const { posts, loading } = useSelector((state) => ({ ...state.data }));

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
  
  return (
    <div className="w-[100vw] h-[100%] text-gray-700 bg-gradient-to-r from-[#ddd6f3] to-[#faaca857] py-[10vh] px-[10vw]">
      <Head/>
      <Table size='md' className='h-[100vh]' colorScheme='facebook'>
        <Thead>
          <Tr className='text-'>
            <Th isNumeric className='text-[2rem]'>Id</Th>
            <Th className='text-[2rem]'>Name</Th>
            <Th className='text-[2rem]'>Username</Th>
            <Th className='text-[2rem]'>Email</Th>
          </Tr>
        </Thead>
        <Tbody >
          {posts.map((user, index) => {
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
            <p>
              <span className='font-semibold'> Address: </span> {address.street}, {address.city}, {address.zipcode}
            </p>
            <p>
              <span className='font-semibold'> Phone: </span> {phone}
            </p>
            <p>
              <span className='font-semibold'> Website: </span> {website}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    
  );
}

export default App;
