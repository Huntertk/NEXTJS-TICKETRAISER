import TicketForm from '@/app/(components)/TicketForm'
import React from 'react'

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      cache: "no-store"
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const TicketPage = async ({params}) => {
  const EDITMODE = params.id === 'new' ? false : true
  let updateTicketData = {};
  if(EDITMODE) {  
    updateTicketData  = await getTicketById(params.id)
    console.log( updateTicketData );
  } else {
    updateTicketData = "new"
  }
  return (
    <TicketForm />
  )
}

export default TicketPage