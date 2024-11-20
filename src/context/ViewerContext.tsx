import React, { createContext, useContext, useState } from 'react';

interface ViewerContextType {
  position: { x: number; y: number };
  zoomLevel: number;
  setPosition: (pos: { x: number; y: number }) => void;
  setZoomLevel: (zoom: number) => void;
}

const ViewerContext = createContext<ViewerContextType | undefined>(undefined);

export const ViewerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <ViewerContext.Provider value={{ position, zoomLevel, setPosition, setZoomLevel }}>
      {children}
    </ViewerContext.Provider>
  );
};

export const useViewer = () => {
  const context = useContext(ViewerContext);
  if (context === undefined) {
    throw new Error('useViewer must be used within a ViewerProvider');
  }
  return context;
};