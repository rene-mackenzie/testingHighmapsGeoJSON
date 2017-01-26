$(function() {

    // Prepare random data
    var data = [
        ['78040', 1],
        ['78043', 1]
    ];

    $.getJSON('https://raw.githubusercontent.com/rene-mackenzie/testingHighmapsGeoJSON/master/json/states/texas/texas.json', function(geojson) {

        // Initiate the chart
        Highcharts.mapChart('container', {

            title: {
                text: 'Texas by Zip Code'
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            colorAxis: {
                tickPixelInterval: 100
            },

            series: [{
                data: data,
                mapData: geojson,
                joinBy: ['id', 0],
                keys: ['id', 'value'],
                name: 'Random data',
                states: {
                    hover: {
                        color: '#a4edba'
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
