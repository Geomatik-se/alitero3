import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Icon } from 'ol/style';
import { fromLonLat, toLonLat } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';

const InteractiveMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current) return;

    // Berlin coordinates
    const berlinCenter = fromLonLat([13.405, 52.520]);

    // Create marker feature for Berlin
    const markerFeature = new Feature({
      geometry: new Point(berlinCenter)
    });

    // Create vector layer for markers
    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [markerFeature]
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuMjIgMTIgMjQgMTIgMjRDMTIgMjQgMjIgMTcuMjIgMjIgMTJDMjIgNi40OCAxNy41MiAyIDEyIDJaIiBmaWxsPSIjMjU2M0ViIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMyIgZmlsbD0id2hpdGUiLz4KPC9zdmc+',
          scale: 1.5
        })
      })
    });

    // Create the map
    const mapInstance = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors'
          })
        }),
        markerLayer
      ],
      view: new View({
        center: berlinCenter,
        zoom: 13,
        maxZoom: 18,
        minZoom: 2
      }),
      controls: defaultControls({
        attribution: true,
        zoom: true,
        rotate: false
      })
    });

    setMap(mapInstance);
    setMapLoaded(true);

    // Cleanup
    return () => {
      mapInstance.setTarget(null);
    };
  }, []);

  // Add click interaction
  useEffect(() => {
    if (!map) return;

    const handleMapClick = (event) => {
      const coordinate = event.coordinate;
      const lonLat = toLonLat(coordinate);
      console.log('Map clicked at:', lonLat);
    };

    map.on('click', handleMapClick);

    return () => {
      map.un('click', handleMapClick);
    };
  }, [map]);

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        className="w-full h-96 rounded-lg shadow-lg"
        style={{ minHeight: '400px' }}
      />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-500 text-sm">Loading map...</p>
          </div>
        </div>
      )}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 z-10">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-gray-900">landingspage24</p>
            <p className="text-xs text-gray-600">Berlin, Germany</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;