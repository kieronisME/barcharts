let HorizontalbarCharts = [];
let cleanedData = [];
let data;





function preload() {
    data = loadTable('Combined.csv', 'csv', 'header')
}

function setup() {
    createCanvas(4000, 4000)
    angleMode(DEGREES)


    for (let i = 0; i < data.getRowCount(); i++) {
        cleanedData.push(data.rows[i].obj)
    };


    //Horizontal BarChart FINNISHED
    HorizontalbarChart01 = {
        //PROPERTIES//
        
        //positions
        x: 900,
        y: 650,


        Width: 250,
        Hight: 250,
        margin: 0,

        //data
        data: cleanedData,
        xVal: "Total",
        yVal: "Age_Group",

        //data colors
        ValColor: "#FAF9F6",
        ValStrokeColor: "#000000",
        ValStrokeWieght: 1,


        // - xVal
        move_Xval_xAxis: 125,
        move_Xval_yAxis: 60,
        yValColor: "#4287f5",
        // - xVal
        move_Yval_xAxis: -200,
        move_Yval_yAxis: -120,
        yValColor: "#4287f5",

        //lines
        axisLineThickness: 0.5,

        //line colors
        axisLineColour: "#000000",

        //bars
        barWidth: 15,

        //bar colors
        barStrokeColor: "#000000",
        barColor: "#C4E7D4",

        //titles
        titleText: "X title",
        xTitleOffset: 125,
        xTitleOffset: 30,

        //ticks
        tickDecimal: 2,

        tickPadding: 10,
        tickStrokeWeight: 1,
        tickStrokeLength: 2,
        tickTextSize: 7,
        numTicks: 5,

        //tick colors
        tickTextColor: "#C4E7D4",
        tickColor: "#000000",
        tickStrokeColor: "#C4E7D4",


        //labeling things
        labelPadding: 100,
        labelRotation: 360,
        labelTextSize: 12,


        //label colors
        labelStrokeColor: "#00000",
        labelColor: "#000000",

        //text
        textSize: 12,


    }


    HorizontalbarCharts.push(new HorizontalbarChart(HorizontalbarChart01))


}

function draw() {
    background('#FAF9F6')

    for (let i = 0; i < HorizontalbarCharts.length; i++) {
        HorizontalbarCharts[i].render();
    }
}







