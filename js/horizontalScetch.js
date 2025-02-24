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
        axisLineColour: "#F2E9E4",

        //bars
        barWidth: 15,
        barColor: "#C9ADA7",


        //titles
        titleText: "X title",
        xTitleOffset: 125,
        xTitleOffset: 30,

        //ticks
        tickDecimal: 2,
        titleColor: "#FF0000",
        tickColor: "#4287f5",
        tickPadding: 10,
        tickStrokeWeight: 1,
        tickStrokeLength: 2,
        tickTextColor: "#ffffff",
        tickTextSize: 7,
        numTicks: 5,

        //labeling things
        labelPadding: 100,
        labelRotation: 360,
        labelTextSize: 12,
        labelColor: "#FF0000",

    }


    HorizontalbarCharts.push(new HorizontalbarChart(HorizontalbarChart01))


}

function draw() {
    background(0)

    for (let i = 0; i < HorizontalbarCharts.length; i++) {
        HorizontalbarCharts[i].render();
    }
}







