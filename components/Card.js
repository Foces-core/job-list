import React from 'react'

function Card() {
    return (
        <div class="card lg:card-side border-2 border-blue-500 text-left bg-stone-50">
            <div class="card-body">
            <h2 class="card-title font-bold">DRDO Mechanical Fellowship 2021</h2> 
            <p class="text-gray-500">DRDO Defence Laboratory Junior Research Fellowship in Mechanical 2021 is an opportunity offered to graduate and postgraduate degree holders. The selected fellows will receive a monthly stipend of INR 31,000 plus HRA and medical facilities as per rules.</p> 
            <div className="flex flex-row items-center justify-between mt-2">
                <div class="card-actions">
                    <div class="flex flex-col">
                        <p>Last date: 28th Dec</p> 
                        <p>Eligibility: BE/B.Tech</p>
                    </div>                
                </div>
                <button class="btn bg-blue-100 text-blue-500 border-none">Visit Website</button>
            </div>
            </div>
      </div>      
    )
}

export default Card
