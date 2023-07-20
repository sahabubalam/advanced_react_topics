import React, { useEffect, useState } from 'react';
import {Checkbox, Row, Col, Button} from 'antd';

const Testcheckbox = () => {

    const all=[
        {id:1,name:"sahabub",status:0},
        {id:2,name:"azmal",status:0},
        {id:3,name:"aziz",status:0},
        {id:4,name:"khaled",status:0},
        {id:5,name:"sahed",status:0}
    ]
    const [data,setData]=useState([])
     useEffect(() => {
        setData(all);
    }, [])
    const [checkedValues,setCheckedValues]=useState([])
    // console.log("test",all)
    const handleChecks=event=>{
    const {checked, value} = event.target;
     console.log("check",checked)
     console.log("value",value)
    const values = [...checkedValues];
    // console.log("values",values)

    if (checked && value) {
        values.push(value);
    } else if (!checked && value) {
        const index = values.indexOf(value);
        if (index >= 0) {
            values.splice(index, 1);
        }
    }
    
    setCheckedValues([...values]);
    }
    const isAllSelected = () => data.length === checkedValues.length;
    const handleSelectAll = () => {
		
		if (isAllSelected()) {
			setCheckedValues([])
			return;
		}
		
		setCheckedValues(
				data.map(v => v.id.toString())
		);
	}
    const isChecked = id => {
        console.log("calling..")
		return checkedValues.indexOf(id.toString()) >= 0
	}
   
    console.log("checkvlaue",checkedValues)
    console.log("checkvlaue length",checkedValues.length)
    return (
        <div>
          <table className="table table-bordered">
                <thead >
                    <tr className='text-center'>
                        <th >SI</th>
                        <th >name</th>
                        <th >
                        <button onClick={handleSelectAll} className="btn btn-primary btn-sm">
                            {
                               
                                isAllSelected() ? 'Unselect All' : 'Select All'
                            }
                        </button>
                        </th>
                    </tr>
                </thead>
                <tbody onChange={handleChecks}>
                    {
                        data.map((d,index)=> <tr key={d.id}>
                            
                                <th>{index+1}</th>
                                <td>{d.name}</td>
                                <td>
                                    <Checkbox checked={isChecked(d.id)} value={d.id}/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Testcheckbox;