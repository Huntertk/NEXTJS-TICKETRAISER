"use client"

import React , {useState} from 'react'
import { useRouter } from "next/navigation"

const TicketForm = () => {
  const router = useRouter()
  const startingTicketData = {
    title:"",
    description:"",
    category:"Hardware Problem",
    priority:1,
    progress:0,
    status:"not started",

  };

  const [formData, setFormData] = useState(startingTicketData)

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/tickets', {
        method:"POST",
        headers:{
          'Content-Type': "application/json"
        },
        body: JSON.stringify({formData})
      })
      if(!res.ok){
        throw new Error("Failed to create Error")
      }
      router.refresh()
      router.push("/")
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className='flex justify-center'>
      <form className='flex flex-col gap-3 w-1/2' method='POST' onSubmit={handleSubmit}>
        <h3>Create Your Ticket</h3>
        <label htmlFor='title'>Title</label>
        <input 
          type='text'
          id='title'
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
         <label htmlFor='description'>Description</label>
        <textarea 
        className='resize-none'
          id='description'
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={"5"}
          required
        />
        <label htmlFor="">Category</label>
        <select 
        name="category" 
        id="" 
        value={formData.category}
        onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label>Priority</label>
        <div>
          <input 
            id="priority-1" 
            name='priority' 
            type="radio"  
            onChange={handleChange}
            value={formData.priority}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input 
            id="priority-2" 
            name='priority' 
            type="radio"  
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input 
            id="priority-3" 
            name='priority' 
            type="radio"  
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input 
            id="priority-4" 
            name='priority' 
            type="radio"  
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input 
            id="priority-5" 
            name='priority' 
            type="radio"  
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label htmlFor="">Progersss</label>
        <input 
          type="range" 
          id='progress' 
          name='progress' 
          min={"0"}
          max={"100"}
          value={formData.progress} 
          onChange={handleChange}
        />
        <label>Status</label>
        <select 
        name="status" 
        id="status" 
        value={formData.status}
        onChange={handleChange} 
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" className='btn' value={"Create Ticket"} />
      </form>
    </div>
  )
}

export default TicketForm