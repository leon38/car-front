import React from "react";
import { RepairmentService } from "../webservice/RepairmentService";
import Repairment from "./repairment";
import RepairmentForm from "./repairmentForm";

export default function Reparations({reparations, car_id}) {
    const defaultReparations = reparations;

    const [showModal, setShowModal] = React.useState(false);
    const [showForm, setShowForm] = React.useState(false);
    const [showFormInplace, setShowFormInPlace] = React.useState(false);
    const [indexForm, setIndexForm] = React.useState(0);
    const [reparation, setReparation] = React.useState((new Map()).set("car_id", car_id));
    const [list, updateList] = React.useState(defaultReparations);


    const handleRemoveReparation = (reparation) => {
      (new RepairmentService).delete(reparation.id)
      id = reparation.id;
      updateList(list.filter(reparation => reparation.id !== id));
    };

    const handleAddRepairment = (reparation) => {
      let pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
      reparation.date = reparation.date.replace(pattern, '$3/$2/$1');
      (new RepairmentService).create(reparation)
      updateList(list.push(reparation))
      setShowForm(false);
    }

    const handleUpdateRepairment = (reparation) => {
      let pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
      reparation.date = reparation.date.replace(pattern, '$3/$2/$1');
      (new RepairmentService).update(reparation.id, reparation)
      setShowFormInPlace(false);
    }
    
    return (
      <>
        <button
          className="bg-indigo-400 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 rounded-xl"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => setShowModal(true)}
          
        >
          Voir les réparations
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="my-6 mx-auto">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Réparations
                    </h3>
                    <button
                      className="p-1 ml-auto bg-white border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                      
                    >
                      <span className="bg-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 grid grid-cols-8 gap-4 border border-t-0 border-l-0 border-r-0 border-b-1 border-gray-300 p-2 hover:bg-gray-50">
                    {defaultReparations.map((reparation, index) => {
                        return (
                          <>{(showFormInplace && index === indexForm) ? <RepairmentForm repairment={ reparation } setReparation={setReparation} handleUpdateRepairment={handleUpdateRepairment}></RepairmentForm> : <Repairment reparation={ reparation } setShowFormInPlace={setShowFormInPlace} setIndexForm={setIndexForm} indexForm={index}></Repairment>}</>
                        )
                    })}
                    {showForm ? (
                      <>
                        <div className="col-span-2"><textarea placeholder="Description" name="description" onChange={(e) => setReparation(reparation.set("description", e.target.value))}></textarea></div>
                        <div>
                          <select name="type" onChange={(e) => setReparation(reparation.set("type", e.target.value))}>
                            <option value="">Type</option>
                            <option value="reparation">Réparation</option>
                            <option value="vidange">Vidange</option>
                          </select>
                        </div>
                        <div><input type="number" name="kilometers" placeholder="Kilométrage" onChange={(e) => setReparation(reparation.set("kilometers", e.target.value))} /></div>
                        <div><input type="text" name="adresse_garage" placeholder="Garage" onChange={(e) => setReparation(reparation.set("garage_address", e.target.value))}/></div>
                        <div><input type="number" name="price" placeholder="Coût" onChange={(e) => {setReparation(reparation.set("price", e.target.value))}} /></div>
                        <div><input type="date" data-date-format="DD/MMMM/YYYY" name="date" onChange={(e) => setReparation(reparation.set("date", e.target.value))}/></div>
                        <input type="hidden" name="car_id" value="{reparations[0].car_id}" />
                        <div><input type="submit" value="Valider" onClick={() => { handleAddRepairment(Object.fromEntries(reparation)); }}/></div>
                    </>
                    ) : null}
                  </div>
                  <div className="float-right p-2 bg-gray-100 rounded-xl rounded-b">
                    <button className="float-right bg-indigo-400 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 rounded-xl"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => {setShowForm(true); }}>Ajouter une réparation</button>
                      
                  </div>
                  <div className="clear-both"></div>  
                </div>
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-80 fixed inset-0 z-40"></div>
          </>
        ) : null}
      </>
    );
  }