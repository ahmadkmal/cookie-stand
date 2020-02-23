var hourArr = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var shop1 ={
  shopPlace : 'seattle',
  minCus :23 ,
  maxCus :65 ,
  avcook :6.3 ,
  genCusPerH : [],
  openHour : 6,
  closeHour : 8,
  cusgenerator : function(){
    return (Math.floor(Math.random() * (this.maxCus - this.minCus) ) + this.minCus);
  },
  hourlyCusGen : function(){
    var workHour = (12-this.openHour)+this.closeHour;
    var sum = 0;
    var a = 0 ;
    for (var i = 0; i < workHour; i++){
      a= Math.ceil(this.cusgenerator()*this.avcook);
      this.genCusPerH.push(a);
      sum += a;
    }
    this.genCusPerH.push(sum);
  },
  dispay : function(){
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
  }
};
var shop2 ={
  shopPlace : 'tokyo',
  minCus :3 ,
  maxCus :24 ,
  avcook :1.2 ,
  genCusPerH : [],
  openHour : 6,
  closeHour : 8,
  cusgenerator : function(){
    return (Math.floor(Math.random() * (this.maxCus - this.minCus) ) + this.minCus);
  },
  hourlyCusGen : function(){
    var workHour = (12-this.openHour)+this.closeHour;
    var sum = 0;
    var a = 0 ;
    for (var i = 0; i < workHour; i++){
      a= Math.ceil(this.cusgenerator()*this.avcook);
      this.genCusPerH.push(a);
      sum += a;
    }
    this.genCusPerH.push(sum);
  },
  dispay : function(){
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
  }
};
var shop3 ={
  shopPlace : 'Dubai',
  minCus :11 ,
  maxCus :38 ,
  avcook :3.7 ,
  genCusPerH : [],
  openHour : 6,
  closeHour : 8,
  cusgenerator : function(){
    return (Math.floor(Math.random() * (this.maxCus - this.minCus) ) + this.minCus);
  },
  hourlyCusGen : function(){
    var workHour = (12-this.openHour)+this.closeHour;
    var sum = 0;
    var a = 0 ;
    for (var i = 0; i < workHour; i++){
      a= Math.ceil(this.cusgenerator()*this.avcook);
      this.genCusPerH.push(a);
      sum += a;
    }
    this.genCusPerH.push(sum);
  },
  dispay : function(){
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
  }
};
var shop4 ={
  shopPlace : 'paris',
  minCus :20 ,
  maxCus :38 ,
  avcook :2.3 ,
  genCusPerH : [],
  openHour : 6,
  closeHour : 8,
  cusgenerator : function(){
    return (Math.floor(Math.random() * (this.maxCus - this.minCus) ) + this.minCus);
  },
  hourlyCusGen : function(){
    var workHour = (12-this.openHour)+this.closeHour;
    var sum = 0;
    var a = 0 ;
    for (var i = 0; i < workHour; i++){
      a= Math.ceil(this.cusgenerator()*this.avcook);
      this.genCusPerH.push(a);
      sum += a;
    }
    this.genCusPerH.push(sum);
  },
  dispay : function(){
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
  }
};
var shop5 ={
  shopPlace : 'Lima',
  minCus :2 ,
  maxCus :16 ,
  avcook :4.6 ,
  genCusPerH : [],
  openHour : 6,
  closeHour : 8,
  cusgenerator : function(){
    return (Math.floor(Math.random() * (this.maxCus - this.minCus) ) + this.minCus);
  },
  hourlyCusGen : function(){
    var workHour = (12-this.openHour)+this.closeHour;
    var sum = 0;
    var a = 0 ;
    for (var i = 0; i < workHour; i++){
      a= Math.ceil(this.cusgenerator()*this.avcook);
      this.genCusPerH.push(a);
      sum += a;
    }
    this.genCusPerH.push(sum);
  },
  dispay : function(){
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
  }
};
shop1.dispay();
shop2.dispay();
shop3.dispay();
shop4.dispay();
shop5.dispay();
