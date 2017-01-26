$(function () {

    // Prepare random data
    var data = [
        ['78040', 1]
    ];

    $.getJSON('laredo.json', function (geojson) {

        // Initiate the chart
        Highcharts.mapChart('container', {

            title: {
                text: 'GeoJSON in Highmaps'
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
                joinBy: ['ZIP', 0],
                keys: ['ZIP', 'value'],
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