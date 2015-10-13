/**
 * Created by session1 on 10/7/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
    var data = google.visualization.arrayToDataTable([
        ['Crime', 'Counts'],
        ['Breaking and Entering, 2],
            ['Criminal Damaging/Endangerment, 2],
            ['Burglaries, 2],
            ['Assault, 1],
            ['Theft, 11],
            ]);

    var options = {
        title: 'Crime Reports in Cincinnati',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Crime Report',
            minValue: 0
        },
        vAxis: {
            title: 'crime'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}