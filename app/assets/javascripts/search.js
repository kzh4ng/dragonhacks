var count;
var year;
var month;
var day;
//json object variables
var Y05 = require('./YHOO_2005.json');
var Y06 = require('./YHOO_2006.json');
var Y07 = require('./YHOO_2007.json');
var Y08 = require('./YHOO_2008.json');
var Y09 = require('./YHOO_2009.json');


function search_year(year) {
  switch (year) {
    case 2005:
        var selected = Y05['query']['results']['quote']
        return selected;
        break;
    case 2006:
        var selected = Y06['query']['results']['quote']
        return selected;
        break;
    case 2007:
        var selected = Y07['query']['results']['quote']
        return selected;
        break;
    case 2008:
        var selected = Y08['query']['results']['quote']
        return selected;
        break;
    case 2009:
        var selected = Y09['query']['results']['quote']
        return selected;
        break;
    default:
        return "oh no";
        break;
    }
};


function search_date(year, month, day) {
    var returned;
    var i;
    var format_date = year + "-" + month + "-" + day;
    //console.log(format_date);
    var year_set = search_year(year);
    //console.log(year_set);
    for(i=0;i < 252;i++) {
      var stock_date = year_set[i]['Date'];
      //console.log(year_set[i]['Date']);
      //console.log(i + " " + stock_date);
      if (stock_date === format_date) {
        //console.log("fish");
        returned = year_set[i];
        break;
      } else {
        returned = "oh no";
      }
  }
  console.log(returned);
  return returned;
};
