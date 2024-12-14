// 1.Massiv metodlar

// 1.Massiv ichida 5 ga karrali bo‘lgan birinchi elementni toping.

// let arr = [1, 3, 7, 10, 14, 25];
// let res = arr.find(v => v % 5 === 0);
// console.log(res);

// 2.Massiv ichida 20 dan kichik bo‘lgan birinchi toq sonning indeksini toping.

// let arr = [1, 3, 7, 10, 14, 25];
// let res = arr.find(v => v < 20);
// console.log(res);


// 2. some metodi bo‘yicha masalalar

// 1.Massivda 50 ga teng yoki undan katta elementlar bor-yo‘qligini aniqlang.

// let arr = [1, 3, 7, 10, 14, 25,55,60];
// let res = arr.some(v => v >= 50);
// console.log(res);


// 2.Massivda manfiy sonlar bor-yo‘qligini aniqlang.

// let arr = [-1, 3, 7, 10, 14, 25,55,60];
// let res = arr.some(v => v > 0);
// console.log(res);


// 3.Massivda 3 ga karrali bo‘lgan sonlar bor-yo‘qligini tekshiring.

// let arr = [-1, 3, 7, 10, 14, 25,55,60];
// let res = arr.some(v => v % 2 !== 0);
// console.log(res);


// 3.every metodi bo‘yicha masalalar

// 1.Massivdagi barcha sonlar musbat ekanligini tekshiring.

// let arr = [-1, 3, 7, 10, 14, 25,55,60];
// let res = arr.every(v => v > 0);
// console.log(res);

// 2.Massivdagi barcha sonlar 10 dan katta ekanligini tekshiring.

// let arr = [-1, 3, 7, 10, 14, 25,55,60];
// let res = arr.some(v => v > 10);
// console.log(res);


// 3.Massivdagi barcha sonlar toq ekanligini aniqlang.

// let arr = [-1, 3, 7, 10, 14, 25,55,60];
// let res = arr.some(v => v % 2 !== 0);
// console.log(res);



// 4.String metodlar

// 1. charAt

// 1.Berilgan matnning uchinchi belgisi nima ekanligini aniqlang.

// let arr = "Salom";
// let res = arr.length >= 3 ? arr.charAt(2) : "Matn uchta belgidan kam.";
// console.log(res);

// 2.Matnning oxiridan ikkinchi belgisini toping.

// let arr = "Salom";
// let res = arr.length >= 3 ? arr.charAt(3) : "Matn uchta belgidan kam.";
// console.log(res);


// 2. charCodeAt

// 1.Berilgan matnning birinchi belgisi uchun Unicode qiymatini aniqlang.

// let arr = "Salom";
// if (arr.length > 0) {
//     let res = arr.charCodeAt(0); 
//     console.log(res);
// } else {
//     console.log("Matn bo'sh");
// }

// 2.Matnning beshinchi belgisining Unicode qiymatini toping.

// let arr = "Salomm";
// if (arr.length > 0) {
//     let res = arr.charCodeAt(5); 
//     console.log(res);
// } else {
//     console.log("Matn bo'sh");
// }

// 3.. slice

// 1.Berilgan matndan birinchi 5 ta belgini ajratib oling.

// let arr = "Salomm";
// if (arr.length > 0) {
//     let res = arr.slice(5); 
//     console.log(res);
// } else {
//     console.log("Matn bo'sh");
// }


// 2.Matnning oxirgi 3 ta belgisini ajratib oling.

// let arr = "Salomm";
// if (arr.length > 0) {
//     let res = arr.slice(3); 
//     console.log(res);
// } else {
//     console.log("Matn bo'sh");
// }

// 4.substring

// 1.Matnning 2-pozitsiyadan boshlab 6-pozitsiyagacha bo‘lgan qismini ajrating.

// let arr = "substring";
// if (arr.length > 0) {
//     let res = arr.substring(2,6); 
//     console.log(res);
// } else {
//     console.log("Matn bo'sh");
// }


// 2.Matnning oxirgi uchta belgisini substring yordamida oling.

