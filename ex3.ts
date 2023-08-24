//ex3
//Name Cases: Store a person’s name in a variable, and then print
//that person’s name in lowercase, uppercase, and titlecase.

let casesName = "Quaid e azam Muhammad Ali jinnah";

console.log(`To upper case  : `,casesName.toUpperCase());
console.log(`To lower case  : `,casesName.toLowerCase());

function toTitlecase (value){
    return value
    .split(` `)
    .map(value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
    .join(` `);
}
console.log(`To Title Case :`, toTitlecase(casesName));
export{}