class Diagram {
    constructor(userData) {
        this.currentChart = new Chart(document.getElementById("portfolio-chart").getContext("2d"), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: userData.industry_shares,
                    backgroundColor: [
                        "rgb(254, 95, 85)", 
                        "rgb(238, 184, 104)",
                        "rgb(73, 220, 177)",
                        "rgb(73, 190, 170)",
                        "rgb(69, 105, 144)",
                        "rgb(110, 249, 245)",
                        "rgb(170, 252, 184)",
                        "rgb(215, 255, 241)"
                    ]
                }],

                labels: userData.industries
            },
            options: {
                title: {
                    display: true,
                    text: 'Your Portfolio'
                },

                legend: {
                    position: 'right'
                }
            }
        })
    }

    updateChart(newData) {
        this.currentChart.data.datasets.data = newData.industry_shares
        this.currentChart.data.labels = newData.industries
        this.currentChart.update()
    }
}