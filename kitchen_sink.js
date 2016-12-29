function kitchenSink(something) {
  if (typeof something === "string") {
    console.log(something);
    return;
  }
  if (typeof something === "number") {
    console.log(something * something);
    return;
  }
  if (typeof something === "boolean") {
    something === true ?
      console.log("yes") : console.log("no");
    return;
  }
  if (typeof something === "function") {
    something();
    return;
  }
  if (typeof something === "undefined") {
    console.log("Undefined data, bad user!");
    return;
  }
  if (typeof something === "object") {
    if (Array.isArray(something)) {
      for (var i = 0; i < something.length; i++)
        kitchenSink(something[i])
      return;
    }
    if (!something) {
      console.log("Null data, bad user!")
      return;
    } else
      for (var i in something)
        kitchenSink(something[i])
    return;
  }
}

function hiya() {
  console.log("hiya function called")
}

console.log("basic tests:")
kitchenSink("blah")
kitchenSink(3)
kitchenSink(true)
kitchenSink(false)
kitchenSink(hiya)
kitchenSink()

console.log("\narray test:")
var a = [1, "tuberculosis", hiya]

kitchenSink(a)

console.log("\nobject test:")
var b = {
  first: "mushroom",
  second: hiya,
  third: null,
  fourth: a
}

kitchenSink(b)