class HorizontalbarChart {
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
        this.xVal = obj.xVal;
        this.yVal = obj.yVal;

        //data colors
        this.ValColor = obj.ValColor,
        this.ValStrokeColor = obj.ValStrokeColor,
        this.ValStrokeWieght = obj.ValStrokeWieght,


        // - xval
        this.move_Xval_xAxis = obj.move_Xval_xAxis;
        this.move_Xval_yAxis = obj.move_Xval_yAxis;
        this.xValColor = obj.xValColor
        // - yval
        this.move_Yval_xAxis = obj.move_Yval_xAxis;
        this.move_Yval_yAxis = obj.move_Yval_yAxis;
        this.yValColor = obj.yValColor

        //lines
        this.axisLineThickness = obj.axisLineThickness;

        //line colors
        this.axisLineColour = obj.axisLineColour;

        //bars
        this.barWidth = obj.barWidth;
        this.numBar = obj.numBar
        this.barNum = this.data.length;

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

        //label color
        this.labelStrokeColor = obj.labelStrokeColor;
        this.labelColor = obj.labelColor;

        //text
        this.textSize = obj.textSize


        //logic
        //orginaly i set it to Width adn thats fine for the gaps going horizotaly but if we are going vertically then we need to calc the space it has going UP and use that to calc the gap
        this.gap = (this.Hight - (this.data.length * this.barWidth)) / (this.data.length + 1);
        this.mrMaxNumber = max(this.data.map((x) => x.Total));
        this.scaler = this.Width / this.mrMaxNumber;
        this.tickGap = this.Width / this.numTicks;
        this.labels = this.data.map((x) => x[this.yVal])


    };




    // render all my render functiona
    render() {
        push()
        translate(this.x, this.y);
        this.renderAxis();
        this.renderBars();
        this.renderXAxisTitle();
        this.renderYAxisTitle();
        pop()

    }





    //render my axis lines
    renderAxis() {
        push()
        strokeWeight(this.axisLineThickness);
        stroke(this.axisLineColour);

        line(0, 0, this.Width, 0);
        line(0, 0, 0, -this.Hight);

    }


    renderBars() {
        //////////////////////////////////////////////////////////   Y AXIS    ////////////////////////////////////////////////////

        for (let i = 0; i < this.barNum; i++) {

            let jump = (this.gap * (i + 1)) + (this.barWidth * i);

            //this will determin how far the bar will og on the x axis
            let barLength = this.data[i][this.xVal] * this.scaler;

            stroke(this.barStrokeColor);
            fill(this.tickTextColor);

            // draw bar
            rect(0, -jump - this.barWidth, barLength, this.barWidth);

            noStroke()
            fill(this.labelColor)
            textAlign(LEFT, CENTER);

            //ages
            push()
            translate(-this.labelPadding, -jump - this.barWidth / 2)
            rotate(this.labelRotation)
            //draw them
            text(this.labels[i], 0, 0)
            pop()







        }
        pop()
        //////////////////////////////////////////////////////////   Y AXIS    ////////////////////////////////////////////////////


        //////////////////////////////////////////////////////////   X AXIS    ////////////////////////////////////////////////////

        //ticks
        push()
        for (let i = 0; i <= this.numTicks; i++) {
            noFill();
            stroke(this.tickColor);
            strokeWeight(this.tickStrokeWeight);

            //drawing ticks
            line(i * this.tickGap, 0, i * this.tickGap, this.tickStrokeLength);


            fill(this.tickTextColor);
            textAlign(CENTER, TOP);
            textSize(15);
            let value = this.mrMaxNumber / this.numTicks * i;
            text(value.toFixed(this.tickDecimal), i * this.tickGap, this.tickPadding);

        }
        pop()
        //////////////////////////////////////////////////////////   X AXIS    ////////////////////////////////////////////////////

    }




    // total
    renderYAxisTitle() {
        stroke(this.ValStrokeColor)
        fill(this.ValColor)
        textAlign(LEFT, CENTER);
        text(this.yVal, this.move_Yval_xAxis, this.move_Yval_yAxis)
    }

    // age group
    renderXAxisTitle() {
        stroke(this.ValStrokeColor)
        fill(this.ValColor)
        textAlign(LEFT, CENTER);
        text(this.xVal, this.move_Xval_xAxis, this.move_Xval_yAxis);

    }



}












