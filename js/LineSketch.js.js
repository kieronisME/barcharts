let Abbreviations = {};
let linegraphs = [];
let data;


function preload() {
    data = loadTable('world-data-2023.csv', 'csv', 'header')
}

function setup() {
    createCanvas(4000, 4000)
    angleMode(DEGREES)


    for (let i = 0; i < data.getRowCount(); i++) {
        let abbreviation = data.rows[i].obj.Abbreviation;
        let birthRate = data.rows[i].obj.Birth_Rate;
        Abbreviations[abbreviation] = birthRate;
    }




    //bubble chart soon
    let line01 = {

       
      //postion 
        x: 900,
        y: 650,

        Hight: 300,   // Y
        Width: 310,  // X



        //data
        data: cleanedData,
        yVal: ["Female","Male"],
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

    };



    linegraphs.push(new LineGraph(line01))


}

function draw() {
    background(0)

    for (let i = 0; i < linegraphs.length; i++) {
        linegraphs[i].render();
    }
}









