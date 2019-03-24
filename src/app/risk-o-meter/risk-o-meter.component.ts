import { Component, OnInit } from '@angular/core';
import { Chart, StockChart, } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { logs } from './../logs.js';

// let theme = {
//     colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
//         '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
//     chart: {
//         backgroundColor: {
//             linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
//             stops: [
//                 [0, '#2a2a2b'],
//                 [1, '#3e3e40']
//             ]
//         },
//         style: {
//             fontFamily: '\'Unica One\', sans-serif'
//         },
//         plotBorderColor: '#606063'
//     },
//     title: {
//         style: {
//             color: '#E0E0E3',
//             textTransform: 'uppercase',
//             fontSize: '20px'
//         }
//     },
//     subtitle: {
//         style: {
//             color: '#E0E0E3',
//             textTransform: 'uppercase'
//         }
//     },
//     xAxis: {
//         gridLineColor: '#707073',
//         labels: {
//             style: {
//                 color: '#E0E0E3'
//             }
//         },
//         lineColor: '#707073',
//         minorGridLineColor: '#505053',
//         tickColor: '#707073',
//         title: {
//             style: {
//                 color: '#A0A0A3'

//             }
//         }
//     },
//     yAxis: {
//         gridLineColor: '#707073',
//         labels: {
//             style: {
//                 color: '#E0E0E3'
//             }
//         },
//         lineColor: '#707073',
//         minorGridLineColor: '#505053',
//         tickColor: '#707073',
//         tickWidth: 1,
//         title: {
//             style: {
//                 color: '#A0A0A3'
//             }
//         }
//     },
//     tooltip: {
//         backgroundColor: 'rgba(0, 0, 0, 0.85)',
//         style: {
//             color: '#F0F0F0'
//         }
//     },
//     plotOptions: {
//         series: {
//             dataLabels: {
//                 color: '#B0B0B3'
//             },
//             marker: {
//                 lineColor: '#333'
//             }
//         },
//         boxplot: {
//             fillColor: '#505053'
//         },
//         candlestick: {
//             lineColor: 'white'
//         },
//         errorbar: {
//             color: 'white'
//         }
//     },
//     legend: {
//         itemStyle: {
//             color: '#E0E0E3'
//         },
//         itemHoverStyle: {
//             color: '#FFF'
//         },
//         itemHiddenStyle: {
//             color: '#606063'
//         }
//     },
//     credits: {
//         style: {
//             color: '#666'
//         }
//     },
//     labels: {
//         style: {
//             color: '#707073'
//         }
//     },

//     drilldown: {
//         activeAxisLabelStyle: {
//             color: '#F0F0F3'
//         },
//         activeDataLabelStyle: {
//             color: '#F0F0F3'
//         }
//     },

//     navigation: {
//         buttonOptions: {
//             symbolStroke: '#DDDDDD',
//             theme: {
//                 fill: '#505053'
//             }
//         }
//     },

//     // scroll charts
//     rangeSelector: {
//         buttonTheme: {
//             fill: '#505053',
//             stroke: '#000000',
//             style: {
//                 color: '#CCC'
//             },
//             states: {
//                 hover: {
//                     fill: '#707073',
//                     stroke: '#000000',
//                     style: {
//                         color: 'white'
//                     }
//                 },
//                 select: {
//                     fill: '#000003',
//                     stroke: '#000000',
//                     style: {
//                         color: 'white'
//                     }
//                 }
//             }
//         },
//         inputBoxBorderColor: '#505053',
//         inputStyle: {
//             backgroundColor: '#333',
//             color: 'silver'
//         },
//         labelStyle: {
//             color: 'silver'
//         }
//     },

//     navigator: {
//         handles: {
//             backgroundColor: '#666',
//             borderColor: '#AAA'
//         },
//         outlineColor: '#CCC',
//         maskFill: 'rgba(255,255,255,0.1)',
//         series: {
//             color: '#7798BF',
//             lineColor: '#A6C7ED'
//         },
//         xAxis: {
//             gridLineColor: '#505053'
//         }
//     },

//     scrollbar: {
//         barBackgroundColor: '#808083',
//         barBorderColor: '#808083',
//         buttonArrowColor: '#CCC',
//         buttonBackgroundColor: '#606063',
//         buttonBorderColor: '#606063',
//         rifleColor: '#FFF',
//         trackBackgroundColor: '#404043',
//         trackBorderColor: '#404043'
//     },

//     // special colors for some of the
//     legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
//     background2: '#505053',
//     dataLabelsColor: '#B0B0B3',
//     textColor: '#C0C0C0',
//     contrastTextColor: '#F0F0F3',
//     maskColor: 'rgba(255,255,255,0.3)'
// };

let theme = {
    contrastTextColor: '#000',
    colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: 'Dosis, sans-serif'
        }
    },
    title: {
        style: {
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }
    },
    tooltip: {
        borderWidth: 0,
        backgroundColor: 'rgba(219,219,216,0.8)',
        shadow: false
    },
    legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px'
        }
    },
    xAxis: {
        gridLineWidth: 1,
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    yAxis: {
        minorTickInterval: 'auto',
        title: {
            style: {
                textTransform: 'uppercase'
            }
        },
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    plotOptions: {
        candlestick: {
            lineColor: '#404048'
        }
    },


    // General
    background2: '#F0F0EA'

};



@Component({
    selector: 'risk-o-meter',
    templateUrl: './risk-o-meter.component.html',
    styleUrls: ['./risk-o-meter.component.scss']
})
export class RiskOMeterComponent implements OnInit {

    public timeout;
    public logs = logs;
    public gear = 0;
    public interval;
    public i =0;
    public running = false;

    constructor() {
    }

    ngOnInit() {
    }


    start() {
        //if(this.i)
        console.log("start i -> "+ this.i);
        this.running = true;
        this.interval = setInterval(() => {
            console.log('lopp-> ' + this.logs[this.i].VehicleSpeed);
            this.i++;
            this.chartSpeed.removePoint(0);
            this.chartSpeed.addPoint(this.logs[this.i].VehicleSpeed, 0);
            this.chartRpm.removePoint(0);
            this.chartRpm.addPoint((this.logs[this.i].TransmissionSpeedG182 / 1000), 0)
            this.engineRpm.removePoint(0);
            this.engineRpm.addPoint((this.logs[this.i].EngineSpeed / 1000), 0)
            this.gear = this.logs[this.i].EngagedGear

            if (this.i === logs.length) clearInterval(this.interval);

        }, 500);
    }

    stop(){
        console.log(" i -> "+this.i);
        this.running = false;
        
        clearInterval(this.interval)
    }


    public chartSpeed = new Chart(<any>{

        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (theme && theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,
            title: {
                text: 'Szybkosc',
                y: -70
            },
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Szybkosc',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((theme && theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                    '<span style="font-size:12px;color:silver">km/h</span></div>'
            },
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]

    });

    public chartRpm = new Chart(<any>{
        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (theme && theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 7,
            title: {
                text: 'RPM skrzynia'
            },
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },

        credits: {
            enabled: false
        },
        series: [{
            name: 'RPM',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((theme && theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                    '<span style="font-size:12px;color:silver">* 1000 / min</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    });

    public engineRpm = new Chart(<any>{
        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (theme && theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 7,
            title: {
                text: 'RPM'
            },
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },

        credits: {
            enabled: false
        },
        series: [{
            name: 'RPM',
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((theme && theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                    '<span style="font-size:12px;color:silver">* 1000 / min</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    });

    public riskometer = new Chart(<any>{
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: 'Speedometer'
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]
    })


}
