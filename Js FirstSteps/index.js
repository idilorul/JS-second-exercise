'use strict'

//const can = ('Can ARda');

//console.log(can)

// Degisken isimleri olamazlar
//const SyntaxError 
//const new 
//const function name(params) {
    
//}
//const name 
//const null 

//const number = (!false);
//console.log(number);

// Can Arda Born Year 1995 Software Developer
// İdil Arda Born Year 2004 Teacher
// Jonas Schmimetmann Born Year 1985 Police
// Cem Schmimetmann Born Year 2000 Designer
// Selin Kagdaric Born Year 2001 Nurse
// Mert Kagdaric Born Year 1975 Doctor 

// **CHALLENGE 01 
// Kisilerin isimleri, soyisimleri, meslekleri, doğum yıllarına ait değişkenler şeklinde tanıtalım. 
// Bulunduğumuz yıl 2042 olarak esas alınacaktır. 
// Her kişi için ayrı ayrı cümleler oluşturalım


//const canArdaName = ('Can');
//const canArdaSurname = ('Arda');
//const canArdaJob = ('Software Developer');
//const canBornYear = (1995);
//const todayYear = (2042);
//const canArdaAge = (todayYear-canBornYear);

//console.log(` ${canArdaName} ${canArdaSurname} is ${canArdaAge} years old. ${canArdaName} ${canArdaSurname}'s job is ${canArdaJob}.`) ;

//const idilName = ('İdil');
//const idilSurname = ('Orul');
//const idilJob = ('Teacher');
//const idilBornYear = (2004);
//const idilAge = (todayYear-idilBornYear);

//console.log(` ${idilName} ${idilSurname} is ${idilAge} years old. ${idilName} ${idilSurname}'s job is ${idilJob}.`);

//const jonasName = ('Jonas');
//const jonasSurname = ('Schmimetmann');
//const jonasJob = ('Police');
//const jonasBornYear = (1985);
//const jonasAge = (todayYear-jonasBornYear);

//console.log(` ${jonasName} ${jonasSurname} is ${jonasAge} years old. ${jonasName} ${jonasSurname}'s job is ${jonasJob}.`);

//const cemName = ('Cem');
//const cemJob = ('Designer');
/*
const cemBornYear = (2000);
const cemAge = (todayYear-cemBornYear);

console.log(` ${cemName} ${jonasSurname} is ${cemAge} years old. ${cemName} ${jonasSurname}'s job is ${cemJob}.`);

const selinName = ('Selin');
const selinSurname = ('Kagdaric');
//const selinBornYear = (2001);
//const selinAge = (todayYear-selinBornYear);
//const selinJob = ('Nurse');

console.log(` ${selinName} ${selinSurname} is ${selinAge} years old. ${selinName} ${selinSurname}'s job is ${selinJob}.`);

const mertName = ('Mert');
const mertBornYear = (1975);
const mertAge = (todayYear-mertBornYear);
const mertJob = ('Doctor');

console.log(` ${mertName} ${selinSurname} is ${mertAge} years old. ${mertName} ${selinSurname}'s job is ${mertJob}.`);

*/

// Chalenge 02 
// Sınıf 1 50,65,45,30
// Sınıf 2 50,78,90,5
// Sınıf 3 50,50,40, 0

// * Her sınıfın aritmetik ortalamlarını hesaplayalım 
// * Çan eğrisini tespit ettikten sonra kaç ogrencinin sınavı geçip geçmediğini yazalım

/*

const numberOne = (50);
const numberTwo = (65);
const numberThree = (45);
const numberFour = (30);
const numberFive = (78);
const numberSix = (90);
const numberSeven = (5);
const numberEight = (40);

const allStudents = (4);

const classOne = (numberOne+numberTwo+numberThree+numberFour);
const classTwo = (numberOne+numberFive+numberSix+numberSeven);
const classThree = (numberOne+numberOne+numberEight);

const classOneArMe = (classOne/allStudents);
const classTwoArMe = (classTwo/allStudents);
const classThreeArMe = (classThree/allStudents);

console.log(classOneArMe);
console.log(classTwoArMe);
console.log(classThreeArMe);

const classOneFNumber = (2);
const classThreeFNumber = (1);


console.log(`The arithmetic average of the first class is ${classOneArMe}.`);
console.log(`The arithmetic average of the second class is ${classTwoArMe}.`);
console.log(`The arithmetic average of the third class is ${classThreeArMe}.`);
console.log(`${classOneFNumber} students in first class couldn't pass the bell curve.`);
console.log(`${classOneFNumber} students in second class couldn't pass the bell curve.`);
console.log(`${classThreeFNumber} students in third class couldn't pass the bell curve.`);

*/

