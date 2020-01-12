let products = [
    {
        "category": "fruits",
        "discount": false,
        "discountValue": null,
        "id": 7,
        "name": "Pomarańcze",
        "photo": "https://cdn.pixabay.com/photo/2017/02/26/12/27/oranges-2100108_960_720.jpg",
        "price": 6.0
    },
    {
        "category": "fruits",
        "discount": false,
        "discountValue": null,
        "id": 8,
        "name": "Mandarynki",
        "photo": "https://cdn.pixabay.com/photo/2018/12/06/21/31/mandarins-3860659_960_720.jpg",
        "price": 4.0
    },
    {
        "category": "fruits",
        "discount": false,
        "discountValue": null,
        "id": 9,
        "name": "Ananas",
        "photo": "https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg",
        "price": 6.0
    },
    {
        "category": "fruits",
        "discount": false,
        "discountValue": null,
        "id": 10,
        "name": "Arbuz",
        "photo": "https://cdn.pixabay.com/photo/2016/09/07/17/01/water-melon-1652093_960_720.jpg",
        "price": 5.0
    },
    {
        "category": "fruits",
        "discount": false,
        "discountValue": null,
        "id": 11,
        "name": "Truskawki",
        "photo": "https://cdn.pixabay.com/photo/2013/04/02/21/47/strawberries-99551_960_720.jpg",
        "price": 5.0
    },
    {
        "category": "fruits",
        "discount": false,
        "discountValue": null,
        "id": 12,
        "name": "Grejfrut",
        "photo": "https://cdn.pixabay.com/photo/2017/06/05/20/17/fruit-2375141_960_720.jpg",
        "price": 5.0
    },
    {
        "category": "vegetables",
        "discount": false,
        "discountValue": null,
        "id": 13,
        "name": "Ziemniaki",
        "photo": "https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_960_720.jpg",
        "price": 3.0
    },
    {
        "category": "juices",
        "discount": false,
        "discountValue": null,
        "id": 26,
        "name": "Lemoniada",
        "photo": "https://cdn.pixabay.com/photo/2015/03/26/10/26/mason-jar-691342_960_720.jpg",
        "price": 4.0
    },
]

let showFruits = false;
let showVegetables = false;
let showJuices = true;




let filterProduct = products.filter(element=>{
    return  (element.category==='vegetables' && showVegetables===true) || 
        (element.category==='juices' && showJuices===true )|| 
        (element.category==='fruits' && showFruits===true)||
        (element.category==='dairy products' && showDairyProducts)||
        (element.category==='oil' && showOil);
})

console.log(filterProduct);

