let x = [590,540,740,130,810,300,320,230,470,620,770,250],
    y = [32,36,39,52,61,72,77,75,68,57,48,48],

    x1 = [590,540,740,130,810,300,320,230,470,620,770,250],
    y1 = [28,39,41,35,72,82,68,66,45,59,38,28];

x.unshift('x');
y.unshift('y');
y1.unshift('y1');

$(document).ready(() => {
    let option = $("#interpolation option:selected").val();
    generateChart(option);
});

$("#interpolation").change(() => {
    let option = $("#interpolation option:selected").val();
    generateChart(option);
});

function generateChart(selectedType) {
    let chart = c3.generate({
        data: {
            x: 'x',
            columns: [x, y, y1],
            type: selectedType,
        },
        axis: {
            x: {
                tick: {
                    culling: false
                },
                label: {
                    text: 'X-axis',
                    position: 'outer-right'
                }
            },
            y: {
                label: {
                    text: 'Y-axis',
                    position: 'outer-top'
                }
            }
        },
        tooltip: {
            format: {
                title: x => {return 'x: ' + x;}
            }
        },
        zoom: {
            enabled: true
        },
        bindto: '#chart'
    });
};
