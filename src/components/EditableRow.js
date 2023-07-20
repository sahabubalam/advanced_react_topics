import React from 'react';

const EditableRow = ({editFormdata,handleEditFormChange}) => {
    return (
        <tr>
            <td> <input type="text" 
                 name="name" value={editFormdata.name} onChange={handleEditFormChange}  placeholder='input name..' /></td>
            <td> <input type="text" 
                 name="address" value={editFormdata.address} onChange={handleEditFormChange}  placeholder='input address..' /></td>
            <td> <input type="text" 
                 name="phone" value={editFormdata.phone} onChange={handleEditFormChange} placeholder='input phone..' /></td>
            <td> <input type="text" 
                 name="email" value={editFormdata.email} onChange={handleEditFormChange} placeholder='input email..' /></td>
                 <td>
                     <button type="submit">Save</button>
                     <button type="button">Cancel</button>
                 </td>
        </tr>
    );
};

export default EditableRow;