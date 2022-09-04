export const getChartData = (chartColor: string) => ({
  labels: [""],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: () => chartColor,
      strokeWidth: 2,
    },
  ],
});
