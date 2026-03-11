"use strict";

const myPhone = {
  screenSize: "248px",
  speed: "4.9ghz",
  battery: "22h",
};

// const outputString =
//   "The size of the screen is " +
//   myPhone.screenSize +
//   ". The speed is " +
//   myPhone.speed +
//   ". the battery will last for " +
//   myPhone.battery;

const outputString = `The size of the screen is ${myPhone.screenSize} . The speed is ${myPhone.speed} . the battery will last for ${myPhone.battery}`;

document.writeln(outputString);

let font="text-xl"

if (myPhone.screenSize> 200){
    font = "text-sxl"
}

let bgColor = "bg-blue-300"
if
// const className = `${font} mt-4 flex ${bgColor}`