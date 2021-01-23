import React from "react";

export default function modalAddReparations({reparations}) {
    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        <button
          className="bg-indigo-400 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 rounded-xl"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => setShowModal(true)}
        >
          Ajouter une réparation
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <div className="my-6 mx-auto">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Ajouter une réparation
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
                  <div className="relative p-6 grid grid-cols-7 gap-4 border border-t-0 border-l-0 border-r-0 border-b-1 border-dotted border-gray-300 p-2 hover:bg-gray-50">
                        <div className="col-span-3">Description</div>
                        <div>Kilométrage</div>
                        <div>Garage</div>
                        <div>Coût</div>
                        <div>Date</div>
                    {reparations.map(reparation => {
                        let date = new Date(parseInt(reparation.date) * 1000).toLocaleDateString('fr-FR');
                        return (
                            <>
                                <div className="col-span-3">{reparation.description}</div>
                                <div>{reparation.kilometrage}</div>
                                <div>{reparation.adresse_garage}</div>
                                <div>{reparation.cout} €</div>
                                <div>{date}</div>
                            </>
                        )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-80 fixed inset-0 z-40"></div>
          </>
        ) : null}
      </>
    );
  }