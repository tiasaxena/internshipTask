import { useEffect, useState } from 'react';
import { Tbody, Tr, Td, useDisclosure, Button, Modal, ModalOverlay, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useAccordion } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/action';

function TableData() {
  const [ name, setName ] = useState('');
  const [ address, setAddress ] = useState({});
  const [ phone, setPhone ] = useState();
  const [ website, setWebsite ] = useState('');
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchUsers())
  }, []);

  const { users, loading } = useSelector((state) => ({ ...state.data }));

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
          {users.map((user, index) => {
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
    </>
  );
}

export default TableData;
