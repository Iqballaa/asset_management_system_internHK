import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon } from 'mdbreact';
import data from '../data/data.json';

class Gis extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md='12'>
            <MDBCard>
              <MDBCardHeader color='indigo' className='text-white'>
                <MDBIcon icon='globe-americas' className='mr-2' />
                <h3 className='font-weight-bold d-inline'>GIS Daerah Cawang</h3>
              </MDBCardHeader>
              <MDBCardBody>
                <MapContainer center={[-6.2534346, 106.8535829]} zoom={13} scrollWheelZoom={true} className="map-container">
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  {data.features.map(feature => (
                    <Marker key={feature.properties.id} position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}>
                      <Popup>
                        <p className='font-weight-bold'>{feature.properties.name}</p>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Gis;
