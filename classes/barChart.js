
class BarChart {
    constructor(obj) {
        //PROPERTIES//

        //positions
        this.x = obj.x;
        this.y = obj.y;
        this.Width = obj.Width;
        this.Hight = obj.Hight;
        this.margin = obj.margin;

        //data
        this.data = obj.data;
        this.ValColor = obj.ValColor
        this.xVal = obj.xVal;
        this.yVal = obj.yVal;
        this.barNum = this.data.length;

        //data colors
        this.ValColor = obj.ValColor,
            this.ValStrokeColor = obj.ValStrokeColor,
            this.ValStrokeWieght = obj.ValStrokeWieght,

            //lines
            this.axisLineThickness = obj.axisLineThickness;

        //line colors
        this.axisLineColour = obj.axisLineColour;

        //bars
        this.barWidth = obj.barWidth;
        this.numBar = obj.numBar

        //bar color
        this.barColor = obj.barColor;
        this.barStrokeColor = obj.barStrokeColor

        //titles
        this.titleText = obj.titleText;
        this.xTitleOffset = obj.xTitleOffset;
        this.yTitleOffset = obj.yTitleOffset;

        //ticks
        this.numTicks = obj.numTicks;
        this.tickDecimal = obj.tickDecimal;
        this.tickYTextPadding = obj.tickYTextPadding;
        this.tickXTextPadding = obj.tickXTextPadding
        this.tickPadding = obj.tickPadding;
        this.tickStrokeWeight = obj.tickStrokeWeight;
        this.tickStrokeLength = obj.tickStrokeLength;

        this.tickTextSize = obj.tickTextSize;

        //tick color
        this.tickTextColor = obj.tickTextColor;
        this.tickColor = obj.tickColor;
        this.tickColor = obj.tickColor;


        //labeling things
        this.labelPadding = obj.labelPadding;
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;
        this.labbleTileX = obj.labbleTileX

        //label color
        this.labelStrokeColor = obj.labelStrokeColor;
        this.labelColor = obj.labelColor;

        //text
        this.textSize = obj.textSize

        //logic
        //figure out this bracket part beacuse its wierd
        this.gap = (this.Width - (this.data.length * this.barWidth)) / (this.data.length + 1);

        //max goes through all the total numbers and picks the biggest one for mrMaxNumber
        this.mrMaxNumber = max(this.data.map((x) => x.Total));

        //divides so no matter what the max number is will never be taller than this.Hight
        this.scaler = this.Hight / this.mrMaxNumber;

        //sees how much space is aviable to use for ticks 
        this.tickGap = this.Hight / this.numTicks;


    };



    //renders all my renders 
    render() {
        push()
        translate(this.x, this.y);
        this.renderAxis();
        this.renderBars();  // X axis 
        this.renderTicks();  // Y axis 

    }



    //lines
    renderAxis() {
        push()
        strokeWeight(this.axisLineThickness);
        stroke(this.axisLineColour);

        //put minus or my graph will be updside down
        line(0, 0, this.Width, 0);
        line(0, 0, 0, -this.Hight);
        pop()

    }

    //bars
    renderBars() {

        //X Axis
        for (let i = 0; i < this.barNum; i++) {

            let jump = (this.gap * (i + 1)) + (this.barWidth * i);
            let colHight = this.data[i][this.yVal] * this.scaler;


            //bars color
            stroke(this.barStrokeColor);
            strokeWeight(this.tickStrokeWeight);
            fill(this.barColor);

            //bar
            rect(jump, 0, this.barWidth, -colHight);


            //bar text
            noStroke()
            fill(this.labelColor)
            textAlign(LEFT, CENTER);
            let labels = this.data.map((x) => x[this.xVal])


            //bar lables 
            push()
            translate(jump + this.barWidth / 2, this.labelPadding)
            rotate(this.labelRotation)
            textSize(this.textSize)
            text(labels[i], 0, 0)
            pop()


            //age groups
            push()

            translate(this.barWidth / 2, this.labbleTileX)
            stroke(this.ValStrokeColor)
            strokeWeight(this.ValStrokeWieght);
            fill(this.ValColor)

            textSize(this.textSize)
            text(this.xVal, -this.tickXTextPadding, -this.Width / 2);
            pop()


        }

    }


    //ticks
    renderTicks() {

        // Y axis 
        for (let i = 0; i <= this.numTicks; i++) {
            noFill();
            stroke(this.tickColor);
            strokeWeight(this.tickStrokeLength);

            // draw ticks
            //                         - to draw to the left
            line(0, -i * this.tickGap, -this.tickStrokeLength, -i * this.tickGap)


            stroke(this.ValStrokeColor);
            strokeWeight(this.ValStrokeWieght);
            textAlign(RIGHT, CENTER);
            textSize(15);
            let value = this.mrMaxNumber / this.numTicks * i;

            //tick numbers yippeeeee
            text(value.toFixed(this.tickDecimal), -this.tickPadding, -i * this.tickGap);

        }

        
        stroke(this.ValStrokeColor);
        strokeWeight(this.ValStrokeWieght);
        //total lable
        text(this.yVal, -this.tickYTextPadding, -this.Hight / 2);

        // draw ticks 
        // 1:
        // i <= this.numTicks;
        // the reason he put the greater than or quale sign is so it INCULDES THE NUMBER IN numTicks. like if numTicks was 5 then it will keep looping until its 5 beacvuse of greater than or quele sign. but with < it would stop at 4

        //2:
        //  line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap)
        // the starting points of my ticks is 0, -i * tickGap, and the end point is this -this.tickStrokeLength, -i * tickGap)
        // -i * tickGap ensures that my ticks are spced out evenly.
        //
    }

}










