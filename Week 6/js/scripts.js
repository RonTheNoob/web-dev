class Circle {
    constructor(r) {
      this.radius = r;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  
    circumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    area() {
      return this.height * this.width;
    }
  
    perimeter() {
      return 2 * (this.height + this.width);
    }
  }

  class TriangularPrism {
    constructor(side, height){
        this.side = side;
        this.height = height;
    }

    surfaceArea(){
        return (((Math.sqrt(3) * (this.side**2)))/2) + (3*(this.side * this.height))
    }

    volume(){
        return ((Math.sqrt(3)) / 4) * this.side ** 2 * this.height;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {

    /*
    CIRCLE 
    */
    const circleRadiusInput = document.getElementById("circle_radius");
    const circuleAreaInput = document.getElementById("circle_area");
    const circleCircumferenceInput = document.getElementById(
      "circle_circumference"
    );
  
    // change listener for radius
    circleRadiusInput.addEventListener("change", (e) => {
      const radius = parseFloat(e.target.value);
      // calculate the area and circumference
      const circle = new Circle(radius);
      const area = circle.area();
      const circumference = circle.circumference();
  
      // set the circumference
      circleCircumferenceInput.setAttribute("value", circumference);
      // set the area
      circuleAreaInput.setAttribute("value", area);
    });

    /*
    RECTANGLE
    */
    const rectangleHeightInput = document.getElementById("rectangle_height");
    const rectangleWidthInput = document.getElementById("rectangle_width");
    const rectangleAreaInput = document.getElementById("rectangle_area");
    const rectanglePerimeterInput = document.getElementById("rectangle_perimeter");

    //change listener for height
    rectangleHeightInput.addEventListener("change", (e) => {
        const height = parseFloat(e.target.value);
        const width = parseFloat(rectangleWidthInput.value);
        const rectangle = new Rectangle(height, width);

        // calculate the area and perimeter
        const area = rectangle.area();
        const perimeter = rectangle.perimeter();

        rectangleAreaInput.setAttribute("value", area);
        rectanglePerimeterInput.setAttribute("value", perimeter);
    })
    
    //change listener for width
    rectangleWidthInput.addEventListener("change", (e) => {
        const width = parseFloat(e.target.value);
        const height = parseFloat(rectangleHeightInput.value);
        const rectangle = new Rectangle(height, width);
        const area = rectangle.area();
        const perimeter = rectangle.perimeter();

        rectangleAreaInput.setAttribute("value", area);
        rectanglePerimeterInput.setAttribute("value", perimeter);
    })

    /*
    EQUILATERAL TRIANGULAR PRISM
    */
    const triangularPrismSideInput = document.getElementById("triangular-prism_side");
    const triangularPrismHeightInput = document.getElementById("triangular-prism_height");
    const triangularPrismSurfaceAreaInput = document.getElementById("triangular-prism_surface-area");
    const triangularPrismVolumeInput = document.getElementById("triangular-prism_volume");

    //change listener for side length
    triangularPrismSideInput.addEventListener("change", (e) => {
        const side = parseFloat(e.target.value);
        const height = parseFloat(triangularPrismHeightInput.value);

        const triangularPrism = new TriangularPrism(side, height, length);

        // calculate the surface area and volume
        const surfaceArea = triangularPrism.surfaceArea();
        const volume = triangularPrism.volume();
        
        triangularPrismSurfaceAreaInput.setAttribute("value", surfaceArea);
        triangularPrismVolumeInput.setAttribute("value", volume);
    })

    //change listener for height
    triangularPrismHeightInput.addEventListener("change", (e) => {
        const height = parseFloat(e.target.value);
        const side = parseFloat(triangularPrismSideInput.value);

        const triangularPrism = new TriangularPrism(side, height, length);
        const surfaceArea = triangularPrism.surfaceArea();
        const volume = triangularPrism.volume();

        triangularPrismSurfaceAreaInput.setAttribute("value", surfaceArea);
        triangularPrismVolumeInput.setAttribute("value", volume);
    })
  });
  