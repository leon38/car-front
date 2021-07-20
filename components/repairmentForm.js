import { defaults } from 'autoprefixer'
import React from 'react'

export default function RepairmentForm({repairment}) {

    return (
        <>
            <div className="col-span-2"><textarea placeholder="Description" name="description" onChange={(e) => setReparation(repairment.set("description", e.target.value))}>{repairment.description}</textarea></div>
            <div>
                <select name="type" onChange={(e) => setReparation(repairment.set("type", e.target.value))} value={repairment.type}>
                <option value="">Type</option>
                <option value="reparation">Réparation</option>
                <option value="vidange">Vidange</option>
                </select>
            </div>
            <div><input type="number" name="kilometers" placeholder="Kilométrage" value={repairment.kilometers} onChange={(e) => setReparation(repairment.set("kilometers", e.target.value))} /></div>
            <div><input type="text" name="adresse_garage" placeholder="Garage" value={repairment.garage_address} onChange={(e) => setReparation(repairment.set("garage_address", e.target.value))}/></div>
            <div><input type="number" name="price" placeholder="Coût" value={repairment.price} onChange={(e) => {setReparation(repairment.set("price", e.target.value))}} /></div>
            <div><input type="date" name="date" value={repairment.date} onChange={(e) => setReparation(repairment.set("date", e.target.value))}/></div>
            <input type="hidden" name="car_id" value="{repairment.car_id}" />
            <div><input type="submit" value="Valider" onClick={() => { handleUpdateRepairment(Object.fromEntries(repairment)); }}/></div>
        </>
    )
}