$(function() {

    $.getJSON('https://raw.githubusercontent.com/rene-mackenzie/testingHighmapsGeoJSON/master/json/states/NC/charlotte-gastonia-concord.json', function(geojson) {

        // Initiate the chart
        Highcharts.mapChart('container', {

            title: {
                text: 'NC By Zip Code'
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            series: [{
                data: [
                    ['28012', 1],
                    ['28016', 1],
                    ['28027', 1],
                    ['28036', 1],
                    ['28052', 1],
                    ['28078', 1],
                    ['28110', 1],
                    ['28262', 1],
                    ['28207', 1],
                    ['28056', 1],
                    ['28081', 1],
                    ['28091', 1],
                    ['28104', 1],
                    ['28124', 1],
                    ['28173', 1],
                    ['29704', 1]
                ],
                mapData: geojson,
                joinBy: ['ZIP', 0],
                keys: ['ZIP', 'value'],
                name: 'Zip Code NC',
                allowPointSelect: true,
                states: {
                    hover: {
                        color: '#a4edba'
                    },
                    select: {
                        color: 'red',
                        borderColor: 'black',
                        dashStyle: 'dot'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.properties.postal}'
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.properties.ZIP}'
                }
            }]
        });
    });
});