//const js = 'can';

//if (js === 'can') alert ('Js is fun');

/*

const age = 12;

if (age >= 18) {
    console.log('He can take drive licance');
} else {
    const yearsLeft = 18 - age; 
    console.log(`He is too young he have ${yearsLeft} years`);
}



const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const massCan = 80;
const heightCan = 1.80;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2 ;
const BMICan = massCan / heightCan ** 2;

console.log(BMIMark, BMIJohn, BMICan);

if (BMIMark > BMIJohn > BMICan) {
    console.log('BMI Mark higher to group');
} if(BMIJohn > BMICan > BMIMark) {
    console.log('BMI John higher to BMI Mark');
} 

John Age = 18
Jonas = 14
Can = 20 
Idil = 19




const johnAge = (18);
const yearsLeftJohn = (18 - johnAge);

if ( johnAge >= 18) {
    console.log(`He can take drive licance`);
} else {
    console.log(`He cannot take drive licance. He have ${yearsLeftJohn} years.`);
}

const jonasAge = (14);

if (jonasAge >= 18) {
    console.log(`He can take drive licance`);
} else {
    const yearsLeftJonas = (18- jonasAge);
    console.log(`He cannot take drive licance. He have ${yearsLeftJonas} years.`);
}

const canAge = (28);

if ( canAge >= 18) {
    console.log(`He can take drive licance`);
} else {
    const yearsLeftCan = (18 - canAge);
    console.log(`He cannot take drive licance. He have ${yearsLeftCan} years.`);
}

const idilAge = (19);

if (idilAge >= 18) {
    console.log(`She can take drive licance`);
} else {
    const yearsLeftİdil = (18 - idilAge);
    console.log(`She cannot take drive licance. She have ${yearsLeftİdil} years.`);
}



// falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Can'));
console.log(Boolean(null));
console.log(Boolean(NaN));



const hasDriverLicense = true;
const hasGoodVision = false;
const canArda = false;

console.log(hasDriverLicense)
console.log(hasGoodVision)

console.log(hasGoodVision && hasDriverLicense && canArda);
console.log(hasGoodVision || hasDriverLicense || canArda);

if (hasDriverLicense || hasGoodVision || canArda) {
    console.log('Random')
} else if (hasGoodVision && hasDriverLicense && canArda) {
    console.log('Random 2')
} else if (hasDriverLicense || hasGoodVision) {
    console.log('Random 3')
}

Challenge 2 (VERY HARD)

Maç 1 
Mavi Takım [4,2,5,3,6,8]
Kırmızı Takım [5,4,1,6,4,5]

Maç 2 
Mavi Takım [6,9,3,6,7,3]
Kırmızı Takım [7,5,7,8,3,6]

Maç 3 
Mavi Takım [6,5,3,5,2,6]
Kırmızı Takım [5,3,8,7,9,4]

İki takımın mücadele ettiği bir müsabakada toplamda 3 maç oynanmıştır. 
Maçlarda alınan puanlar yukarıda verilmiştir.
Her maçın kazananı o maçın alınan puanlarının ortalamalarına göre hesaplanacaktır. 
Toplamda her maç 6 şar adet atış yapılmıştır. 

Sizden beklenenler
*Her maç için takımların ayrı ayrı ortalamlarını bulunuz. 
*Her maçın kazananlarını ${``} şeklinde gösteriniz. 
*Tek bir if else yazarak mücadeleyi (3 maçın ortalaması) kimin kazandığını belirtiniz. 
-Koşul 1: Mavi takım kazanır 
-Koşul 2: Kırmızı takım kazanır
-Koşul 3: Beraberlik durumunda maç tekrarlanır 

İpucu: === ve == dikkat ediniz

Good Luck :) 



const teamPoint = (6);
const blueTeamName = ('Blue Team');
const redTeamName = ('Red Team');

const oneBlueTeamTotal = ( 4 + 2 + 5 + 3 + 6 + 8);
const oneBlueTeamArMe = ( oneBlueTeamTotal / teamPoint);

const oneRedTeamTotal = ( 5 + 4 + 1 + 6 + 4 + 5);
const oneRedTeamArMe = ( oneRedTeamTotal / teamPoint);

console.log(oneBlueTeamArMe > oneRedTeamArMe );


console.log(`In the first match, the average of te blue teams is ${oneBlueTeamArMe} points.`);
console.log(`In the first match, the average of te red teams is ${oneRedTeamArMe} points.`);
console.log(`The winner in the first match is the ${blueTeamName}. `);




const twoBlueTeamTotal = ( 6 + 9 + 3 + 6 + 7 + 3);
const twoBlueTeamArMe = ( twoBlueTeamTotal / teamPoint);

const twoRedTeamTotal = ( 7 + 5 + 7 + 8 + 3 + 6);
const twoRedTeamArMe = ( twoRedTeamTotal / teamPoint);

console.log(twoRedTeamArMe > twoBlueTeamArMe );

console.log(`In the second match, the average of te blue teams is ${twoBlueTeamArMe} points.`);
console.log(`In the second match, the average of te red teams is ${twoRedTeamArMe} points.`);
console.log(`The winner in the second match is the ${redTeamName}. `);



const threeBlueTeamTotal = ( 6 + 5 + 3 + 5 + 2 + 6);
const threeBlueTeamArMe = ( threeBlueTeamTotal / teamPoint);

const threeRedTeamTotal = ( 5 + 3 + 8 + 7 + 9 + 4);
const threeRedTeamArMe = ( threeRedTeamTotal / teamPoint);

console.log(threeRedTeamArMe > threeBlueTeamArMe );

console.log(`In the third match, the average of te blue teams is ${threeBlueTeamArMe} points.`);
console.log(`In the third match, the average of te red teams is ${threeRedTeamArMe} points.`);
console.log(`The winner in the third match is the ${redTeamName}. `);

const allMatchessBlueTotal = (oneBlueTeamArMe + twoBlueTeamArMe + threeBlueTeamArMe);
const allMatchessBlueArMe = (allMatchessBlueTotal / 3);
const allMatchessRedTotal = (oneRedTeamArMe + twoRedTeamArMe + threeRedTeamArMe);
const allMatchessRedArMe = (allMatchessRedTotal / 3);

console.log(allMatchessRedArMe > allMatchessBlueArMe);

if (allMatchessRedArMe > allMatchessBlueArMe ) {
    console.log(`At the end of three matches, the ${redTeamName} is the winner.`)
} else if (allMatchessBlueArMe > allMatchessRedArMe ) {
    console.log(`At the end of three matches, the ${blueTeamName} is the winner.`)
} else if ( allMatchessBlueArMe === allMatchessRedArMe ) {
    console.log(`The match ended in a draw.`)
}

*/

