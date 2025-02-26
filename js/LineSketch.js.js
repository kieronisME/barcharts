let Abbreviations = {};
let CleanedData = [];
let linegraphs = [];

let data;


function preload() {
    data = loadTable('world-data-2023.csv', 'csv', 'header')
}

function setup() {
    createCanvas(4000, 4000)
    angleMode(DEGREES)

    //cleaning my data 
    for (let i = 0; i < 50; i++) {
        let abbreviation = data.rows[i].obj.Abbreviation;
        let birthRate = parseFloat(data.rows[i].obj.Birth_Rate);
        CleanedData.push({ Country_Abbreviation: abbreviation, Birthrate: birthRate });
    }

    //line chart FINNISHED
    let line01 = {

        //positions
        x: 900,
        y: 650,
        Width: 1050,
        Hight: 250,
        margin: 0,

        //data
        data: CleanedData,
        xVal: "Country_Abbreviation",
        yVal: "Birth rate",


        //data colors
        ValColor: "#FAF9F6",
        ValStrokeColor: "#000000",
        ValStrokeWieght: 1,

        //lines
        axisLineThickness: 0.5,
        axisLineColour: "#F2E9E4",
        YTextYAxisPadding: 70,
        XTextXAxisPadding: 200,


        //line colors
        axisLineColour: "#000000",

        //bars
        barWidth: 15,
        barColor: "#C9ADA7",


        //bar colors
        barStrokeColor: "#000000",
        barColor: "#45503B",


        //titles
        xTitleOffset: -30,
        yTitleOffset: 20,

        //ticks
        tickDecimal: 2,
        tickPadding: 10,

        //tick colors
        tickTextColor: "#C4E7D4",
        tickColor: "#000000",
        tickStrokeColor: "#C4E7D4",


        tickXTextPadding: 700,
        tickStrokeWeight: 0,
        tickStrokeLength: 2,
        tickTextColor: "#FFC0CB",
        tickTextSize: 7,
        numTicks: 5,

        //labeling things
        labelPadding: 11,
        labelRotation: 60,
        labelTextSize: 12,
        labbleTileX: 250,

        //label colors
        labelStrokeColor: "#00000",
        labelColor: "#000000",

        //text
        textSize: 30, 
        YtextSize: 15, 



    };


    linegraphs.push(new LineGraph(line01))
}

//draw out all my render functions 
function draw() {
    background('#FAF9F6')

    for (let i = 0; i < linegraphs.length; i++) {
        linegraphs[i].render();
    }
}









