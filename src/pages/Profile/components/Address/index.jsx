import { useState } from 'react';
import AppModal from '@components/ui/AppModal'
import AddressCard from '../AddressCard'
import CreatingAddress from '../CreatingAddress';

const Address = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  // const [isModalOpen, setIsModalCreateOpen] = useState(false);

  const toggleModalCreate = () => {
    setIsModalCreateOpen(!isModalCreateOpen);
  }

  return (
    <section>
        <button onClick={toggleModalCreate} className='underline mx-auto '>Create new address</button>
      

      <section className='mt-4 w-3/4 flex flex-col gap-5'>
        <AddressCard isDefault/>
        <AddressCard />
        <AddressCard />

      </section>

      <AppModal isOpen={isModalCreateOpen} onClose={toggleModalCreate}>
        <CreatingAddress />
      </AppModal>

    </section>
  )
}

export default Address