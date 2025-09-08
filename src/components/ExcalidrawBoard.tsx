import React from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

type InitialData = {
  elements?: any[];
  appState?: Record<string, any>;
  files?: Record<string, any>;
};

export default function ExcalidrawBoard({
  initialData,
  height = 600,
}: {
  initialData?: InitialData;
  height?: number;
}) {
  return (
    <div style={{ height, border: "1px solid #333", borderRadius: 12, overflow: "hidden" }}>
      <Excalidraw initialData={initialData} />
    </div>
  );
}