/*
Matematik sınav sonuçları: 
Sınıf 1 [56,45,78,41,52,12,54,12,52,36,12,12,45,78,45,89,65,100,25,48]
Sınıf 2 [45,10,25,78,75,10,45,23,56,78,41,56,78,52,14,0,12,45,78]
Sınıf 3 [40,45,40,12,30,70,50,65,60,78,90,45,85,76,45,70,40,40,50,65]




const studentpoint = [56,45,78,41,52,12,54,12,52,36,12,12,45,78,45,89,65,100,25,48];

console.log(studentpoint > 50);

if (studentpoint >= 50) {
    console.log(`The student passed the exam.`)
} else {
    console.log(`The student didn't pass the exam.`)
}

console.log('Can')


*/ 

//let day = 'sadf';

/*

switch (day) {
    case 'monday': // day === monday
    console.log('Toplantiya gidilecek');
    console.log('Kresten cocuk alinacak');
    break;

    case 'tuesday':
    console.log('Arkadas bulusmasi');
    break;

    case 'wednesday':
    case 'thursday':
    console.log('Spora gidis');
    break;

    case 'friday':
    console.log('Dizi izleme');
    break;

    case 'saturday':
    case 'sunday':
    console.log('Hafta sonu');
    break;
    default:
        console.log('Gecerli gün girilmedi');
}


if (day === 'monday') {
    console.log('Toplantiya gidilecek');
    console.log('Kresten cocuk alinacak');
} else if (day === 'tuesday') {
    console.log('Arkadas bulusmasi');
} else if (day === 'wednesday' || day==='thursday') {
    console.log('Spora gidis');
} else if ( day === 'friday') {
    console.log('Dizi izleme');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Hafta sonu');
} else {
    console.log('Gecerli gün girilmedi');
}




const age = 20;

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)


// ? = if       : = else

function logger () {
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')
    console.log('My name is Can')

}

logger();

function meyveSuyu(elma, portakal) {
    const juice = `Meyve suyu ${elma} elma ve ${portakal} portakal ile yapilir.`
    return juice;
}

const elmaSuyu = meyveSuyu (4,2);
console.log(elmaSuyu)

*/

