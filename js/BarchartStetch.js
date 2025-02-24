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



    //Ben the barchart 
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

        //lines
        axisLineThickness: 0.5,
        axisLineColour: "#F2E9E4",

        //bars
        barWidth: 15,
        barColor: "#C9ADA7",


        //titles
        titleText: "Really cool title",
        xTitleOffset: -30,
        yTitleOffset: 20,

        //ticks
        tickDecimal: 2,
        titleColor: "#FF0000",
        tickColor: "#4287f5",
        tickPadding: 10,
        tickYTextPadding: 100,
        tickXTextPadding: -100,
        tickStrokeWeight: 1,
        tickStrokeLength: 2,
        tickTextColor: "#ffffff",
        tickTextSize: 7,
        numTicks: 5,

        //labeling things
        labelPadding: 11,
        labelRotation: 60,
        labelTextSize: 12,
        labbleTileX: 250,
        labelColor: "#FF0000",

    }

    Barcharts.push(new BarChart(Barchart01))



}

function draw() {
    background(0)

    for (let i = 0; i < Barcharts.length; i++) {
        Barcharts[i].render();
    }

}







