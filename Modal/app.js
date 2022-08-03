import modalComponent from "./modalComponent.js";

const newDialog = new modalComponent("Please choose", "Are you sure my friend?")
let result = await newDialog.confirm();

if (result) {
    alert("you just clicked Yes!");
} else {
    alert("you just clicked Cancel!");
}
