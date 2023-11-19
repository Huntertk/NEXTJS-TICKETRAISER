"use client"
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'

const DeleteBlock = ({id}) => {
  const router = useRouter()

  const deleteTicket = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method:'DELETE'
      })
      if(res.ok){
        router.refresh()
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <FontAwesomeIcon 
    icon={faX} 
    className='text-red-400 hover:cursor-pointer hover:text-red-200' 
    onClick={() => deleteTicket(id)}
    />
  )
}

export default DeleteBlock