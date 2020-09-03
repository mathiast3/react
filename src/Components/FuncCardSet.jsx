import React from 'react';
import Card from './Card';
import {useFetch} from '../Service/StudentService';


function FuncCardSet(props) {
    const { data} = useFetch('getAll', null);

    console.log(data);

    return(
        <div>
            
            {data && data.length > 0 && data.map(student => <Card key={student.id} info={student}/>)}
        </div>
    )
}

export default FuncCardSet;