import React from "react";
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Microscope,
} from "lucide-react";
import SidePanel from "./components/SidePanel";
import HubView from "./components/HubView";
import MainViewer from "./components/MainViewer";
import { ViewerProvider, useViewer } from "./context/ViewerContext";

function ViewerControls() {
  const { zoomLevel, setZoomLevel } = useViewer();

  return (
    <div className="absolute bottom-4 right-4 flex flex-col bg-white rounded-lg shadow-lg">
      <button
        onClick={() => setZoomLevel(Math.min(zoomLevel + 0.1, 3))}
        className="p-2 hover:bg-gray-100 border-b"
      >
        <ZoomIn size={20} />
      </button>
      <button
        onClick={() => setZoomLevel(Math.max(zoomLevel - 0.1, 0.5))}
        className="p-2 hover:bg-gray-100"
      >
        <ZoomOut size={20} />
      </button>
    </div>
  );
}

function App() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [isPanelOpen, setIsPanelOpen] = React.useState(true);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <ViewerProvider>
      <div className="flex h-screen bg-gray-50">
        <div
          className={`relative transition-all duration-300 ${isPanelOpen ? "w-80" : "w-0"}`}
        >
          <div
            className={`h-full bg-white shadow-lg overflow-hidden ${isPanelOpen ? "opacity-100" : "opacity-0"}`}
          >
            <SidePanel />
          </div>
          <button
            onClick={() =>
              setIsPanelOpen((prev) => {
                console.log(`clicking isOpen`);

                return !prev;
              })
            }
            className="z-10 absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-sm hover:bg-gray-50"
          >
            {isPanelOpen ? (
              <ChevronLeft size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
            <div className="flex items-center space-x-3">
              <Microscope className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-800">
                Whole Slide Image Viewer
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleFullscreen}
                className="p-2 hover:bg-gray-100 rounded-lg"
                title="Fullscreen"
              >
                <Maximize2 size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 relative p-4">
            <div className="h-full bg-white rounded-lg shadow-lg p-4">
              <div className="relative h-full">
                <MainViewer />
                <ViewerControls />
              </div>
            </div>

            <div className="absolute top-8 right-8 w-64 z-10">
              <HubView />
            </div>
          </div>
        </div>
      </div>
    </ViewerProvider>
  );
}

export default App;

