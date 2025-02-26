//scaler doesnt work like it should. the user has to manualy make tyhe hight be taller than the tallest bart that works but its shsould be automatic.
//maybe if i add somthinglike TotalHight+=barHightend it will and  use tha numeber instead of maxVals in my scaler it might work but thats for later

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

        //line
        this.axisLineThickness = obj.axisLineThickness;
        this.axisLineColour = obj.axisLineColour;

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
            //defulats to. user can pick whatever color they want
            "#FF5733", // orange
            "#33FF57", //  light green
        ];


        //ticks

        this.tickHightArr = [];
        this.numTicks = obj.numTicks;
        this.tickDecimal = obj.tickDecimal;












        //grab the highest total 
        let mrMaxNumber = max(this.data.map((x) => x.Total));
        // console.log(mrMaxNumber)

        //allows it so no matter what the highest number is it wont be higher than Hight
        this.scaler = this.Hight / mrMaxNumber;

        this.gap = (this.Hight - (this.data.length * this.barWidth)) / (this.data.length + 1);

        let TotalArray = [];




        this.yVal.forEach((total) => {
            TotalArray.push(this.data.map((row) => row[total]));
        });










    }


    render() {


        //DONT FORGET TO add the render sperations here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




        push()
        translate(this.x, this.y);
        noFill();
        stroke(this.axisLineColor);

        line(0, 0, 0, -this.Hight);
        line(0, 0, this.Width, 0);



        //make customizable
        push()
        fill(this.barColours[0])
        rect(-this.Width, -this.Hight, 50, 50)
        fill(this.barColours[1])
        rect(-this.Width, -this.Hight + 100, 50, 50)
        text(this.yVal[1], -this.Hight + 50, -170)
        text(this.yVal[0], -this.Hight + 50, -270)
        pop()


        this.axisLineColor = color(100);
        this.axisTextColour = color(125);




        push();
        stroke(255, 0, 0);
        strokeWeight(1); // Make the average line thicker
        text("avg", -30, -this.avg, -this.Width); // Draw the average line
        line(0, -this.avg, this.Width, -this.avg); // Draw the average line
        pop();

        let sum = 0;

        //avg
        



        for (let InnerLoopCount = 0; InnerLoopCount < this.data.length; InnerLoopCount++) {

            noStroke();

            let barHightendnoScaler = this.data[InnerLoopCount].Total * this.scaler;



            this.tickHightArr.push(barHightendnoScaler)
            // console.log(this.tickHightArr);




        }


        // draw ticks and numbers
        for (let i = 0; i < this.tickHightArr.length; i++) {
            console.log(this.tickHightArr)
            strokeWeight(this.axisLineThickness);
            stroke(this.axisLineColour);
            line(0, -this.tickHightArr[i], this.Width, -this.tickHightArr[i])
            push();
            noStroke()
            fill(this.axisLineColor)
            rotate(0)
            textSize(10)
            text(this.tickHightArr[i].toFixed(this.tickDecimal), -this.Width / 8, -this.tickHightArr[i]);

            pop()
        }

           //avg    
        for (let i = 0; i < this.tickHightArr.length; i++) {
            sum += this.tickHightArr[i];
        }

        this.avg = sum / this.tickHightArr.length;
     
     






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


        //hold all the hights 

        for (let outerLoopCount = 0; outerLoopCount < this.data.length; outerLoopCount++) {
            push();

            translate((this.gap + this.barWidth) * outerLoopCount, 0);


            let barHightstart = 0;

            for (let InnerLoopCount = 0; InnerLoopCount < this.yVal.length; InnerLoopCount++) {

                noStroke();


                fill(this.barColours[InnerLoopCount % this.barColours.length]);


                let barHightend = this.data[outerLoopCount][this.yVal[InnerLoopCount]] * this.scaler;
                // let barHightendnoScaler = this.data[outerLoopCount][this.data.total] * this.scaler;

                rect(0, -barHightstart, this.barWidth, -barHightend);

                // let tickhight = [];
                // tickhight.push(barHightend);

                barHightstart += barHightend;
                // this.tickHightArr.push(barHightendnoScaler)
                console.log(this.tickHightArr);



            }







            // the main goal is to have an array thtat has all ther higtes and use that to print out ticks on the y axis 




            //ages
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



        // for (let i = 0; i < this.tickHightArr.length; i++) {
        //     line(this.tickHightArr[i], this.tickHightArr[i],5,this.Width);

        // }

        // console.log(this.tickHightArr);



        /////////// Y ticks //////////////


        push();
        stroke(this.axisLineColor);
        strokeWeight(this.axisLineThickness);

        push();
        stroke(this.axisLineColor);
        strokeWeight(this.axisLineThickness);




        pop();

        pop();
        pop();

    }



}
