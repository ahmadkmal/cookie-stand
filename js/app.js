'use strict';
var hourArr = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// var shop1 ={
//   shopPlace : 'seattle',
//   minCus :23 ,
//   maxCus :65 ,
//   avcook :6.3 ,
//   genCusPerH : [],
//   openHour : 6,
//   closeHour : 8,
//   cusgenerator : function(){
//     return (Math.floor(Math.random() * (this.maxCus - this.minCus) ) + this.minCus);
//   },
//   hourlyCusGen : function(){
//     var workHour = (12-this.openHour)+this.closeHour;
//     var sum = 0;
//     var a = 0 ;
//     for (var i = 0; i < workHour; i++){
//       a= Math.ceil(this.cusgenerator()*this.avcook);
//       this.genCusPerH.push(a);
//       sum += a;
//     }
//     this.genCusPerH.push(sum);
//   },
//   dispay : function(){
//     var workHour = (12-this.openHour)+this.closeHour;
//     this.hourlyCusGen();
//     var container = document.getElementById('shop1');
//     var articleEl = document.createElement('article');
//     var H1El = document.createElement('h2');
//     var ull = document.createElement('ul');
//     articleEl.appendChild(H1El);
//     articleEl.appendChild(ull);
//     H1El.textContent = `${this.shopPlace} :`;
//     container.appendChild(articleEl);
//     for (var ik = 0; ik < workHour; ik++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hourArr[ik]} : ${this.genCusPerH[ik]} cookies`;
//       ull.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total : ${this.genCusPerH[ik]} cookies`;
//     ull.appendChild(liEl);
//   }
// };
// var shop2 ={
//   shopPlace : 'tokyo',
//   minCus :3 ,
//   maxCus :24 ,
//   avcook :1.2 ,
//   genCusPerH : [],
//   openHour : 6,
//   closeHour : 8,
//   cusgenerator : function(){
//     return (Math.floor(Math.random() * (this.maxCus - this.minCus) ) + this.minCus);
//   },
//   hourlyCusGen : function(){
//     var workHour = (12-this.openHour)+this.closeHour;
//     var sum = 0;
//     var a = 0 ;
//     for (var i = 0; i < workHour; i++){
//       a= Math.ceil(this.cusgenerator()*this.avcook);
//       this.genCusPerH.push(a);
//       sum += a;
//     }
//     this.genCusPerH.push(sum);
//   },
//   dispay : function(){
//     var workHour = (12-this.openHour)+this.closeHour;
//     this.hourlyCusGen();
//     var container = document.getElementById('shop1');
//     var articleEl = document.createElement('article');
//     var H1El = document.createElement('h2');
//     var ull = document.createElement('ul');
//     articleEl.appendChild(H1El);
//     articleEl.appendChild(ull);
//     H1El.textContent = `${this.shopPlace} :`;
//     container.appendChild(articleEl);
//     for (var ik = 0; ik < workHour; ik++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hourArr[ik]} : ${this.genCusPerH[ik]} cookies`;
//       ull.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total : ${this.genCusPerH[ik]} cookies`;
//     ull.appendChild(liEl);
//   }
// };
// var shop3 ={
//   shopPlace : 'Dubai',
//   minCus :11 ,
//   maxCus :38 ,
//   avcook :3.7 ,
//   genCusPerH : [],
//   openHour : 6,
//   closeHour : 8,
//   cusgenerator : function(){
//     return (Math.floor(Math.random() * (this.maxCus - this.minCus) ) + this.minCus);
//   },
//   hourlyCusGen : function(){
//     var workHour = (12-this.openHour)+this.closeHour;
//     var sum = 0;
//     var a = 0 ;
//     for (var i = 0; i < workHour; i++){
//       a= Math.ceil(this.cusgenerator()*this.avcook);
//       this.genCusPerH.push(a);
//       sum += a;
//     }
//     this.genCusPerH.push(sum);
//   },
//   dispay : function(){
//     var workHour = (12-this.openHour)+this.closeHour;
//     this.hourlyCusGen();
//     var container = document.getElementById('shop1');
//     var articleEl = document.createElement('article');
//     var H1El = document.createElement('h2');
//     var ull = document.createElement('ul');
//     articleEl.appendChild(H1El);
//     articleEl.appendChild(ull);
//     H1El.textContent = `${this.shopPlace} :`;
//     container.appendChild(articleEl);
//     for (var ik = 0; ik < workHour; ik++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hourArr[ik]} : ${this.genCusPerH[ik]} cookies`;
//       ull.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total : ${this.genCusPerH[ik]} cookies`;
//     ull.appendChild(liEl);
//   }
// };
// var shop4 ={
//   shopPlace : 'paris',
//   minCus :20 ,
//   maxCus :38 ,
//   avcook :2.3 ,
//   genCusPerH : [],
//   openHour : 6,
//   closeHour : 8,
//   cusgenerator : function(){
//     return (Math.floor(Math.random() * (this.maxCus - this.minCus) ) + this.minCus);
//   },
//   hourlyCusGen : function(){
//     var workHour = (12-this.openHour)+this.closeHour;
//     var sum = 0;
//     var a = 0 ;
//     for (var i = 0; i < workHour; i++){
//       a= Math.ceil(this.cusgenerator()*this.avcook);
//       this.genCusPerH.push(a);
//       sum += a;
//     }
//     this.genCusPerH.push(sum);
//   },
//   dispay : function(){
//     var workHour = (12-this.openHour)+this.closeHour;
//     this.hourlyCusGen();
//     var container = document.getElementById('shop1');
//     var articleEl = document.createElement('article');
//     var H1El = document.createElement('h2');
//     var ull = document.createElement('ul');
//     articleEl.appendChild(H1El);
//     articleEl.appendChild(ull);
//     H1El.textContent = `${this.shopPlace} :`;
//     container.appendChild(articleEl);
//     for (var ik = 0; ik < workHour; ik++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hourArr[ik]} : ${this.genCusPerH[ik]} cookies`;
//       ull.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total : ${this.genCusPerH[ik]} cookies`;
//     ull.appendChild(liEl);
//   }
// };
// var shop5 ={
//   shopPlace : 'Lima',
//   minCus :2 ,
//   maxCus :16 ,
//   avcook :4.6 ,
//   genCusPerH : [],
//   openHour : 6,
//   closeHour : 8,
//   cusgenerator : function(){
//     return (Math.floor(Math.random() * (this.maxCus - this.minCus) ) + this.minCus);
//   },
//   hourlyCusGen : function(){
//     var workHour = (12-this.openHour)+this.closeHour;
//     var sum = 0;
//     var a = 0 ;
//     for (var i = 0; i < workHour; i++){
//       a= Math.ceil(this.cusgenerator()*this.avcook);
//       this.genCusPerH.push(a);
//       sum += a;
//     }
//     this.genCusPerH.push(sum);
//   },
//   dispay : function(){
//     var workHour = (12-this.openHour)+this.closeHour;
//     this.hourlyCusGen();
//     var container = document.getElementById('shop1');
//     var articleEl = document.createElement('article');
//     var H1El = document.createElement('h2');
//     var ull = document.createElement('ul');
//     articleEl.appendChild(H1El);
//     articleEl.appendChild(ull);
//     H1El.textContent = `${this.shopPlace} :`;
//     container.appendChild(articleEl);
//     for (var ik = 0; ik < workHour; ik++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hourArr[ik]} : ${this.genCusPerH[ik]} cookies`;
//       ull.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total : ${this.genCusPerH[ik]} cookies`;
//     ull.appendChild(liEl);
//   }
// };
// shop1.dispay();
// shop2.dispay();
// shop3.dispay();
// shop4.dispay();
// shop5.dispay();
var shops =[] ;
function Shop(shopPlace,minCus,maxCus,avCook,openHour,closeHour) {
  // var shop
  this.shopPlace = shopPlace;
  this.minCus = minCus ;
  this.maxCus = maxCus ;
  this.avCook = avCook;
  this.genCusPerH = [];
  this.openHour = openHour;
  this.closeHour = closeHour;
  shops.push(this);
  this.dispay();


}
Shop.prototype.cusgenerator = function() {
  return (Math.floor(Math.random() * (this.maxCus - this.minCus) ) + this.minCus);
};
Shop.prototype.hourlyCusGen = function(){
  var workHour = (12-this.openHour)+this.closeHour;
  var sum = 0;
  var a = 0 ;
  for (var i = 0; i < workHour; i++){
    a= Math.ceil(this.cusgenerator()*this.avCook);
    this.genCusPerH.push(a);
    sum += a;
  }
  this.genCusPerH.push(sum);
};
Shop.prototype.dispay = function(){
  var workHour = (12-this.openHour)+this.closeHour;
  this.hourlyCusGen();
  var container = document.getElementById('shop1');
  var articleEl = document.createElement('article');
  var H1El = document.createElement('h2');
  var ull = document.createElement('ul');
  articleEl.appendChild(H1El);
  articleEl.appendChild(ull);
  H1El.textContent = `${this.shopPlace} :`;
  container.appendChild(articleEl);
  for (var ik = 0; ik < workHour; ik++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hourArr[ik]} : ${this.genCusPerH[ik]} cookies`;
    ull.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total : ${this.genCusPerH[ik]} cookies`;
  ull.appendChild(liEl);
};
new Shop('seattle',23,65,6.3,6,8);

