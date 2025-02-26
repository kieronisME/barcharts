let Barcharts = [];
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



    //Ben the barchart FINNISHED
    Barchart01 = {

        //positions
        x: 900,
        y: 650,

        Width: 250,
        Hight: 250,
        margin: 0,

        //data
        data: cleanedData,
        xVal: "Age_Group",
        yVal: "Total",

        //data colors
        ValColor: "#FAF9F6",
        ValStrokeColor: "#000000",
        ValStrokeWieght: 1,

        //lines
        axisLineThickness: 1,

        //line colors
        axisLineColour: "#000000",

        //bars
        barWidth: 15,

        //bar colors
        barStrokeColor: "#000000",
        barColor: "#C4E7D4",

        //titles
        xTitleOffset: -30,
        yTitleOffset: 20,

        //title colors
        titleColor: "#FF0000",

        //ticks
        tickDecimal: 2,
        tickPadding: 10,
        tickYTextPadding: 100,
        tickXTextPadding: -100,
        tickStrokeWeight: 1,
        tickStrokeLength: 2,
        tickTextSize: 7,
        numTicks: 5,
        
        //tick colors
        tickTextColor: "#C4E7D4",
        tickColor: "#000000",
        tickStrokeColor: "#C4E7D4",

        //labeling things
        labelPadding: 11,
        labelRotation: 60,
        labelTextSize: 12,
        labbleTileX: 250,

        //label colors
        labelStrokeColor: "#00000",
        labelColor: "#000000",

        //text
        textSize: 12, 

    }

    Barcharts.push(new BarChart(Barchart01))



}

function draw() {
    background('#FAF9F6')

    for (let i = 0; i < Barcharts.length; i++) {
        Barcharts[i].render();
    }

}







