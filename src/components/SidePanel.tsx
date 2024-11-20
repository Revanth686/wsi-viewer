import React from "react";

const SidePanel = () => {
  const cellData = {
    RBC: [
      { name: "Perfect Cells", count: 222, percentage: "67%" },
      { name: "Borderline Cells/RBC", count: 87, percentage: "24%" },
      { name: "Rare Cells", count: 2, percentage: "0.12%" },
      { name: "Fragmented Cells", count: 2, percentage: "0.12%" },
    ],
    WBC: [
      { name: "Basophil", count: 222, percentage: "67%" },
      { name: "Eosinophil", count: 50, percentage: "20%" },
      { name: "Lymphocyte", count: 87, percentage: "34%" },
      { name: "Monocyte", count: 2, percentage: "0.12%" },
    ],
  };

  return (
    <div className="h-full p-4 overflow-y-auto">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-2">Last Updated</div>
        <div className="font-medium">Mon Oct 07 2024 16:39:07</div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">RBC</h3>
        <div className="space-y-2">
          {cellData.RBC.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
            >
              <span className="text-gray-700">{item.name}</span>
              <div className="flex space-x-4">
                <span className="text-gray-600">{item.count}</span>
                <span className="text-gray-500 w-16">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">WBC</h3>
        <div className="space-y-2">
          {cellData.WBC.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
            >
              <span className="text-gray-700">{item.name}</span>
              <div className="flex space-x-4">
                <span className="text-gray-600">{item.count}</span>
                <span className="text-gray-500 w-16">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Platelet</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Count</span>
            <span className="text-gray-600">222</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Percentage</span>
            <span className="text-gray-600">222</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;

