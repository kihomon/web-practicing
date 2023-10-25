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

const circle1 = new circle(10);
for (let key in cirle) {
  console.log(key, circle[key]);
}
const keys = object.keys(circle);
console.log(keys);
if ("radius" in circle) console.log("circle has a radius.");
