import { MapContainer, TileLayer, CircleMarker, Tooltip, Polygon, ZoomControl } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import { AREAS } from '../data/services.js'

// Approximate Route 128 belt polygon (clockwise from north)
const BELT_128 = [
  [42.49, -70.95], // Nahant area
  [42.48, -71.05], // Lynnfield
  [42.49, -71.18], // Reading
  [42.46, -71.28], // Burlington
  [42.42, -71.38], // Lexington / Lincoln
  [42.35, -71.40], // Weston
  [42.28, -71.32], // Needham
  [42.22, -71.22], // Westwood
  [42.19, -71.11], // Milton
  [42.20, -70.98], // Weymouth
  [42.28, -70.90], // Hingham
  [42.40, -70.86], // Nahant tip
]

function FilledPin({ active, size = 12 }) {
  return (
    <div
      className={`service-pin${active ? ' big' : ''}`}
      style={{ width: size, height: size }}
    />
  )
}

export default function CoverageMap({ highlight, height = '100%' }) {
  const nav = useNavigate()
  const center = [42.360, -71.075]

  return (
    <div className="map-stage" style={{ height }}>
      <MapContainer
        center={center}
        zoom={10}
        scrollWheelZoom={false}
        zoomControl={false}
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        {/* 128 belt outline */}
        <Polygon
          positions={BELT_128}
          pathOptions={{
            color: '#E63946',
            weight: 1.5,
            opacity: 0.4,
            fillColor: '#E63946',
            fillOpacity: 0.04,
            dashArray: '6 6',
          }}
        />
        {/* Service pins */}
        {AREAS.map((a) => {
          const active = a.slug === highlight
          const isPrimary = a.primary || active
          return (
            <CircleMarker
              key={a.slug}
              center={[a.lat, a.lng]}
              radius={isPrimary ? 10 : 7}
              pathOptions={{
                color: active ? '#B81E2B' : '#E63946',
                weight: 2,
                fillColor: active ? '#B81E2B' : '#E63946',
                fillOpacity: 0.85,
              }}
              eventHandlers={{
                click: () => nav(`/areas/${a.slug}`),
              }}
            >
              <Tooltip direction="top" offset={[0, -8]} opacity={1} permanent={isPrimary}>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 12 }}>
                  <strong>{a.name}</strong>
                  {active || isPrimary ? <span style={{ color: '#E63946', marginLeft: 6 }}>{a.eta}</span> : null}
                </div>
              </Tooltip>
            </CircleMarker>
          )
        })}
      </MapContainer>
      <div className="tag-legend">
        <span className="pip"></span> {AREAS.length} active service points
      </div>
    </div>
  )
}
