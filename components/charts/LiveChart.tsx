"use client";

import { XYChart, LineSeries, Tooltip, Axis } from "@visx/xychart";
import { useTheme } from "next-themes";

type DataPoint = { x: number; y: number };

export default function LiveChart({
  data,
  width = 200,
  height = 300,
}: {
  data: DataPoint[];
  width?: number;
  height?: number;
}) {
  const theme = useTheme();
  console.log({theme})
  if (!theme.resolvedTheme) return null;
  const axisColor = "#000000";
  const gridColor = "#ffffff"
  const lineColor = "#0d8ffa";
  const tooltipBg = "#ffffff"
  const tooltipText = "#000000"

  return (
    <XYChart
      width={width}
      height={height}
      xScale={{ type: "time" }}
      yScale={{ type: "linear" }}
      margin={{ top: 20, bottom: 40, left: 30, right: 10 }}
    >
      <Axis
        orientation="bottom"
        tickStroke={axisColor}
        stroke={axisColor}
        tickLabelProps={{ fill: axisColor, fontSize: 12 }}
      />
      <Axis
        orientation="left"
        tickStroke={axisColor}
        stroke={axisColor}
        tickLabelProps={{ fill: axisColor, fontSize: 12 }}
      />
      <LineSeries
        dataKey="Live"
        data={data}
        xAccessor={(d) => d.x}
        yAccessor={(d) => d.y}
        stroke={lineColor}
      />
      <Tooltip
        showVerticalCrosshair
        snapTooltipToDatumX
        snapTooltipToDatumY
        renderTooltip={({ tooltipData }) => {
          const point = tooltipData?.nearestDatum?.datum as DataPoint | undefined;
          if (!point) return null;
          return (
            <div
              style={{
                background: tooltipBg,
                color: tooltipText,
                padding: "4px 8px",
                borderRadius: 6,
                fontSize: 12,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}
            >
              <strong>{new Date(point.x).toLocaleTimeString()}</strong>
              <br />
              y: {point.y.toFixed(2)}
            </div>
          );
        }}
      />
    </XYChart>
  );
}
