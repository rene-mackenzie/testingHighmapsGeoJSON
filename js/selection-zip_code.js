$(function() {

    $.getJSON('https://raw.githubusercontent.com/rene-mackenzie/testingHighmapsGeoJSON/master/json/laredo.json', function(geojson) {

        // Initiate the chart
        Highcharts.mapChart('container', {

            title: {
                text: 'Laredo By Zip Code'
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            series: [{
                data: [
                    ['78040', 1],
                    ['78046', 1],
                    ['78041', 1],
                    ['78043', 1],
                    ['78045', 1],
                    ['78344', 1],
                    ['78369', 1]
                ],
                mapData: geojson,
                joinBy: ['ZIP', 0],
                keys: ['ZIP', 'value'],
                name: 'Random data',
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
                }
            }]
        });
    });
});