// let arr = "hello";
// if (arr.length > 0) {
//     let res = arr.substring(2); 
//     console.log(res);
// } else {
//     console.log("Matn bo'sh");
// }



// 5.substr

// 1.Matnning 4-pozitsiyadan boshlab 5 ta belgisini oling.

// let arr = "pozitsiyasi";
// if (arr.length > 0) {
//     let res = arr.substr(4,5); 
//     console.log(res);
// } else {
//     console.log("Matn bo'sh");
// }


// 2.Berilgan matnning boshidan 7 ta belgisini substr yordamida ajrating.

// let arr = "pozitsiya";
// if (arr.length > 0) {
//     let res = arr.substr(0,7); 
//     console.log(res);
// } else {
//     console.log("Matn bo'sh");
// }



// 6.. toUpperCase, toLowerCase

// 1.Berilgan matnni faqat katta harflar bilan yozing.

// let arr = "Salom dunyo!";
// let res = arr.toUpperCase();
// console.log(res);


// 2.Matnning birinchi yarmidan kichik harflar, ikkinchi yarmidan katta harflar yarating.

// let arr = "Salom dunyo!";
// let res = arr.toLowerCase();
// console.log(res);


// 7. concat

// 1.Berilgan ikkita matnni birlashtiring.

// let arr = "Salom ";
// let arr2 = "dunyo!"
// let res = arr.concat("",arr2);
// console.log(res);


// 2.Matnga qo‘shimcha qilib "!" belgisi qo‘shing va yangi matn yarating.

// let arr = "Salom dunyo";
// let arr2 = "!"
// let res = arr.concat("",arr2);
// console.log(res);



// 8.trim, trimStart, trimEnd

// 1.Matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlang.

// let arr = "               Salom dunyo!                  ";
// let res = arr. trim();
// console.log(res);



// 2.Matnning faqat boshidagi bo‘sh joylarni olib tashlang.

// let arr = "               Salom dunyo!";
// let res = arr.trimStart();
// console.log(res);



// 9. padStart, padEnd

// 1.Berilgan matnni boshidan 10 belgiga to‘ldiring, “*” belgisi bilan.

// let arr = "123";
// let res = arr.padStart(10,"*");
// console.log(res);


// 2.Matnni oxiridan 15 belgiga “#” bilan to‘ldiring.

// let arr = "123";
// let res = arr.padEnd(15,"#");
// console.log(res);


// 10.repeat


// 1.Matnni 3 marta takrorlab yangi matn yarating.

// let arr = "123,";
// let res = arr.repeat(3);
// console.log(res);

// 2.Belgini 5 marta takrorlab, string yaratib oling.


// let arr = "123 ";
// let res = arr.repeat(5);
// console.log(res);


// 11.replace, replaceAll

// 1.Matnning ichidagi birinchi "a" harfini "o" harfiga almashtiring.

// let arr = "assalom";
// let res = arr.replace('a','o');
// console.log(res);

// 2.Matnning barcha “ ” (bo‘sh joy) belgilarini “_” belgilariga almashtiring.

// let arr = "assalom alaykum  ";
// let res = arr.replaceAll("","_");
// console.log(res);

// 12.split

// 1.Matnni har bir so‘zdan ajratib massivga aylantiring.

// let arr = "assalom alaykum";
// let res = arr.split(" ");
// console.log(res);

// 2.Matnni har bir belgidan ajratib massiv yarating.

// let arr = "assalom alaykum  ";
// let res = arr.split("");
// console.log(res);


// 13.indexOf, lastIndexOf

// 1.Matndagi "a" harfi birinchi marta qayerda uchrayotganini aniqlang.


// let arr = "valaykum alaykum  ";
// let res = arr.indexOf("a");
// console.log(res)


// 2.Matndagi "e" harfi oxirgi marta qayerda uchrayotganini toping.


// let arr = "welcome";
// let res = arr.lastIndexOf("e");
// console.log(res)



// 14.includes

// 1.Matn ichida "hello" so‘zi bor-yo‘qligini tekshiring.


// let arr = "hello welcome to homework";
// let res = arr.includes("hello");
// console.log(res)


