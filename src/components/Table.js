import React, { Fragment, useEffect, useState } from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import {nanoid} from 'nanoid';
import EditableRow from './EditableRow';

const Table = () => {
    const data=[
        {id:1,
        name:'sahabub',
        address:'rajshahi',
        phone:'01756265446',
        email:'sahabub.cse@gmail.com'},
        {id:2,
        name:'razib',
        address:'rajshahi',
        phone:'01756265446',
        email:'razib.cse@gmail.com'},
        {id:3,
        name:'azmal',
        address:'rajshahi',
        phone:'01756265446',
        email:'azmal.cse@gmail.com'},
        {id:4,
        name:'aziz',
        address:'rajshahi',
        phone:'01756265446',
        email:'aziz.cse@gmail.com'}
    ]
    const[contacts,setContacts]=useState(data)
    // useEffect(()=>{
    //     setData(info);
    // },[])
    const[addFormData,setAddFormData]=useState({
        name:"",
        address:"",
        phone:"",
        email:""
    })
    const handleAddFormChange=event=>{
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
    }
    const addFormSubmit=event=>{
        event.preventDefault();

        const newContact = {
          id: nanoid(),
          name: addFormData.name,
          address: addFormData.address,
          phone: addFormData.phone,
          email: addFormData.email,
        };
    
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }
    const[editContactId,setEditContactId]=useState(null)
    const handleEditClick=(event,contact)=>{
        event.preventDefault()
        setEditContactId(contact.id)
        const formValues={
            name:contact.name,
            address:contact.address,
            phone:contact.phone,
            email:contact.email
        }
        setEditFormData(formValues)
    }
    const[editFormdata,setEditFormData]=useState({
        name:"",
        address:"",
        phone:"",
        email:""
    })
    const handleEditFormChange=event=>{
        const fieldname=event.target.getAttribute("name");
        const fieldValue=event.target.value;
        const newFormData={...editFormdata}
        newFormData[fieldname]=fieldValue
        setEditFormData(newFormData)
    }
    const handleEditFormSubmit=event=>{
        event.preventDefault();
        const editContact={
            id:editContactId,
            name:editFormdata.name,
            address:editFormdata.address,
            phone:editFormdata.phone,
            email:editFormdata.email
        }
        const newContacts=[...contacts]
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        newContacts[index]=editContact;
        setContacts(newContacts);
        setEditContactId(null);
    }
    return (
        <div>
            <h2>Add a new contact</h2>
            <form onSubmit={addFormSubmit} className='mb-3'>
                <input type="text" onChange={handleAddFormChange}
                 name="name"  placeholder='input name..' />
                <input type="text" onChange={handleAddFormChange}
                 name="address"  placeholder='input addreess..' />
                <input type="text" onChange={handleAddFormChange}
                 name="phone"  placeholder='input phone..' />
                <input type="text" onChange={handleAddFormChange}
                 name="email"  placeholder='input email..' />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleEditFormSubmit}>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact,index)=>(
                            <Fragment>
                                {
                                    editContactId===contact.id ? ( <EditableRow editFormdata={editFormdata} handleEditFormChange={handleEditFormChange} />)
                                     :
                                     ( <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} />)
                                }
                               
                               
                            </Fragment>
                        
                        ))}
                    </tbody>
                </table>
            </form>
           
            
        </div>
    );
};

export default Table;