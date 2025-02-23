class Stacked {
    constructor(obj) {
        //PROPERTIES//

        //postion 
        this.x = obj.x;
        this.y = obj.y;

        //data
        this.data = obj.data;
        this.yVal = obj.yVal;
        this.xVal = obj.xVal;
        this.yValTotal = obj.yValTotal;
        this.yValTotalXpadding = obj.yValTotalXpadding;
        this.yValTotalYpadding = obj.yValTotalYpadding;


        this.Hight = obj.Hight;
        this.Width = obj.Width;

        //bars
        this.barHight = obj.barHight;
        this.barWidth = obj.barWidth;
        this.margin = obj.margin;
        this.axisLineThickness = obj.axisLineThickness;

        //colors
        this.axisLineColor = obj.axisLineColor;
        this.barColour = obj.barColour;
        this.axisTextColour = obj.axisTextColour;
        this.barColours = obj.barColours || [
            "#FF5733", // orange
            "#33FF57", //  light green
        ];


        //logic
        let numberOfBars = this.data.length;
        let chartSideMargins = this.margin * 2;
        let numberOfMetrics = this.yVal.length;
        let maxVals = [];


        // thins grabs all yVal and stores them inside of maValues array. 
        this.yVal.forEach((value) => {
            maxVals.push(this.data.map((row) => row[value]));
        });

        let maxVal = max(maxVals.flat(5));
        console.log(maxVals);
        this.scaler = this.Hight / maxVal;
        this.gap = (this.Width - (numberOfBars * this.barWidth * numberOfMetrics) - chartSideMargins) / (numberOfBars - 1);
        console.log(this.data)

        // i need to find a way to do into data and then go through every object in the array of data and grabbing the total and then
        // storing that in a veriable called gimmeThatDataNigga



        let totalVal = this.data.map((row) => row.Total);
        console.log(totalVal);


    }


    render() {


        //DONT FORGET TO add the render sperations here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        push()
        translate(this.x, this.y);
        noFill();
        stroke(this.axisLineColor);
        strokeWeight(this.axisLineThickness);
        line(0, 0, 0, -this.Hight);
        line(0, 0, this.Width, 0);

        this.axisLineColor = color(100);
        this.axisTextColour = color(125);

        push();




        translate(this.margin, 0);

        //this is a stcaked bar chart so the aim is to stack female and male scores ontop of eachother 
        //this loop is genus. so there is an outer and inner loop. keep in mind if the outer loop runs once the inner loop will run until its done.

        //                                                                   FIRST ITTERATION OF OUTER LOOP
        // all the outer loop does is set the postion of the bars and sets barHightstart to 0. this will make sense in a seconed 


        //                                                                               INNER LOOP
        // the puprose of the inner loop is to figure out what point should computer START drawing the bottom bar,STOP drawing the bottom bar, START drawing the top bar and STOP drawing the top bar
        // this is all worked out in barHightend. 

        //                                                                    FIRST ITTERATION OF INNER LOOP
        // this line this.data[outerLoopCount][this.yVal[InnerLoopCount]] is where tha magic happens.  first the computer looks into the array of objects iunside of data. 

        //                                                                   this.data[outerLoopCount]
        //                                                                data looks something like this:
        //                                                       (0)age group: 0-5, "female" = 2,  "male" = 3, etc..
        //                                                       (1)age group: 6-9, "female" = 6,  "male" = 2, etc..
        //                                                       (2)age group: 10-15, "female" = 3,  "male" = 4, etc..

        // keep in mind that yVal is an array that holds teh strings ["Female","Male"]
        // now the computer uses bracket notaion in the section of this line to grab female or male from yval using InnerLoopCount as an index  [this.yVal[InnerLoopCount]]
        // so to put it simply this line this.data[outerLoopCount][this.yVal[InnerLoopCount]] is the same as writing this.data.[0].female but we dont do this beacuse its dont dynamic.
        // after that its mulitplied by scaler. the computer now has the value of female we want the BOTOM bar to go up to/ end at hence the name barHightend

        // so now the computer can draw our rectangle using barHightstart as the Y starting point then barWith as the X end and barHightend as the Y end.
        //the computer has drawn the bar the repersents Female now we need to draw the bar the repersents Male on the second itteration but before we do that we must add whatever barHightend is to barHightstart.

        //                                                                    SECOND ITTERATION OF INNER LOOP
        //the second ittration happens the exact same as the first but the changes to the number stored inside of barHightstart is what puts it all together.
        // beacuse barHightend was added to barHightstart that means when we draw the rectangle for the TOP bar it now knows that it must start at the number in barHightend wich is now in barHightstart
        

        //                                                                    SECOND ITTERATION OF OUTER LOOP
        // and to make sure the next age group bars start at drawing at where y = 0 we set barHightstart back to 0  




        for (let outerLoopCount = 0; outerLoopCount < this.data.length; outerLoopCount++) {
            push();

            translate((this.gap + this.barWidth) * outerLoopCount, 0);

            let barHightstart = 0;

            for (let InnerLoopCount = 0; InnerLoopCount < this.yVal.length; InnerLoopCount++) {
                noStroke();


                fill(this.barColours[InnerLoopCount % this.barColours.length]);


                let barHightend = this.data[outerLoopCount][this.yVal[InnerLoopCount]] * this.scaler;

                rect(0, -barHightstart, this.barWidth, -barHightend);

                barHightstart += barHightend;


            }

            fill(this.axisTextColour);
            noStroke();
            textAlign(LEFT, CENTER);
            textSize(12);

            push();
            translate(this.barWidth, 10);
            rotate(90);
            text(this.data[outerLoopCount][this.xVal], 0, 0); 
            pop();

            pop();
        }

        console.log(this.barWidth)
        push();
        textSize(30)
        translate(this.Width / 2, 10);
        rotate(360);

        text(this.yValTotal, this.yValTotalXpadding, this.yValTotalYpadding);
        pop();


        pop();
        pop();

    }



}
