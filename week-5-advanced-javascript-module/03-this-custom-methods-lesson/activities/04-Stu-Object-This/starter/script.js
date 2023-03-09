// this refers to the window in the global context
console.log(this);
// this refers to the 
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

helloThis();
// this refers to the function of child object function ageTenYears

var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

child.ageTenYears();
// this refers to the object investor, investment object and function investment growth
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};
investor.investment.investmentGrowth();
