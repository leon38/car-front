import React from "react";
import { addReparation } from "../webservice/car";

export default function Reparations({reparations, car_id}) {
    const [showModal, setShowModal] = React.useState(false);
    const [showForm, setShowForm] = React.useState(false);
    const [reparation, setReparation] = React.useState((new Map()).set("car_id", car_id));
    
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
                    {reparations.map(reparation => {
                        let date = new Date(parseInt(reparation.date) * 1000).toLocaleDateString('fr-FR');
                        return (
                            <>
                                <div className="col-span-3">{reparation.description}</div>
                                <div>{reparation.kilometrage}</div>
                                <div>{reparation.adresse_garage}</div>
                                <div>{reparation.cout} €</div>
                                <div>{date}</div>
                                <div>&nbsp;</div>
                            </>
                        )
                    })}
                    {showForm ? (
                      <>
                        <div className="col-span-2"><textarea placeholder="Description" name="description" onChange={(e) => setReparation(reparation.set("description", e.target.value))}></textarea></div>
                        <div><input type="text" name="type" placeholder="Type" onChange={(e) => setReparation(reparation.set("type", e.target.value))} /></div>
                        <div><input type="number" name="kilometrage" placeholder="Kilométrage" onChange={(e) => setReparation(reparation.set("kilometrage", e.target.value))} /></div>
                        <div><input type="text" name="adresse_garage" placeholder="Garage" onChange={(e) => setReparation(reparation.set("adresse_garage", e.target.value))}/></div>
                        <div><input type="number" name="cout" placeholder="Coût" onChange={(e) => {setReparation(reparation.set("cout", e.target.value))}} /></div>
                        <div><input type="date" name="date" onChange={(e) => setReparation(reparation.set("date", e.target.value))}/></div>
                        <input type="hidden" name="car_id" value="{reparations[0].car_id}" />
                        <div><input type="submit" value="Valider" onClick={() => { addReparation({reparation}); const dateReparation = reparation.get("date").split("/"); reparation.set("date", new Date(dateReparation[2]+"-"+dateReparation[1]+"-"+dateReparation[0]).getTime() / 1000); reparations.push(Object.fromEntries(reparation)); setShowForm(false); }}/></div>
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