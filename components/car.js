import React from 'react'

class Car extends React.Component {
  render() {
    return (
      <div className="car bg-white rounded-xl shadow-xl p-4">
        <h3 className="text-center text-2xl">{this.props.car.name}</h3>
        <div className="w-2/6 mx-auto">
          <img src={`/${this.props.car.name}.png`} className="object-contain object-center" />
        </div>
        <div className="w-3/5 mx-auto m-4">
          <div className="border border-t-0 border-l-0 border-r-0 border-b-1 border-dotted border-gray-300">
            <span className="block float-left text-gray-500">Marque</span>
            <span className="block float-right">{this.props.car.brand}</span>
            <div className="clear-both"></div>
          </div>
          <div className="border border-t-0 border-l-0 border-r-0 border-t-0 border-b-1 border-dotted border-gray-300">
            <span className="block float-left text-gray-500">Immatriculation</span>
            <span className="block float-right">{this.props.car.immatriculation}</span>
            <div className="clear-both"></div>
          </div>
          <div className="border border-t-0 border-l-0 border-r-0 border-t-0 border-b-1 border-dotted border-gray-300">
            <span className="block float-left text-gray-500">Couleur</span>
            <span className="block float-right">{this.props.car.color}</span>
            <div className="clear-both"></div>
          </div>
          <div>
            <span className="block float-left text-gray-500">Contrôle technique</span>
            <span className="block float-right">{this.props.car.controle_technique}</span>
            <div className="clear-both"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Car