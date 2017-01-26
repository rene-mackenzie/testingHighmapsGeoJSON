$(function() {

    // Prepare random data
    var data = [
        ['27006', 1],
        ['27014', 1],
        ['27022', 1]
        ['27030', 1],
        ['27040', 1],
        ['27050', 1],
        ['27102', 1]
    ];

    $.getJSON('https://raw.githubusercontent.com/rene-mackenzie/testingHighmapsGeoJSON/master/json/states/NC/north_carolina.json', function(geojson) {

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
                data: data,
                mapData: geojson,
                joinBy: ['id', 0],
                keys: ['id', 'value'],
                name: 'North Carolina',
                allowPointSelect: true,
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
                    format: '{point.properties.postal}'
                }
            }]
        });
    });
});
