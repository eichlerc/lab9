
var item1 =
   {name: "Broccoli",
   type: "vegetable",
   healthy: true,
   price: .50
};

var item2 =
   {name: "Goldfish",
   type: "snack",
   healthy: false,
   price: 3.29
};

var item3 =
   {name: "Rice",
   type: "grain",
   healthy: true,
   price: 1.20
};

var groceryList = [item1, item2, item3];

var total=0;

function showList() {
for(var i=0 ; i < groceryList.length ; i++) {
// (groceryList[i].name + " " + groceryList[i].price);
var printedList=document.createElement("div");
printedList.textContent = groceryList[i].name + " " + groceryList[i].price;
total+= groceryList[i].price;
document.body.appendChild(printedList);
};

var printedTotal= document.createElement("div");
printedTotal.textContent = total;
document.body.appendChild(printedTotal);
}

function addItems(){
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value*1;
  var newItems = {name: a, price: b};
  if (a !=''){
    groceryList.push(newItems)}
    showList();
  }
