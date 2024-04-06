// MapContainer.tsx
import React, { ReactElement } from 'react'

const MapContainer = ({ children }) =>
  <>{React.cloneElement(children, {})}</>

export default MapContainer

