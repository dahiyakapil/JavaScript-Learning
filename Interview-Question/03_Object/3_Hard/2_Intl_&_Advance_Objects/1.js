/*
    Q1: What is an Intl object?

    The Intl object is a built-in JavaScript object that provides an interface for internationalization. It is primarily used to format numbers, dates, times, and strings according to various cultural and language-sensitive conventions.

    Key Features of the Intl Object:

    1. Formatting Numbers: Includes options for formatting currencies, percentages, or decimals.

    2. Formatting Dates and Times: Allows dates and times to be formatted in a locale-sensitive manner.

    3. Collation: Compares strings in a locale-sensitive way (e.g., sorting words alphabetically based on a specific language's rules).

    4. Pluralization: Handles plural forms of strings in different languages.

    * DateTimeFormat 
        Methods : 
        1. according to the locale we can set the data
        2. The default is US date time format is set
        3. We can give the undefined parameter and we can pass the options... {year: "2-digit"}


**********************************************************************************************************************************************************

    Q2; What are the properties of Intl object
    Below are the list of properties available on Intl object,

    Collator: These are the objects that enable language-sensitive string comparison.
    DateTimeFormat: These are the objects that enable language-sensitive date and time formatting.
    ListFormat: These are the objects that enable language-sensitive list formatting.
    NumberFormat: Objects that enable language-sensitive number formatting.
    PluralRules: Objects that enable plural-sensitive formatting and language-specific rules for plurals.
    RelativeTimeFormat: Objects that enable language-sensitive relative time formatting.



*/

// const formatter = new Intl.DateTimeFormat(undefined, {dateStyle: "long"}); //By default it is us based format
// console.log(formatter.format(new Date()))

// const formatter = new Intl.RelativeTimeFormat(undefined, {numeric: "always"});
// console.log(formatter.format(43, "minutes"))
// console.log(formatter.format(-43, "minutes"))
// console.log(formatter.format(43, "hour"))
// console.log(formatter.format(-43, "hour"))
// console.log(formatter.format(1, "day"))

// NUmber Format *************************

// const formatter = new Intl.NumberFormat(undefined, {
//     // currency: "USD",
//     // currency: "EUR",
//     // currency: "INR",
//     // currency: "YEN",
//     // style: "currency"

//     // style:"unit",
//     // unit:"liter",
//     // unitDisplay: "long"

//     // notation:"compact"

//     minimumFractionDigits: 2
    
// })

// console.log(formatter.format(1.2344434121122))


// PLuralRules

const formatter = new Intl.PluralRules(undefined);
console.log(formatter.select(0))
;("There is one mouse")
;("There is two mice")