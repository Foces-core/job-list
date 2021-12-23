import React from 'react'

function Card(props) {
    return (
        <div className="card lg:card-side border-2 border-blue-500 text-left bg-stone-50 m-4">
            <div className="card-body">
            <h2 className="card-title font-bold">{props.title}</h2> 
            <p className="text-gray-500">{props.description}</p> 
            <div className="flex flex-row items-center justify-between mt-2">
                <div className="card-actions">
                    <div className="flex flex-col">
                        <p>Last date: {props.deadline}</p> 
                        <p>Eligibility: {props.eligiblity}</p>
                    </div>                
                </div>
                <button className="btn bg-blue-100 text-blue-500 border-none">Visit Website</button>
            </div>
            </div>
      </div>      
    )
}

export default Card