// Function declaration

//const age1 = calcAge1(1991);

//function calcAge1(birthYear) {
//    return  2037 - birthYear;

//}

// Function experession

//const calcAge2 = function (birthYear) {
//    return 2037 - birthYear;
//}

//const age2 = calcAge2(2000);


//console.log(age1, age2);










/* let month = 'august';

if (month === 'januar') {
    console.log(`Ali's birthday party is this month.`);
} else if (month === 'februar') {
    console.log(`Ece's birthday party is this month.`);
} else if (month === 'märz' || month === 'april' ) {
    console.log(`Veli's birthday party and Veli's wedding is this month.`);
} else if (month === 'mai') {
    console.log(`Pelin's birthday party is this month.`);
} else if (month === 'juni') {
    console.log(`Burak's birthday party is this month.`);
} else if (month === 'juli') {
    console.log(`Arzu's birthday party is this month.`);
} else if (month === 'august') {
    console.log(`Mert's birthday party is this month.`);
} else if (month === 'september') {
    console.log(`Sarp's birthday party is this month.`);
} else if (month === 'oktober') {
    console.log(`Dilan's birthday party is this month.`);
} else if (month === 'november') {
    console.log(`Kerim's birthday party is this month.`);
} else if (month === 'dezember') {
    console.log(`Ozan's birthday party is this month.`);
} else {
    console.log(`The current month was not entered.`)
}

*/

/*
function pilavOlcusu(pirinç, su) {
    const pilav = (`Pilav ${pirinç} bardak pirinç ve ${su} bardak su ile hazirlanir.`)
    return pilav
}

const pilavTarifi = pilavOlcusu(2,3)
console.log(pilavTarifi)





function canMeans(meanOne, meanTwo) {
    const can = (`Can is my whole ${meanOne} and my whole ${meanTwo}.`)
    return can
}

const canMeansToMe = canMeans('love', 'luck')
console.log(canMeansToMe)




function whatToBe(job, person) {
    const life = (`I want to be a successful ${job} and a ${person}.`)
    return life
}

const whatWantToBe = whatToBe('software developer', 'happy person')
console.log(whatWantToBe)






function sätzeWörter(wörterEin, wörterZwei) {
    const sätze = (`Du bist mein Sonnenschein an regnerischen Tagen.`)
    return sätze
}

const WörterMeans = sätzeWörter('Sonnenschein', 'regnerischen Tagen')
console.log(WörterMeans)


const age = 10;

const licence = age >= 18 ? 'can get a drivers license.' : 'cannot get a drivers license.';
console.log(licence)
*/


//Function declaration

/*

const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return  2037 - birthYear;

}

// Function experession

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Function Arrow 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
    
}

console.log(yearsUntilRetirement(1991));



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Can'));



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2, 3));




const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
  
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1850, 'Can'))



const average = (a, b, c, d, e) => (a+b+c+d+e)/5;
console.log(average(5, 4, 5, 8, 7));





const average = function (a, b, c, d, e) {
    return (a+b+c+d+e)/5
}

console.log(average(5, 4, 5, 8, 7));

*/

// Challange 

// Kırmızı Takım [56,70,88]
// Mavi Takım [50,90,40]

