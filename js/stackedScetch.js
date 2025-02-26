let stackedcharts = []
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


    // STACKED BAR CHART
    stackedBarchart = {

        //postion 
        x: 900,
        y: 650,

        Hight: 300,   // Y
        Width: 310,  // X



        //data
        data: cleanedData,
        yVal: ["Female", "Male"],
        xVal: "Age_Group",
        yValTotal: "you must BOUNCE ON IT",
        yValTotalXpadding: 0,
        yValTotalYpadding: 100,

        //line
        axisLineColour: "#000000",


        //bars
        barWidth: 18,
        margin: 15,
        axisLineThickness: 2,
        numTicks: 11,
        //colors
        barColour: "#FF0000",
        axisLineColor: "#000000",
        axisTextColour: "#ffffff",
        barColours: [
            "#C4E7D4", // orange
            "#B098A4", // light green
        ],

        //ticks
        tickDecimal: 0,


    }


    stackedcharts.push(new Stacked(stackedBarchart))

}

function draw() {
    background('#FAF9F6')

    for (let i = 0; i < stackedcharts.length; i++) {
        stackedcharts[i].render();
    }


}







