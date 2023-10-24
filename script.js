function greet(name) {
  console.log("Hello" + name);
}
greet("Kiho");

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};
circle.draw();
