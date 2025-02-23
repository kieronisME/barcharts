let Barcharts = [];
let stackedcharts = []
let HorizontalbarCharts = [];
let OneHunderdcharts = [];
let cleanedData = [];
let bubbleCharts = [];
let data;





function preload() {
    data = loadTable('Combined.csv', 'csv', 'header')
}

function setup() {
    createCanvas(3000, 3000)
    angleMode(DEGREES)


    for (let i = 0; i < data.getRowCount(); i++) {
        cleanedData.push(data.rows[i].obj)
    };



    //Ben the barchart 
    Barchart01 = {

        //positions
        x: 500,
        y: 350,


        //does this.width not change the width iof the bars
        Width: 250,
        Hight: 250,
        margin: 0,

        //data
        //i dontundertsand how its knows that xVal and ytitle are trying to use that string to display things 
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


    //Horizontal BarChart FINNISHED
    HorizontalbarChart01 = {

        //positions
        x: 1200,
        y: 350,


        //does this.width not change the width iof the bars
        Width: 250,
        Hight: 250,
        margin: 0,

        //data
        //i dontundertsand how its knows that xVal and ytitle are trying to use that string to display things 
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



    // STACKED BAR CHART
    stackedBarchart = {

        //postion 
        x: 500,
        y: 1050,

        Hight: 300,
        Width: 600,



        //data
        data: cleanedData,
        yVal: ["Male", "Female"],
        xVal: "Age_Group",
        yValTotal: "Total",
        yValTotalXpadding: 0,
        yValTotalYpadding: 100,



        //bars
        barWidth: 18,
        margin: 15,
        axisLineThickness: 2,

        //colors
        barColour: "#FF0000",
        axisLineColor: "FF0500",
        axisTextColour: "#ffffff",
        barColours: [
            "#FF5733", // orange
            "#33FF57", // light green
        ]

    }








    stackedcharts.push(new Stacked(stackedBarchart))
    Barcharts.push(new BarChart(Barchart01))
    HorizontalbarCharts.push(new HorizontalbarChart(HorizontalbarChart01))


}

function draw() {
    background(0)



    for (let i = 0; i < HorizontalbarCharts.length; i++) {
        HorizontalbarCharts[i].render();
    }

    for (let i = 0; i < Barcharts.length; i++) {
        Barcharts[i].render();
    }


    for (let i = 0; i < stackedcharts.length; i++) {
        stackedcharts[i].render();
    }

    for (let i = 0; i < OneHunderdcharts.length; i++) {
        OneHunderdcharts[i].render();
    }

}







