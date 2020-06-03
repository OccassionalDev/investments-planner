class Diagram {
    getChart(userData) {
        let investmentDoughnutChart = new Chart(document.getElementById("portfolio-chart"), {
            type: 'doughnut',
            data: {
                datasets: userData.industry_shares,
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

        return investmentDoughnutChart
    }
}