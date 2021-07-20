import React from 'react'

export default function Repairment({reparation, setShowFormInPlace, setIndexForm, indexForm}) {
    console.log(reparation);
    return (
        <>
            <div className="col-span-3">{reparation.description}</div>
            <div>{reparation.kilometers} km</div>
            <div>{reparation.garage_address}</div>
            <div>{reparation.price} €</div>
            <div>{reparation.date}</div>
            <div>
                <button onClick={() => {handleRemoveReparation(reparation)}} className="float-right">
                <svg class="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                </button>
                <button onClick={() => {setShowFormInPlace(true); setIndexForm(indexForm); }} className="float-right">
                <svg class="h-5 w-5 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                </svg>
                </button>
            </div>
        </>
    )
}