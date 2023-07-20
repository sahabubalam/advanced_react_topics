import React from 'react';
import HelloComponent from './Hello';

const FormComponent = () => {
    const [data,setData] = React.useState('')
    return (
        <div>
            <input name = 'data' value={data} onChange={(event)=>{
                setData(event.target.value)
            }}/>
           
        </div>
    );
};

export default FormComponent;