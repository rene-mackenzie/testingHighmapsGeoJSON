$(function() {
  // Instanciate the map
  Highcharts.mapChart('container', {
    chart: {
      borderWidth: 1
    },

    title: {
      text: 'North Carolina'
    },
    subtitle: {
      text: 'Demo of drawing all areas in the map, only highlighting partial data'
    },

    legend: {
      enabled: false
    },
    series: [{
      name: 'id',
      mapData: Highcharts.maps['countries/us/us-nc-all'],
      data: [
        ['us-nc-095', 1],
        ['us-nc-129', 1],
        ['us-nc-077', 1],
        ['us-nc-101', 1],
        ['us-nc-011', 1],
        ['us-nc-175', 1],
        ['us-nc-079', 1],
        ['us-nc-013', 1],
        ['us-nc-157', 1],
        ['us-nc-037', 1],
        ['us-nc-063', 1],
        ['us-nc-117', 1],
        ['us-nc-145', 1],
        ['us-nc-139', 1],
        ['us-nc-113', 1],
        ['us-nc-089', 1],
        ['us-nc-051', 1]

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
        pointFormat: '{point.name}',
        useHTML: true,
        style: {
          fontSize: '3pt'
        }
      }
    }]
  });

});
