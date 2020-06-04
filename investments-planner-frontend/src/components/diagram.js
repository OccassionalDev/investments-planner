class Diagram {
    getChart(userData) {
        const ctx = document.getElementById("portfolio-chart")

        new Chart(ctx, {
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
}