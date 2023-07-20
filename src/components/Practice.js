import React, { useEffect, useState } from 'react';
import {Checkbox, Row, Col, Button} from 'antd';


const Practice = () => {
    const all=[
        {id:1,name:"apple",status:0},
        {id:2,name:"orange",status:0},
        {id:3,name:"banana",status:0},
        {id:4,name:"mango",status:0},
        {id:5,name:"jackfruit",status:0},
        {id:7,name:"mackfruit",status:0}
    ]
    const[data,setData]=useState([]);
    const[checkedValues,setCheckedValues]=useState([]);

    console.log({checkedValues});

    useEffect(()=>{
        setData(all);
    },[])

    const isAllSelected=()=>data.length===checkedValues.length

    const handleSelectAll=()=>{
        if(isAllSelected()){
            setCheckedValues([])
            return;
        }
        setCheckedValues(
            data.map(v=>v.id.toString())
        )

    }
    const handleChecks=e=>{
        const{checked,value}=e.target;
        const values=[...checkedValues]
        console.log("checked",checked)
        console.log("values",values)
        if(checked && value){
            values.push(value)
        }
        else if(!checked && value){
            const index=values.indexOf(value)
            console.log({index});
            if(index>=0){
                values.splice(index,1)
            }
        }
        setCheckedValues([...values])
    }
    const isChecked=id=>{
        // console.log("checkcalling....",checkedValues.indexOf(id.toString()));
        return checkedValues.indexOf(id.toString())>=0
    }
    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                   <tr>
                    <th>SI</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>
                        <button  onClick={handleSelectAll} className='btn btn-sm btn-secondary'>
                           {
                               isAllSelected() ? 'Unselect All': 'Select All'
                           }
                        </button>
                    </th>
                   </tr>
                </thead>
                <tbody onChange={handleChecks}>
                   {
                       data.map((d,index)=>{
                        return <tr key={d.id}>
                            <td>{index+1}</td>
                            <td>{d.name}</td>
                            <td>{d.status}</td>
                            <td>
                                <Checkbox checked={isChecked(d.id)} value={d.id}></Checkbox>
                            </td>
                        </tr>
                       })
                        
                   }

                </tbody>
            </table>
            
            
        </div>
    );
};

export default Practice;