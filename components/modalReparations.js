import React from "react";
import { RepairmentService } from "../webservice/RepairmentService";

export default function Reparations({reparations, car_id}) {
    const defaultReparations = reparations;

    const [showModal, setShowModal] = React.useState(false);
    const [showForm, setShowForm] = React.useState(false);
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
                  <div className="relative p-6 grid grid-cols-8 gap-4 border border-t-0 border-l-0 border-r-0 border-b-1 border-dotted border-gray-300 p-2 hover:bg-gray-50">
                        <div className="col-span-3">Description</div>
                        <div>Kilométrage</div>
                        <div>Garage</div>
                        <div>Coût</div>
                        <div>Date</div>
                        <div>&nbsp;</div>
                    {defaultReparations.map((reparation) => {
                        return (
                            <>
                                <div className="col-span-3">{reparation.description}</div>
                                <div>{reparation.kilometers}</div>
                                <div>{reparation.garage_address}</div>
                                <div>{reparation.price} €</div>
                                <div>{reparation.date}</div>
                                <div>
                                  <button onClick={() => {handleRemoveReparation(reparation)}} className="float-right">
                                    <svg class="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                                  </button>
                                </div>
                            </>
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
                  <div className="float-right">
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