// Takımların ortalama puanlarını her fonksiyon çeşidiyle hesaplayalım
// Kimin kazandığını if else ile her fonksiyonun içinde gösterelim



//Function declaration

// Function experession

// Function Arrow 


/* Gereksiz 

const averageBlueExp = function (a, b, c) {
    return (a+b+c) / 3
}

console.log(averageBlueExp(50, 90, 40));

*/






/*
const averageRedExp = function (a, b, c) {
    return (a+b+c) / 3
    
}


console.log(averageRedExp(56, 70, 88));
console.log(averageRedExp(50, 90, 40));




const average = function (a, b, c) {
    return (a+b+c)/3;
}

console.log(average(4,5,6));

let scoreTeamOne = average(56, 70, 88);
let scoreTeamTwo = average(50,90,40);

console.log(scoreTeamOne, scoreTeamTwo);

const twiceTeamAverage = function (avgOne, avgTwo) {
    if (avgOne > avgTwo) {
        console.log(`Team one win ${avgOne} vs ${avgTwo}`)
    } else if (avgTwo > avgOne) {
        console.log(`Team two win ${avgTwo} vs ${avgOne}`)
    } else {
        console.log('No one wins');
    }
}

twiceTeamAverage(scoreTeamOne, scoreTeamTwo)
twiceTeamAverage(10,50)




/*


const averageRedArrow = (a, b, c) => {  
    const redTeamAverage = (a+b+c) / 3;
    if (redTeamAverage > blueTeamAverage) {
        console.log(`The winner is the red team.`);
        return redTeamAverage;
    }
    else {
        console.log(`The winner is the blue team.`);
        return redTeamAverage
    }


}
console.log(averageRedArrow(56, 70, 88));







/*

function averageRedDec(a, b, c) {
    return (a+b+c) / 3
}

console.log(averageRedDec(56, 70, 88));
console.log(averageRedDec(50, 90, 40));
*/






// Basic array operations methods JS 

