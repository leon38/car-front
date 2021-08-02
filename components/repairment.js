import React from 'react'

export default function Repairment({reparation, setShowFormInPlace, setIndexForm, indexForm}) {
    return (
        <>
            <div className="col-span-3">{reparation.description}</div>
            <div>{reparation.kilometers} km</div>
            <div>{reparation.garage_address}</div>
            <div>{reparation.price} €</div>
            <div>{reparation.date}</div>
            <div className="float-right">
                <button onClick={() => {setShowFormInPlace(true); setIndexForm(indexForm); }}>
                    <svg className="h-5 w-5 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                    </svg>
                </button>
                <button onClick={() => {handleRemoveReparation(reparation)}}>
                    <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                </button>
            </div>
        </>
    )
}