import { defaults } from 'autoprefixer'
import React from 'react'

export default function RepairmentForm({repairment, setReparation, handleUpdateRepairment}) {
    let pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    repairment.date = repairment.date.replace(pattern, '$3-$2-$1');
    return (
        <>
            <div className="col-span-2"><textarea placeholder="Description" name="description" defaultValue={repairment.description} onChange={(e) => setReparation(repairment.description = e.target.value)}></textarea></div>
            <div>
                <select name="type" onChange={(e) => setReparation(repairment.type =  e.target.value)} value={repairment.type}>
                <option value="">Type</option>
                <option value="reparation">Réparation</option>
                <option value="vidange">Vidange</option>
                </select>
            </div>
            <div><input type="number" name="kilometers" placeholder="Kilométrage" value={repairment.kilometers} onChange={(e) => setReparation(repairment.kilometers = e.target.value)} /></div>
            <div><input type="text" name="adresse_garage" placeholder="Garage" value={repairment.garage_address} onChange={(e) => setReparation(repairment.garage_address = e.target.value)}/></div>
            <div><input type="number" name="price" placeholder="Coût" value={repairment.price} onChange={(e) => {setReparation(repairment.price = e.target.value)}} /></div>
            <div><input type="date" name="date" value={repairment.date} onChange={(e) => setReparation(repairment.set("date", e.target.value))}/></div>
            <input type="hidden" name="car_id" value="{repairment.car_id}" />
            <div><input type="submit" value="Valider" className="float-right bg-indigo-400 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 rounded-xl" onClick={() => { handleUpdateRepairment(repairment); }}/></div>
        </>
    )
}