// 2.Matn ichida "!" belgisi mavjudligini aniqlang.

// let arr = "hello welcome to homework !";
// let res = arr.includes("!");
// console.log(res)


// 15.search

// 1.Matn ichida birinchi "good" so‘zi qayerda joylashganini aniqlang.

// let arr = "hello welcome to homework || good like mais";
// let res = arr.search("good");
// console.log(res)


// 2.Matnda raqam uchraydigan joyni aniqlang.

// let arr = "hello welcome to homework || good like mais  1";
// let res = arr.search("1","2","3","4","5");
// console.log(res)


// 16.startsWith, endsWith

// 1.Matn "Hello" so‘zi bilan boshlanadimi yoki yo‘qmi, tekshiring.

// let arr = "hello welcome to homework || good like mais";
// let res = arr.startsWith("hello");
// console.log(res)



// 2.Matn oxirida "bye" so‘zi borligini aniqlang.

// let arr = "hello welcome to homework || good like mais. bye";
// let res = arr.endsWith("bye");
// console.log(res)




// //////////////////////////////////////////////////////////////

                            // Massiv ichida obyektla //



// 1. users massivida age qiymati 25 dan katta bo‘lgan foydalanuvchilarni toping.

// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
// ];

  
// let res = users.filter(user => user.age > 25);
// console.log(res);


// 2.products massivida price qiymati 500 dan kichik bo‘lgan mahsulotlarni aniqlang.

// let products = [
//     { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//     { id: 102, name: "Phone", price: 500, rating: 4.2 },
//     { id: 103, name: "Tablet", price: 300, rating: 4.8 }
//   ];

  
// let res = products.filter(productss => productss.price > 500)
// console.log(res);


// 3.tasks massivida status qiymati "pending" bo‘lgan vazifalarni boshqa massivga ajrating.

// let tasks = [
//   { id: 1, title: "Do homework", status: "completed" },
//   { id: 2, title: "Clean room", status: "pending" },
//   { id: 3, title: "Go shopping", status: "pending" }
// ];

// const res = tasks.filter(task => task.status === "pending");
// console.log(res);



// 4.. users massivida isActive qiymati true bo‘lgan foydalanuvchilar sonini hisoblang

// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
//   ];

//   let res = users.filter(user => user.isActive === true)
//   console.log(res);
  


// 5.products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.


// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];

// let res = products.filter(product => product.rating > 4.5)
// console.log(res);



// 6.users massividagi har bir foydalanuvchining faqat name va age qiymatlarini ajratib oling.


// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];

// let res = users.map(user => ({ name: user.name, age: user.age }));
// console.log(res);


// 7. products massivida price qiymati eng kichik bo‘lgan mahsulotni aniqlang.


// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];

// let res = products.filter(product => product.rating < 4.5)
// console.log(res);


// 9.users massivida barcha foydalanuvchilarning age qiymatlari yig‘indisini hisoblang.

// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];

// let res = users.reduce((sum, user) => sum + user.age, 0)
// console.log(res);



// 11.  users massivida name qiymati "Ali" bo‘lgan foydalanuvchini toping.

// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];
// let res = users.find(user => user.name === "Ali");
// console.log(res);


// 12.tasks massivida barcha status qiymatlari "completed" ekanligini tekshiring.

// let tasks = [
//   { id: 1, title: "Do homework", status: "completed" },
//   { id: 2, title: "Clean room", status: "completed" },
//   { id: 3, title: "Go shopping", status: "completed" }
// ];

// let res = tasks.every(task => task.status === "completed")
// console.log(res);



// 13.products massivida rating qiymati 4 dan katta bo‘lgan mahsulotlar sonini hisoblang.

// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 3.9 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];

// let res = products.filter(product => product.rating > 4)
// console.log(res);


// 14. users massivida age qiymati eng katta bo‘lgan foydalanuvchini aniqlang.


// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
//   ];
  
//   let res = users.reduce((oldest, user) => 
//     user.age > oldest.age ? user : oldest, users[0]
//   );
  
//   console.log(res);


// 15.tasks massivida har bir title qiymatini bosh harfini katta qilib yangi massiv yarating.
