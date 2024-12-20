import {
  HiOutlineChatBubbleLeft,
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from 'react-icons/hi2';

import { formatDate } from '../../utilitiles/helpers';
import { useDeleteUser } from './useDeleteUser';
import Table from '../../ui/Table';
import Pill from '../../ui/Pill';
import ButtonIcon from '../../ui/ButtonIcon';
import ButtonGroup from '../../ui/ButtonGroup';
import Image from '../../ui/Image';
import UserForm from './UserForm';
import Modal from '../../ui/Modal';
import ModalConfirm from '../../ui/ModalConfirm';

function UsersRow({ user }) {
  const { isDeletingUser, deleteUser } = useDeleteUser();

  const {
    id,
    photoUrl,
    emailAddress,
    firstName,
    lastName,
    startDate,
    endDate,
  } = user;

  return (
    <>
      <Table.Row>
        <Image src={photoUrl} alt={`Photo of ${firstName} ${lastName}`} />
        <div>{emailAddress}</div>
        <div>{`${firstName} ${lastName}`}</div>
        <div>{formatDate(startDate)}</div>
        <div>{!endDate ? '—' : formatDate(endDate)}</div>
        <div>
          {!endDate ? (
            <Pill variant='active'>Active</Pill>
          ) : (
            <Pill variant='inactive'>Inactive</Pill>
          )}
        </div>
        <ButtonGroup>
          <Modal>
            <Modal.Control controlName='edit-user'>
              <ButtonIcon>
                <HiOutlinePencilSquare />
              </ButtonIcon>
            </Modal.Control>
            <Modal.Window windowName='edit-user'>
              <UserForm editUser={user} />
            </Modal.Window>

            <Modal.Control controlName='delete-user'>
              <ButtonIcon>
                <HiOutlineTrash />
              </ButtonIcon>
            </Modal.Control>
            <Modal.Window windowName='delete-user'>
              <ModalConfirm
                operation='delete'
                resource='user'
                onConfirm={() => deleteUser(id)}
                disabled={isDeletingUser}
              />
            </Modal.Window>
          </Modal>
        </ButtonGroup>
      </Table.Row>
    </>
  );
}

export default UsersRow;
