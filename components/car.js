import React from 'react'
import Reparations from './modalReparations'

class Car extends React.Component {

  render() {
    let pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    let technical_inspection = new Date(this.props.car.technical_inspection.replace(pattern,'$3-$2-$1'));
    return (
      <div className="car bg-white rounded-xl shadow p-4">
        <h3 className="text-center font-bold text-xl">{this.props.car.name}</h3>
        <div className="w-1/2 mx-auto">
          <img src={`/${this.props.car.name}.png`} className="object-contain object-center" />
        </div>
        <div className="w-3/5 mx-auto m-4 text-sm">
          <div className="border border-t-0 border-l-0 border-r-0 border-b-1 border-dotted border-gray-300 p-2 hover:bg-gray-50">
            <span className="block float-left text-gray-400">Marque</span>
            <span className="block float-right">{this.props.car.brand}</span>
            <div className="clear-both"></div>
          </div>
          <div className="border border-t-0 border-l-0 border-r-0 border-t-0 border-b-1 border-dotted border-gray-300 p-2 hover:bg-gray-50">
            <span className="block float-left text-gray-400">Immatriculation</span>
              <span className="block float-right">{this.props.car.immatriculation}</span>
              <div className="clear-both"></div>
            </div>
            <div className="border border-t-0 border-l-0 border-r-0 border-t-0 border-b-1 border-dotted border-gray-300 p-2 hover:bg-gray-50">
              <span className="block float-left text-gray-400">Couleur</span>
              <span className="block float-right">{this.props.car.color}</span>
              <div className="clear-both"></div>
            </div>
            <div className="border border-t-0 border-l-0 border-r-0 border-t-0 border-b-1 border-dotted border-gray-300 p-2 hover:bg-gray-50">
              <span className="block float-left text-gray-400">Taille des pneus</span>
              <span className="block float-right">{this.props.car.tire_dimensions}</span>
              <div className="clear-both"></div>
            </div>
            <div className="border border-t-0 border-l-0 border-r-0 border-t-0 border-b-1 border-dotted border-gray-300 p-2 hover:bg-gray-50">
              <span className="block float-left text-gray-400">Contrôle technique</span>
              <span className="block float-right">{technical_inspection.toLocaleDateString('fr-FR')}</span>
              <div className="clear-both"></div>
            </div>
            <div className="p-2 hover:bg-gray-50">
              <span className="block float-left text-gray-400">Prochaine vidange</span>
              {this.props.car.repairments.map(reparation => {
                if (reparation.type === 'vidange') {
                  let vidange = new Date(reparation.date.replace(pattern,'$3-$2-$1'));
                  vidange.setFullYear(vidange.getFullYear() + 1);
                  const nextKilometrage = reparation.kilometers + 10000;
                  return (<span className="block float-right" key={reparation.id}>le {vidange.toLocaleDateString('fr-FR')} ou à {nextKilometrage} km</span>)
                }
              })}
              <div className="clear-both"></div>
            </div>
          </div>
          <div className="float-right">
            <Reparations reparations={this.props.car.repairments} car_id={this.props.car.id} />
          </div>
          <div className="clear-both"></div>
      </div>          
    )
  }
}

export default Car