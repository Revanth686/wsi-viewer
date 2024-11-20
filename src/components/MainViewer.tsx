import React, { useRef, useEffect, useState } from "react";
import { Move, FileText } from "lucide-react";
import { useViewer } from "../context/ViewerContext";

const MainViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const { position, setPosition, zoomLevel } = useViewer();

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const newPosition = {
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    };

    setPosition(newPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div className="relative h-full">
      <div
        ref={containerRef}
        className="relative h-full bg-gray-900 rounded-lg overflow-hidden cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute inset-0 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
            transformOrigin: "center",
          }}
        >
          <img
            src={"wsi.png"}
            alt="Whole Slide Image"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute inset-x-0 top-0 p-4 flex justify-between items-start pointer-events-none">
          <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
            <Move className="w-4 h-4 mr-2" />
            <span>Drag to pan</span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {(zoomLevel * 100).toFixed(0)}%
        </div>
      </div>

      <button
        className="absolute bottom-4 right-20 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 transition-colors"
        onClick={() => console.log("Generate report")}
      >
        <FileText className="w-4 h-4" />
        <span>Generate Report</span>
      </button>
    </div>
  );
};

export default MainViewer;

