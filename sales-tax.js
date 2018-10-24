var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var resultObj = {};
  for (var companyIndex in salesData) {
    var pathway = salesData[companyIndex];
    var totalSales = 0;
    if (resultObj.hasOwnProperty(pathway.name)) {
      // company name in resultObj, need to += total sales and calc taxes
      totalSales = pathway.sales.reduce((total, num) => { return total + num; });
      resultObj[pathway.name].totalSales += totalSales;
      resultObj[pathway.name].totalTaxes += totalSales * salesTaxRates[pathway.province];
    } else {
      // company name not in resultObj, need to add company name, total sales, calc taxes
      totalSales = pathway.sales.reduce((total, num) => { return total + num; });
      resultObj[pathway.name] = {
        totalSales: totalSales,
        totalTaxes: totalSales * salesTaxRates[pathway.province]
      };
    }
  }
  return resultObj;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
