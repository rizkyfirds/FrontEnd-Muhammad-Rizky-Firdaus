import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import logoLokasi from "../Images/loc.png";

function Map() {
    const position = [-6.94983, 107.61989];
    return (
        <div className=" h-screen bg-[#ef4444]/80">
            <div className="flex h-screen ">
                <div className="m-auto w-2/3 h-2/3 bg-[#f1f5f9]/80 rounded-lg m-2 place-items-center">
                    <p className="text-center text-xl underline underline-offset-8 text-black font-bold pt-10">
                        Lokasi Defend ID
                    </p>
                    <div>
                        <MapContainer center={position} zoom={20} style={{ width: '100%', height: '400px' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <img src={logoLokasi} alt="" className="w-4 h-4" />
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map