import { Component } from "react";
import ReactApexChart from "react-apexcharts";

export class RecentOrders extends Component {
  constructor(props) {
    super(props);

    const { name = "SEO", value = 0, maxValue = 1000 } = this.props;

    const percentage = (value / maxValue) * 100;

    this.state = {
      series: [percentage],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
          height: 305,
          type: "radialBar",
          offsetX: 0,
          offsetY: 10,
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            size: 120,
            track: {
              strokeWidth: "80%",
            },
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              bottom: 0,
              blur: 3,
              opacity: 0.5,
            },
            dataLabels: {
              name: {
                fontSize: "16px",
                color: undefined,
                offsetY: 30,
                formatter: function () {
                  return name;
                },
              },
              hollow: {
                size: "60%",
              },
              value: {
                offsetY: -10,
                fontSize: "20px",
                color: undefined,
                formatter: function () {
                  return value;
                },
              },
            },
          },
        },
        colors: ["var(--bs-danger)"],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            type: "horizontal",
            gradientToColors: ["rgb(0, 255, 0)"],
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          dashArray: 4,
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        className="apex-charts ht-150"
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        height={305}
      />
    );
  }
}
