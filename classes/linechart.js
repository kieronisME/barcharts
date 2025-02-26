class LineGraph {
    constructor(obj) {
        // Properties
        this.x = obj.x;
        this.y = obj.y;
        this.Width = obj.Width;
        this.Hight = obj.Hight;

        // Data
        this.data = obj.data;
        this.xVal = obj.xVal;
        this.yVal = obj.yVal;
        this.barNum = this.data.length;

        //data colors
        this.ValColor = obj.ValColor,
        this.ValStrokeColor = obj.ValStrokeColor,
        this.ValStrokeWieght = obj.ValStrokeWieght,

        // Lines
        this.axisLineThickness = obj.axisLineThickness;

        //line colors
        this.axisLineColour = obj.axisLineColour;
        this.YTextXAxisPadding = obj.YTextXAxisPadding;
        this.YTextYAxisPadding = obj.YTextYAxisPadding;
        this.XTextXAxisPadding = obj.XTextXAxisPadding;
        this.XTextYAxisPadding = obj.XTextYAxisPadding;


        // Bars (reused for line color)
        this.barWidth = obj.barWidth;

        //bar color
        this.barColor = obj.barColor;
        this.barStrokeColor = obj.barStrokeColor


        // Titles
        this.titleText = obj.titleText;
        this.xTitleOffset = obj.xTitleOffset;
        this.yTitleOffset = obj.yTitleOffset;

        // Ticks
        this.numTicks = obj.numTicks;
        this.tickDecimal = obj.tickDecimal;
        this.tickGap = obj.tickGap;
        this.tickPadding = obj.tickPadding;
        this.tickStrokeWeight = obj.tickStrokeWeight;
        this.tickStrokeLength = obj.tickStrokeLength;
        this.tickTextColor = obj.tickTextColor;
        this.tickTextSize = obj.tickTextSize;

        //Tick color
        this.tickTextColor = obj.tickTextColor;
        this.tickColor = obj.tickColor;
        this.tickColor = obj.tickColor;


        // Labels
        this.labelPadding = obj.labelPadding;
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;
        this.labbleTileX = obj.labbleTileX;

        //label color
        this.labelStrokeColor = obj.labelStrokeColor;
        this.labelColor = obj.labelColor;

        //text
        this.textSize = obj.textSize
        this.YtextSize = obj.YtextSize


        //LOGIC

        // grabs birthrates put them in an array
        this.BirthRates = this.data.map((x) => x.Birthrate);
        // console.log(this.BirthRates);

        //put into maxBirthRate using the SPREAD syntax. 
        this.maxBirthRate = Math.max(...this.BirthRates);

        //scaler making sure that the max can never be higher than the hight of the graph
        this.scaler = this.Hight / this.maxBirthRate;

        // Calculate gap between points
        this.gap = (this.Width - (this.barNum * this.barWidth)) / (this.barNum + 1);
        this.tickGap = this.Hight / this.numTicks;
    }





    //render my render functions please
    render() {
        push();
        translate(this.x, this.y);
        this.renderAxis();
        this.renderLine();
        this.renderAbrevations()
        this.renderTicks();
        pop();
    }



    //render my axis lines
    renderAxis() {
        push();
        strokeWeight(this.axisLineThickness);
        stroke(this.axisLineColour);
        line(0, 0, this.Width, 0); // X-axis
        line(0, 0, 0, -this.Hight); // Y-axis


        for (let i = 0; i < this.barNum; i++) {
            //spacing points out evenly acounting for each bars width too
            let jump = (this.gap * (i + 1)) + (this.barWidth * i);

            textAlign(LEFT, CENTER);

            push();
            translate(jump + this.barWidth / 2, 0);
            fill(this.labelColor);

            //drawinf lines UPWARD 
            line(0, 0, 0, -this.Hight);
            pop();

        }

        pop();
    }


    // my lines 
    renderLine() {
        // Draw the line graph
        noFill();
        stroke(this.barColor);
        strokeWeight(2);

        // start drawing "shapes"
        beginShape();

        for (let i = 0; i < this.barNum; i++) {
            let Birthrate = this.data[i].Birthrate; // Use the "Birthrate" property
            console.log("hi", Birthrate)
            let x = (this.gap * (i + 1)) + (this.barWidth * i);
            // scaler so it fits within my graph
            let y = -Birthrate * this.scaler;  //UP

            //creates my "shape"
            vertex(x, y);
        }
        // stops drawing my "shape"
        endShape();

    }


    renderAbrevations() {
        //drawing my Abrevations
        for (let i = 0; i < this.barNum; i++) {
            let jump = (this.gap * (i + 1)) + (this.barWidth * i);



            noStroke();
            fill(this.labelColor);
            textAlign(LEFT, CENTER);
            let labels = this.data.map((x) => x[this.xVal]); // Extract labels
            // Draw the x-axis title
            push();
            translate(jump + this.barWidth / 2, this.labelPadding);
            //color for coountries
            fill(this.tickTextColor);
            rotate(this.labelRotation);
            text(labels[i], 0, 0);
            pop();



            // Draw the Y-axis title
            push();
            fill(this.labelColor);
            textSize(this.textSize)
            text(this.yVal, -this.XTextXAxisPadding, -this.Hight / 2);
            pop();
        }
    }



    //render ticks and y titles and x title
    renderTicks() {
        for (let i = 1; i <= this.numTicks; i++) {
            noFill();
            noFill();
            stroke(this.tickColor);

            //draw ticks
            line(0, -i * this.tickGap, this.Width, -i * this.tickGap);

            fill(this.tickTextColor);
            textAlign(RIGHT, CENTER);
            textSize(this.tickTextSize);



            //determining where to draw ticks 
            let Birthrate = this.maxBirthRate / this.numTicks * i;
            textSize(this.YtextSize)
            text(Birthrate.toFixed(this.tickDecimal), -this.tickPadding, -i * this.tickGap);
        }

     
        textSize(0)
        //x axis TITLE
        fill(this.labelColor);
        textSize(this.textSize);
        text(this.xVal, this.Width / 2, this.YTextYAxisPadding);

    }
}