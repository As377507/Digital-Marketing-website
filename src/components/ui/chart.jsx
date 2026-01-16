import * as React from "react";
import * as RechartsPrimitive from "recharts";

const THEMES = { light: "", dark: ".dark" };

const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within a ChartContainer");
  return context;
}

const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={`chart-container ${className || ""}`}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});

const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(([_, conf]) => conf.theme || conf.color);
  if (!colorConfig.length) return null;

  const styleHtml = Object.entries(THEMES)
    .map(([theme, prefix]) => `
      ${prefix} [data-chart=${id}] {
        ${colorConfig.map(([key, item]) => {
          const color = item.theme?.[theme] || item.color;
          return color ? `--color-${key}: ${color};` : "";
        }).join("")}
      }
    `).join("");

  return <style dangerouslySetInnerHTML={{ __html: styleHtml }} />;
};

const ChartTooltipContent = React.forwardRef(({ 
  active, payload, label, indicator = "dot", hideLabel = false, className 
}, ref) => {
  const { config } = useChart();
  if (!active || !payload?.length) return null;

  return (
    <div ref={ref} className={`chart-tooltip ${className || ""}`}>
      {!hideLabel && <div className="chart-tooltip-label">{label}</div>}
      <div className="chart-tooltip-grid">
        {payload.map((item, idx) => (
          <div key={idx} className="chart-tooltip-item">
            <div 
              className={`chart-tooltip-indicator ${indicator}`} 
              style={{ "--color-bg": item.color, "--color-border": item.color }} 
            />
            <span style={{ flex: 1 }}>{config[item.dataKey]?.label || item.name}</span>
            <span style={{ fontWeight: 600 }}>{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

const ChartLegendContent = React.forwardRef(({ payload, className }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div ref={ref} className={`chart-legend ${className || ""}`}>
      {payload.map((item, idx) => (
        <div key={idx} className="chart-legend-item">
          <div className="chart-legend-icon" style={{ backgroundColor: item.color }} />
          <span>{config[item.dataKey]?.label || item.value}</span>
        </div>
      ))}
    </div>
  );
});

export { 
  ChartContainer, 
  ChartTooltipContent, 
  ChartTooltip,
  ChartLegendContent,
  ChartLegend 
};