/*

const friends = ['Can', 'Idil', 'Arda', 'kl', 'mbn'];

// ADD ELEMENT

// Push 
console.log(friends);

const friendsTwo = friends.push('Orul');
//console.log(friendsTwo)

// Unshift 
const friendsThree = friends.unshift('Cem');

// REMOVE ELEMENT

// Pop Last element
friends.pop();

// shift  First Element
friends.shift();

// IndexOf Source element
console.log(friends.indexOf('Arda'));
console.log(friends.indexOf('Idil'))

// Inciludes
friends.push(23)
console.log(friends.includes('Arda'));
console.log(friends.includes('gs'));
console.log(friends.includes(23));

friends.shift('Can')


if (friends.includes('Can')) {
    alert('Hi, you speaking w/ Arda')
} else {
    alert('He is not hear')
};



const canArda = [
    'Can', 
    'Arda',
    2048-1995,
    'Developer',
    ['Idil', 'Cem', 'Jonas']
];

const can = {
    firstName: 'Can', 
    lastName: 'Arda', 
    age: 2048-1995,
    job: 'Developer', 
    friends:['Idil', 'Cem', 'Jonas']
}

console.log(can.age)



/*

*Adım 0 

Oyuncuların isimleri; kaleci, defans, orta saha ve forvet olarak
değişkenlere tanımlayıp console log ile göster

Kırmızı Takım: 
Kaleci: Neuer
Defanslar: Hüslmann, de Light, Dayot
Orta sahalar: Davies, Tarek, Boey, 
Forvet: Aleksander 

Mavi Takım
Kaleci: Kim min J
Defanslar: Guerrio, Tomi Sven 
Orta Sahalar: Brzan, Leroy, Müller
Forvet: Harry Kane 

* Adım 1

İki takım karşılıklı maç yapacaklardır. Attıkları her sayı değişken içine 
yazılacaktır. Mavi takımın attığı sayılar değişkenin sonuna, kırmızı takımın
attığı sayılar değişkenin başından başlayacaktır. 

* Adım 2 
Bu mücadelenin en önemli özelliği, 7 sayısını en çok atan takımın ilk turu
kazanacağıdır. İf else kullanarak kimin kazandığını belirtiniz. 

* Adım 3 
Yarışmanın ikinci turu ise iki turda toplamda alınan sayıların fazla olan
kazanacaktır. Her iki turda ki sayıları toplarak kazanını belırleyiniz. 

İlk Yarı Puanları 
5,6,7,8,7,9,7,8,7,4,6
4,7,8,9,7,8,4,1,7,7,5

İkinci Yarı Puanları 
4,5,7,6,4,7,4,5,1,5,7
7,8,5,4,1,7,8,5,0,1,7



const redTeamPlayers = {
    keeper: 'Neuer',
    defenders: ['Hüslmann', 'de Light', 'Dayot'],
    midfield: ['Davies', 'Tarek', 'Boey'],
    forvet: 'Aleksander'

}

const blueTeamPlayers = {
    keeper: 'Kim min J',
    defenders: ['Guerrio', 'Tomi Sven'],
    midfield: ['Brzan', 'Leroy', 'Müller'],
    forvet: 'Harry Kane'

}

console.log(redTeamPlayers)
console.log(blueTeamPlayers)


const matchOneRed  = [''];
const matchOneBlue = [''];

matchOneRed.push(5);
matchOneRed.push(6);
matchOneRed.push(7);
matchOneRed.push(8);
matchOneRed.push(7);

matchOneBlue.push(4);
matchOneBlue.push(5);
matchOneBlue.push(7);
matchOneBlue.push(6);
matchOneBlue.push(4);

console.log(matchOneRed.indexOf(7));
console.log(matchOneBlue.indexOf(7));


const matchRed = [''];
const matchBlue = [''];

matchRed.push(5);
matchRed.push(6);
matchRed.push(7);
matchRed.push(8);
matchRed.push(7);
matchRed.push(4);
matchRed.push(7);
matchRed.push(8);
matchRed.push(9);
matchRed.push(7);

matchBlue.push(4);
matchBlue.push(5);
matchBlue.push(7);
matchBlue.push(6);
matchBlue.push(4);
matchBlue.push(7);
matchBlue.push(8);
matchBlue.push(5);
matchBlue.push(4);
matchBlue.push(1);




/*
const average = function (a, b, c, d, e) {
    return (a+b+c+d+e)/5
}

console.log(average(5, 4, 5, 8, 7));



// this 

const idil = {
    firstName: 'İdil', 
    lastName: 'Orul', 
    job: 'Developer', 
    friends: ['Can', 'Arda', 'Ege', 'Jonas'],
    birthYear: 2030,

    
    idilBirth: function (birthYear) {
        return 2037-this.birthYear;
    }
}

console.log(idil.idilBirth())

if (idil.idilBirth() >= 18) {
    console.log('Can take driver licance');
} else {
    console.log('Cannot take driver licance')
}

*/

// 1 20 30 50
// 2 20 25 70

const childOne = {
    firstExam: 20,
    twiceExam: 30, 
    thirthExam: 100,

    examAve: function (firstExam, twiceExam, thirthExam) {
        return (this.firstExam + this.twiceExam + this.thirthExam) / 3
    }
}

const childTwo = {
    firstExam: 20,
    twiceExam: 25, 
    thirthExam: 70,

    examAve : function (firstExam, twiceExam, thirthExam) {
        return (this.firstExam + this.twiceExam + this.thirthExam) / 3
    }
}

if (childOne.examAve() > childTwo.examAve()) {
    console.log('Child One, better child two')
} else if (childOne.examAve() < childTwo.examAve()) {
    console.log('Child Two, better child one')
} else {
    console.log('No one winner')
}

// Tom Boy: 180 Kilo: 80
// Jerry Boy : 178 Kilo: 90

// Imb IBM 

const tomInfo = {
    weight: 180,
    height: 80,

    imb : function (weight, height) {
        return this.weight / (this.height**2)
    }
}

const jerryInfo = {
    weight: 178,
    height: 90,

    imb : function (weight, height) {
        return  this.weight / (this.height**2)
    }
}

if (tomInfo.imb() > jerryInfo.imb()) {
    console.log(`Tom's IMB is bigger than Jerry's IMB.`)
} else {
    console.log(`Jerry's IMB is bigger than Tom's IMB.`)
}
