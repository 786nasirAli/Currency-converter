import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgGray("CURRENCY CONVERTOR"));

let currency = {
    USD: 1,
    PKR: 277.54,
    INR: 83,
    EUR: 0.92,
    NZD: 1.66,
    NPR: 133.08,
    MAD: 10.06,
    EGP: 47.33,
    IRR: 42075.00,
    AFN: 71.23,
    IQD: 1308.17
};

(async () => {
    let currencyUser: {
        From: keyof typeof currency;
        To: keyof typeof currency;
        amount: number;
    } = await inquirer.prompt([
        {
            name: "From",
            message: "APNI CURRENCY CHUNAIN JISE CONVERT KARNA HAI",
            type: "list",
            choices: ["USD", "PKR", "INR", "EUR", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN"]
        },
        {
            name: "To",
            message: "JIS CURRENCY MEIN CONVERT KARNA HAI WOH CHUNAIN",
            type: "list",
            choices: ["USD", "PKR", "INR", "EUR", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN", "IQD"]
        },
        {
            name: "amount",
            message: "KITNI RAQAM CONVERT KARNI HAI",
            type: "number",
        }
    ]);

    let currency1 = currency[currencyUser.From];
    let currency2 = currency[currencyUser.To];
    let Amount = currencyUser.amount;
    let baseCurrency = Amount / currency1;
    let convertCurrency = baseCurrency * currency2; 
    let result = chalk.bgGreen(convertCurrency);
    console.log(result);
})();
