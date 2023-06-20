import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2d from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// React fusion chart
ReactFC.fcRoot(FusionCharts,Column2d,FusionTheme);

// Chart temporary dataset
const chartData = [
    {
      label: "Venezuela",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
    },
    {
      label: "UAE",
      value: "100"
    },
    {
      label: "US",
      value: "30"
    },
    {
      label: "China",
      value: "30"
    }
];
// Configs for chart
const chartConfigs = {
    type: "column2d",
    width: "800",
    height: "500",
    dataFormat: "json",
    dataSource: {
        // Chart details
        chart: {
            caption: "Countries with most oil reserve",
            subCaption: "im mmbb1 = one million barels",
            xAxisName: "country",
            yAxisName: "reserves(mmbb1)",
            numberSuffix: "K",
            theme: "fusion"
        },
        // assigning temporary dataset
        data: chartData
    }
};

// Render chart with temporary dataset
function Chart() {
  return (
    <ReactFC {...chartConfigs} />
  );
};

export default Chart;