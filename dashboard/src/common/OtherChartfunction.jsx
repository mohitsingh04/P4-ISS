import { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { label } from "yet-another-react-lightbox";

//Dashboard

export class Totaltransactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Total Orders",
          type: "line",
          data: [0, 45, 30, 75, 15, 94, 40, 115, 30, 105, 65, 110],
        },
        {
          name: "Total Sales",
          type: "line",
          data: [0, 60, 20, 130, 75, 130, 75, 140, 64, 130, 85, 120],
        },
        {
          name: "",
          type: "area",
          data: [0, 105, 70, 175, 85, 154, 90, 185, 120, 145, 185, 130],
        },
      ],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
          toolbar: {
            show: false,
          },
          type: "line",
          height: 320,
          dropShadow: {
            enabled: true,
            opacity: 0.1,
          },
        },
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: [3, 3, 0],
          dashArray: [0, 4],
          lineCap: "round",
        },
        legend: {
          show: true,
          position: "top",
        },
        xaxis: {
          axisBorder: {
            color: "#e9e9e9",
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "20%",
            borderRadius: 2,
          },
        },
        grid: {
          borderColor: "#f1f1f1",
          strokeDashArray: 3,
          show: true,
          padding: {
            right: 0,
            left: 0,
          },
        },

        colors: [
          "var(--primary-color)",
          "rgba(249, 148, 51, 1)",
          "rgba(119, 119, 142, 0.05)",
        ],
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        className="overflow-hidden"
        options={this.state.options}
        series={this.state.series}
        type="line"
        height={320}
      />
    );
  }
}

export class RecentOrders extends Component {
  constructor(props) {
    super(props);
    const { label = "SEO", percentage = 0 } = this.props;

    this.state = {
      series: [percentage],
      labels: [label],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
          height: 305,
          type: "radialBar",
          responsive: "true",
          offsetX: 0,
          offsetY: 10,
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            size: 120,
            imageWidth: 50,
            imageHeight: 50,
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
              },
              hollow: {
                size: "60%",
              },
              value: {
                offsetY: -10,
                fontSize: "22px",
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
          },
        },
        colors: ["var(--bs-danger)"],
        labels: [label],
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

//Widgets

export class WeekOrder1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70],
      labels: [""],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
          height: 148,
          type: "radialBar",
        },
        colors: ["rgba(0,0,0, 0.2)"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "63%",
            },
          },
        },
        stroke: {
          lineCap: "round",
        },

        labels: ["orders"],
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        id="this-week-orders1"
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        height={148}
      />
    );
  }
}

export class WeekOrder2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [17],
      labels: [""],
      options: {
        chart: {
          height: 148,
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
          type: "radialBar",
        },
        colors: ["rgba(0,0,0, 0.2)"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "63%",
            },
          },
        },
        stroke: {
          lineCap: "round",
        },

        labels: ["Views"],
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        id="this-week-orders2"
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        height={148}
      />
    );
  }
}

export class WeekOrder3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [42],
      labels: [""],
      options: {
        chart: {
          height: 148,
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
          type: "radialBar",
        },
        colors: ["rgba(0,0,0, 0.2)"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "63%",
            },
          },
        },
        stroke: {
          lineCap: "round",
        },

        labels: ["Earnings"],
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        id="this-week-orders3"
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        height={148}
      />
    );
  }
}

export class WeekOrder4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [17],
      labels: [""],
      options: {
        series: [37],
        chart: {
          height: 148,
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
          type: "radialBar",
        },
        colors: ["rgba(0,0,0, 0.2)"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "63%",
            },
          },
        },
        stroke: {
          lineCap: "round",
        },

        labels: ["Comments"],
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        id="this-week-orders4"
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        height={148}
      />
    );
  }
}
