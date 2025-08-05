import { Component } from "react";
import ReactApexChart from "react-apexcharts";

export class AnalyticChart extends Component {
  constructor(props) {
    super(props);

    const traffic = props.trafficData || [];
    const enquiries = props.enquiryData || [];

    const allDays = Array.from(
      new Set([
        ...traffic.map((item) => item.day),
        ...enquiries.map((item) => item.day),
      ])
    ).sort((a, b) => parseInt(a) - parseInt(b));

    const trafficMap = traffic.reduce((map, { day, clicks }) => {
      map[day] = clicks;
      return map;
    }, {});

    const enquiryMap = enquiries.reduce((map, { day, enquiries }) => {
      map[day] = enquiries;
      return map;
    }, {});

    const trafficData = allDays.map((day) => trafficMap[day] || 0);
    const enquiryData = allDays.map((day) => enquiryMap[day] || 0);

    this.state = {
      series: [
        {
          name: "Traffic",
          data: trafficData,
        },
        {
          name: "Enquiries",
          data: enquiryData,
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 320,
          toolbar: { show: false },
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        dataLabels: { enabled: true },
        xaxis: {
          categories: allDays, //
        },
        grid: {
          borderColor: "#f1f1f1",
          strokeDashArray: 3,
        },
        colors: ["#1d4b99", "#ff5733"],
        legend: { show: true, position: "top" },
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
