$(function() {
    // Instanciate the map
    Highcharts.mapChart('container', {
        chart: {
            borderWidth: 1
        },

        title: {
            text: 'US states'
        },
        subtitle: {
            text: 'Demo of drawing all areas in the map, only highlighting partial data'
        },

        legend: {
            enabled: false
        },
        series: [{
            name: 'id',
            mapData: Highcharts.maps['countries/us/us-all'],
            data: [
                ['us-ma', 1],
                ['us-ca', 1],
                ['us-mo', 1],
                ['us-ny', 1],
                ['us-mi', 1],
                ['us-fl', 1],
                ['us-tx', 1],
                ['us-al', 1],
                ['us-id', 1]
                
            ],
            allowPointSelect: true,
            cursor: 'pointer',
            states: {
                hover: {
                    color: '#a4edba'
                },
                select: {
                    color: '#EFFFEF',
                    borderColor: 'black',
                    dashStyle: 'dot'
                }
            },
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                formatter: function() {
                    if (this.point.value) {
                        return this.point.name;
                    }
                }
            },
            select: {
                color: '#EFFFEF',
                borderColor: 'black',
                dashStyle: 'dot'
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}'
            }
        }]
    });

});