new Shop('tokyo',3,24,1.2,6,8);

new Shop('Dubai',11,38,2.3,6,8);

new Shop('Paris',20,38,2.3,6,8);

new Shop('Lima',2,16,4.6,6,8);

// var shops =[shop1,shop2,shop3,shop4,shop5];
var container = document.getElementById('table');
var tableEl = document.createElement('table');
container.appendChild(tableEl);


function table(){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  for(var time = 0 ; time < hourArr.length ; time++){
    thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = hourArr[time];
  }
  thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Daily location toltal';
  trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  for(var row = 0;row < shops.length;row++){
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = shops[row].shopPlace;
    for(var column = 0;column < hourArr.length+1; column++){
      tdEl = document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.textContent = shops[row].genCusPerH[column];
    }
    trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
  }

}
new Shop('jordna',10,50,5,6,8);
table();
function tableFooter(){
  var hourSum = 0;
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = 'total per hour';
  for(var column = 0;column < hourArr.length+1; column++){
    for(var shopId = 0 ;shopId < shops.length;shopId++ ){
      hourSum +=shops[shopId].genCusPerH[column];
    }
    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = hourSum;
    hourSum=0;
  }
}

tableFooter();
var branchForm = document.getElementById('add_branch');
branchForm.addEventListener('submit' , function(event){
  event.preventDefault();
  console.log(event.target);
  var branchlocation = event.target.branch_location.value;
  var minCustomer = event.target.branch_min.value;
  var maxCustoer = event.target.branch_max.value;
  var avCookies = event.target.avPreCust.value;
  new Shop(branchlocation,minCustomer,maxCustoer,avCookies,6,8);
  console.log(shops[-1]);
  tableEl.innerText = '';
  table();
  tableFooter();
});
var edite_elemant = document.getElementById('edite_elemant');
edite_elemant.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event.target);
  var row = event.target.row.value;
  var coluomn = event.target.coluomn.value;
  var newValue = event.target.newValue.value;
  console.log(newValue);
  console.log(shops[(row-1)]);
  console.log(shops[(row-1)].genCusPerH[(coluomn-1)]);
  shops[(row-1)].genCusPerH[(coluomn-1)]=Number(newValue);
  tableEl.innerText = '';
  table();
  tableFooter();
});

