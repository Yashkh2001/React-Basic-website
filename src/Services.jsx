import React from 'react';

import Card from './Card';
import Sdata from './Sdata'

const Services=()=>{
return(
    <div className="my-5">
    <h1 className="text-center mt-5">Services page</h1>
    
    
    <div className="container-fluid mb-5 mt-4">
        <div className="row">
            <div className="col-10 mx-auto">
             <div className="row gy-4">
             {
                 Sdata.map((val, ind)=>{
                   return <Card key={ind}
                   imgsrc ={val.imgsrc}
                   title={val.title}
                    />

                 })
             }


        </div>
    </div>
    </div>
    </div>
    </div>
    
)
};

export default Services;