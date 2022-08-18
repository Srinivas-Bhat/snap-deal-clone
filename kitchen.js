var sevenData = [
    {
    id:1,
    image_url: "https://i3.sdlcdn.com/img/web_csf_top_navigation09/WaterPurifiers_Widget.jpg",
    name: "water purifiers",
    },
    
    {
    id:2,
    image_url: "https://i3.sdlcdn.com/img/web_csf_top_navigation09/GasStove_Widget.jpg",
    name: "gas stove" ,
    },
    {
    id:3,
    image_url: "https://i2.sdlcdn.com/img/web_csf_top_navigation09/JuicerMixer_Widget.jpg",
    name: "Juicer Mixer Grinder",
    },
    {
    id:4,
    image_url: "https://i1.sdlcdn.com/img/web_csf_top_navigation09/Chiminey_Widget.jpg",
    name: "Chimneys",
    },
    {
    id:5,
    image_url: "https://n2.sdlcdn.com/imgs/d/0/0/kettle_CSF_topnavimg-fbb07.jpg",
    name:"Electric Kettles",
    },
    {
    id:6,
    image_url:"https://i4.sdlcdn.com/img/web_csf_top_navigation09/InductionCooktops_Widget.jpg",
    name:"Introduction Cookups",
    },
    {
    id:7,
    image_url:"https://i2.sdlcdn.com/img/web_csf_top_navigation09/ChoppersBlenders_Widget.jpg",
    name:"Choppers & Blender",
    },
    ]

    sevenData.map(function(elem){
        var box = document.createElement("div");

        var img = document.createElement("img");
        img.src=elem.image_url;

        var name = document.createElement("p");
        name.textContent=elem.name;

        box.append(img,name);
        document.querySelector("#up").append(box)
    })
    
   var newData = [
    {
    id:32,
    image_url:'https://n2.sdlcdn.com/imgs/g/3/1/large/Prestige-NA-18-Ltr-Gravity-SDL678101845-1-38c9f.jpg',
    name: 'Prestige 18 Ltr Gravity Water Purifier',
    discount:'33%OFF',
    strikedOffPrice: '2965',
    Price: '2020',
    },
    
    {
        id:33,
    image_url: 'https://n3.sdlcdn.com/imgs/j/v/x/large/SDL167127229-a24d5.jpg',
    name: 'Good Flame 2 burner ms nano gas stove with cast iron burner',
    discount:'63%OFF',
    strikedOffPrice:'4099',
    Price:'1699',
    },

    {
        id:34,
    image_url: 'https://n2.sdlcdn.com/imgs/a/h/q/Bajaj-FX-11-Food-Processor-1721454-1-61069.jpg',
    name: 'Bajaj FX-11 Food Processor',
    discount:'33%OFF',
    strikedOffPrice: '8000',
    Price: '5698',
    },

    {
        id:35,
    image_url: 'https://n3.sdlcdn.com/imgs/i/q/1/large/cello1-ed569.jpg',
    name: 'Cello Cook-N-Serve-600 0.5 Ltr Rice Cookers Rice Cooker',
    discount:'21%OFF',
    strikedOffPrice: '6000',
    Price:  '4000',
    },

    {
        id:36,
    image_url: 'https://n3.sdlcdn.com/imgs/c/x/u/large/629823870949_2-513ba.jpg',
    name: 'Pigeon Favorite Blackline Cook Top 2 Burner',
    discount:'54%OFF',
    strikedOffPrice: '5000',
    Price: '2484',
    },

    // {
    //     id:37,
    // image_url: 'https://n4.sdlcdn.com/imgs/b/u/v/large/Prestige-Ace-food-processor-01-SDL649988567-1-19b49.jpg',
    // name: 'Prestige Ace Food Processor Brown',
    // discount:'23%OFF',
    // strikedOffPrice: '6000',
    // Price: '4900',
    // },
    
    // {
    //     id:38,
    // img: 'https://n4.sdlcdn.com/imgs/h/1/0/large/Kingstar-electric-coconut-scraper-Chopper-SDL443202288-1-af922.jpeg',
    // name: 'Kingstar electric coconut scraper Chopper & Blender White',
    // discount:'18%OFF',
    // strikedOffPrice: '3000',
    // Price: '2508',
    // },

    // {
    //     id:39,
    // img:'https://n3.sdlcdn.com/imgs/h/u/a/large/CXL-Titon-2-Ltr-Gravity-SDL317221601-1-71514.jpg', 
    // name: 'CXL Titon 2 Ltr Gravity Water Purifier',
    // discount:'44%OFF',
    // strikedOffPrice:'3000',
    // Price: '1890',
    // },
   ]
   
   newData.map(function (elem){
       var box = document.createElement("div");
       console.log(box)

       var img = document.createElement("img");
       img.src=elem.image_url;

       var name = document.createElement("p");
       name.innerText=elem.name;

       var priceDiv=document.createElement("div");

       var strikedOffPrice = document.createElement("p");
       strikedOffPrice.innerText=elem.strikedOffPrice;
       strikedOffPrice.style.textDecoration="Line-through";

       var price = document.createElement("p");
       price.innerText=elem.price;

       var discount= document.createElement("span");
       discount.innerText=elem.discount;

       priceDiv.append(strikedOffPrice,price,discount);

       box.append(img,name,priceDiv);

    //    document.querySelector(".nlaunch").apppend("box");
   })


    var kitchenData = [
{
    id:8,
    image_url: 'https://n3.sdlcdn.com/imgs/j/p/7/230X258_sharpened/GRAND-PLUS-EPIC-17-Ltr-SDL027334234-1-50a2b.jpeg',
    name: 'GRAND PLUS EPIC 17 Ltr RO + UV + UF + TDS Water Purifier',
    strikedOffPrice: '16500',
    price: '6114',
    discount: "76%OFF",
},

{
    id:9,
    image_url: 'https://n1.sdlcdn.com/imgs/k/d/v/230X258_sharpened/Prestige-Flair-Spl-550-Watt-SDL488651589-1-c4fb7.webp',
    name:'ZunVolt ABS Plastic Body 500 Watt 3 Jar Mixer Grinder',
    strikedOffPrice: '3249',
    price: '1249',
    discount: "54%OFF",
},

{
    id:10,
    image_url:'https://n2.sdlcdn.com/imgs/j/e/l/230X258_sharpened/Khaitan-3-Burner-BP-JIO-SDL373176693-1-f7fcf.jpeg',
    name:'Goodflame 3 burner ms kwid plus digital gas stove with brass burner(design must be availabality)',
    strikedOffPrice:'6499',
    price:'2099',
    discount: "35%OFF",
},

{
    id:11,
    image_url: 'https://n3.sdlcdn.com/imgs/d/6/c/230X258_sharpened/Royal-Aquafresh-Aqua-Swift-ROUVUF-SDL342168927-1-09fdd.webp',
    name:'Aquagrand AQUA SWIFT RO+UF+UV+MINERAL+TDS CONTROLLER 10 Ltr ROUVUF Water Purifier',
    strikedOffPrice:'16500',
    price: '6246',
    discount: "67%OFF",
},

{
    id:12,
    image_url: 'https://n1.sdlcdn.com/imgs/k/c/j/230X258_sharpened/MUSKPURE-Pro-Star-12-Ltr-SDL921757271-1-97039.webp',
    name:'MUSKPURE diamond Star 12 Ltr RO + UV + Copper + Alkaline + TDS Controller Water Purifier',
    strikedOffPrice:'15999',
    price: '5799',
    discount: "25%OFF",
},

{
    id:13,
    image_url: 'https://n2.sdlcdn.com/imgs/k/c/h/230X258_sharpened/Maharaja-Whiteline-Stellar-Plus-500-SDL842179092-1-472ad.webp',
    name:'Eslite Chutney Jar 650 Watt 3 Jar Mixer Grinde',
    strikedOffPrice: '1699',
    price: '1099',
    discount: "23%OFF",
},

    
{
    id:14,
    image_url: 'https://n3.sdlcdn.com/imgs/k/c/s/230X258_sharpened/Online-3burner-SDL404159912-1-f993e.png',
    name:'Blowhot Online 3 burner auto gas stove with top glass',
    strikedOffPrice:'5466',
    price: '2332',
    discount: "32%OFF",
},

{
    id:15,
    image_url: 'https://n3.sdlcdn.com/imgs/k/e/g/230X258_sharpened/ZunVolt-ABS-Plastic-Body-500-SDL427712787-1-fd09e.webp',
    name:'ZunVolt ABS Plastic Body 750 Watt 3 Jar Mixer Grinder',
    strikedOffPrice:'4344',
    price: '1599',
    discount: "34%OFF",
},

{
    id:16,
    image_url: 'https://n4.sdlcdn.com/imgs/j/d/w/230X258_sharpened/Evaahub-Electric-rechargable-LATEST-Automatic-SDL450280902-1-20b3c.webp',
    name:'Automatic Wireless Electric Rechargeable Drinking Water Dispenser Pump for 20 Liter Bottle Can with',
    strikedOffPrice:'544',
    price: '234',
    discount: "56%OFF",
},

{
    id:17,
    image_url: 'https://n3.sdlcdn.com/imgs/d/6/c/230X258_sharpened/Royal-Aquafresh-Aqua-Swift-ROUVUF-SDL342168927-1-09fdd.webp',
    name:'MUSKPURE Pride 10 Ltr RO + UF + UV + MAT Water Purifier',
    strikedOffPrice:'14999',
    price:'5655' ,
    discount: "76%OFF",
},

{
    id:18,
    image_url: 'https://n4.sdlcdn.com/imgs/j/u/o/230X258_sharpened/GOODFLAME-4-BURNER-MS-RUNNER-SDL186150103-1-e77bb.webp',
    name:'Goodflame 4 Burner Kwid Gas Stove ISI Quality Mark With 1 Years Warranty',
    strikedOffPrice:'9890',
    price: '2455',
    discount: "70%OFF",
},

{   
    id:19,
     image_url: 'https://n1.sdlcdn.com/imgs/k/d/v/230X258_sharpened/Prestige-Flair-Spl-550-Watt-SDL488651589-1-c4fb7.webp',
    name:'Prestige Teon Watt 1 Jar Mixer Grinder',
    strikedOffPrice:'1245',
    price: '998',
    discount: "23%OFF",
},

{
    id:20,
    image_url: 'https://n2.sdlcdn.com/imgs/j/e/l/230X258_sharpened/Khaitan-3-Burner-BP-JIO-SDL373176693-1-f7fcf.jpeg',
    name:'GOODFLAME 3BURNER BK PHOTON ISI QUALITY MARK 1 YEAR WARRANTY',
    strikedOffPrice:'5999',
    price: '2123',
    discount: "56%OFF",
},

{
    id:21,
    image_url: 'https://n2.sdlcdn.com/imgs/i/1/u/230X258_sharpened/MJ-FOREVER-LATEST-Automatic-water-SDL719529912-2-02fa8.jpeg',
    name:'Automatic Wireless Electric Rechargeable Drinking Water Dispenser Pump for 20 Liter Bottle Can',
    strikedOffPrice:'599',
    price: '259',
    discount: "66%OFF",
},

{
    id:22,
    image_url: 'https://n3.sdlcdn.com/imgs/i/1/p/230X258_sharpened/ND-BROTHERS-Electric-Dispenser-20-SDL881235933-1-4b5dd.jpeg',
    name:'The Indus Valley Copper 8 liter Water Dispenser',
    strikedOffPrice:'4999',
    price: '2488',
    discount: "46%OFF",
},

{
    id:23,
    image_url: 'https://n2.sdlcdn.com/imgs/k/e/q/230X258_sharpened/Prestige-Regal-750-Watt-4-SDL557794757-1-eaf11.jpeg',
    name:'Prestige Express PEX 3.0 350 Watt 2 Jar Mixer Grinder',
    strikedOffPrice:'3445',
    price: '2411',
    discount: "15%OFF",
},

{
    id:24,
    image_url: 'https://n1.sdlcdn.com/imgs/j/n/5/230X258_sharpened/GE-Filtration-TDS-meter-for-SDL301364942-1-b17e1.jpeg',
    name:'Digital TDS Meter for Water Purity Test',
    strikedOffPrice:'699',
    price: '229',
    discount: "20%OFF",
},

{
    id:25,
    image_url: 'https://n4.sdlcdn.com/imgs/j/l/t/230X258_sharpened/Plastic-Tap-Dispenser-Blue-colour-SDL882642595-1-3bb56.jpeg',
    name:'Kitchen tap extension (Pack of 1) with Tightening Clamp ,Assorted Colors',
    strikedOffPrice:'499',
    price: '179',
    discount: "27%OFF",
},

{
    id:26,
    image_url: 'https://n4.sdlcdn.com/imgs/d/8/y/230X258_sharpened/Concord-1-8-Litre-1-SDL002549899-1-9f01c.webp',
    name: 'Concord TPSK 0818 1.8 Liter 1500 Watt Stainless Steel Electric Kettle',
    strikedOffPrice:'1199',
    price:'824',
    discount: "28%OFF",
},

{
    id:27,
    image_url: 'https://n1.sdlcdn.com/imgs/j/e/z/230X258_sharpened/Havells-Aqua-Plus-Black-1-SDL006490749-1-66c7f.webp',
    name:'Havells Aqua Plus-Black 1.2 Liter 1500 Watt Stainless ,Steel Electric Kettle',
    strikedOffPrice:'2998',
    price: '1499',
    discount: "15%OFF",
},

{
    id:28,
    image_url: 'https://n4.sdlcdn.com/imgs/j/v/x/230X258_sharpened/SDL150769155_imresizer-73bad.webp',
    name:'GOODFLAME 4 BURNER SS STAR (R) GAS STOVE WITH BRASS BURNER',
    strikedOffPrice: '8000',
    price: '6536',
    discount: "22%OFF",
},

{id:29,
    image_url: 'https://n2.sdlcdn.com/imgs/j/q/x/230X258_sharpened/Aryanveda-Insta-Glow-Micellar-Water-SDL827025758-1-5a978.png',
    name:'GE Filtration 9 inches Candle filter suitable for all water purifier+Sediment Filter,RO filter candle-Pack of 4 pcs candle filter',
    strikedOffPrice:'799',
    price: '299',
    discount: "45%OFF",
},

{
    id:30,
    image_url: 'https://n4.sdlcdn.com/imgs/j/d/v/230X258_sharpened/RO-Tap-Kent-Type-SDL606932130-1-380a2.jpeg',
    name: 'RO Tap Kent Type',
    strikedOffPrice: '850',
    price: '299',
    discount: "35%OFF",
},


{
    id:31,
    image_url: 'https://n1.sdlcdn.com/imgs/j/n/5/230X258_sharpened/GE-Filtration-TDS-meter-for-SDL301364942-1-b17e1.jpeg',
    name:'GE Filtration PH meter for testing the ph level/Digital LCD meter for measure accurate PH level/High Accuracy with 0.00-14.00ph-Pocket',
    strikedOffPrice:'1899',
    price: '519',
    discount: "30%OFF",
},

{
    id:32,
    image_url: 'https://n4.sdlcdn.com/imgs/j/l/t/230X258_sharpened/Plastic-Tap-Dispenser-Blue-colour-SDL882642595-1-3bb56.jpeg',
    name:'Kitchen tap extension (Pack of 1) with Tightening Clamp Assorted Colors by Trending Tail',
    strikedOffPrice: '499',
    price: '179',
    discount: "25%OFF",
},

{
    id:8,
    image_url: 'https://n3.sdlcdn.com/imgs/j/p/7/230X258_sharpened/GRAND-PLUS-EPIC-17-Ltr-SDL027334234-1-50a2b.jpeg',
    name: 'GRAND PLUS EPIC 17 Ltr RO + UV + UF + TDS Water Purifier',
    strikedOffPrice: 'Rs16500',
    price: '6114',
    discount: "76%OFF",
},

{
    id:9,
    image_url: 'https://n1.sdlcdn.com/imgs/k/d/v/230X258_sharpened/Prestige-Flair-Spl-550-Watt-SDL488651589-1-c4fb7.webp',
    name:'ZunVolt ABS Plastic Body 500 Watt 3 Jar Mixer Grinder',
    strikedOffPrice: 'Rs3249',
    price: '1249',
    discount: "54%OFF",
},

{
    id:10,
    image_url:'https://n2.sdlcdn.com/imgs/j/e/l/230X258_sharpened/Khaitan-3-Burner-BP-JIO-SDL373176693-1-f7fcf.jpeg',
    name:'Goodflame 3 burner ms kwid plus digital gas stove with brass burner(design must be availabality)',
    strikedOffPrice:'6499',
    price:'2099',
    discount: "35%OFF",
},

{
    id:11,
    image_url: 'https://n2.sdlcdn.com/imgs/h/a/6/230X258_sharpened/image1-b28be.JPG',
    name:'Aquagrand AQUA SWIFT RO+UF+UV+MINERAL+TDS CONTROLLER 10 Ltr ROUVUF Water Purifier',
    strikedOffPrice:'16500',
    price: '6246',
    discount: "67%OFF",
},

{
    id:12,
    image_url: 'https://n1.sdlcdn.com/imgs/k/c/j/230X258_sharpened/MUSKPURE-Pro-Star-12-Ltr-SDL921757271-1-97039.webp',
    name:'MUSKPURE diamond Star 12 Ltr RO + UV + Copper + Alkaline + TDS Controller Water Purifier',
    strikedOffPrice:'15999',
    price: '5799',
    discount: "25%OFF",
},

{
    id:13,
    image_url: 'https://n2.sdlcdn.com/imgs/k/c/h/230X258_sharpened/Maharaja-Whiteline-Stellar-Plus-500-SDL842179092-1-472ad.webp',
    name:'Eslite Chutney Jar 650 Watt 3 Jar Mixer Grinde',
    strikedOffPrice: '1699',
    price: '1099',
    discount: "23%OFF",
},

    
{
    id:14,
    image_url: 'https://n3.sdlcdn.com/imgs/k/c/s/230X258_sharpened/Online-3burner-SDL404159912-1-f993e.png',
    name:'Blowhot Online 3 burner auto gas stove with top glass',
    strikedOffPrice:'5466',
    price: '2332',
    discount: "32%OFF",
},

{
    id:15,
    image_url: 'https://n3.sdlcdn.com/imgs/k/e/g/230X258_sharpened/ZunVolt-ABS-Plastic-Body-500-SDL427712787-1-fd09e.webp',
    name:'ZunVolt ABS Plastic Body 750 Watt 3 Jar Mixer Grinder',
    strikedOffPrice:'4344',
    price: '1599',
    discount: "34%OFF",
},

{
    id:16,
    image_url: 'https://n4.sdlcdn.com/imgs/j/d/w/230X258_sharpened/Evaahub-Electric-rechargable-LATEST-Automatic-SDL450280902-1-20b3c.webp',
    name:'Automatic Wireless Electric Rechargeable Drinking Water Dispenser Pump for 20 Liter Bottle Can with',
    strikedOffPrice:'544',
    price: '234',
    discount: "56%OFF",
},

{
    id:17,
    image_url: 'https://n3.sdlcdn.com/imgs/d/6/c/230X258_sharpened/Royal-Aquafresh-Aqua-Swift-ROUVUF-SDL342168927-1-09fdd.webp',
    name:'MUSKPURE Pride 10 Ltr RO + UF + UV + MAT Water Purifier',
    strikedOffPrice:'14999',
    price:'5655' ,
    discount: "76%OFF",
},

{
    id:18,
    image_url: 'https://n4.sdlcdn.com/imgs/j/u/o/230X258_sharpened/GOODFLAME-4-BURNER-MS-RUNNER-SDL186150103-1-e77bb.webp',
    name:'Goodflame 4 Burner Kwid Gas Stove ISI Quality Mark With 1 Years Warranty',
    strikedOffPrice:'9890',
    price: '2455',
    discount: "70%OFF",
},

{   
    id:19,
     image_url: 'https://n1.sdlcdn.com/imgs/k/d/v/230X258_sharpened/Prestige-Flair-Spl-550-Watt-SDL488651589-1-c4fb7.webp',
    name:'Prestige Teon Watt 1 Jar Mixer Grinder',
    strikedOffPrice:'1245',
    price: '998',
    discount: "23%OFF",
},

{
    id:20,
    image_url: 'https://n2.sdlcdn.com/imgs/j/e/l/230X258_sharpened/Khaitan-3-Burner-BP-JIO-SDL373176693-1-f7fcf.jpeg',
    name:'GOODFLAME 3BURNER BK PHOTON ISI QUALITY MARK 1 YEAR WARRANTY',
    strikedOffPrice:'5999',
    price: '2123',
    discount: "56%OFF",
},

{
    id:21,
    image_url: 'https://n2.sdlcdn.com/imgs/i/1/u/230X258_sharpened/MJ-FOREVER-LATEST-Automatic-water-SDL719529912-2-02fa8.jpeg',
    name:'Automatic Wireless Electric Rechargeable Drinking Water Dispenser Pump for 20 Liter Bottle Can',
    strikedOffPrice:'599',
    price: '259',
    discount: "66%OFF",
},

{
    id:22,
    image_url: 'https://n3.sdlcdn.com/imgs/i/1/p/230X258_sharpened/ND-BROTHERS-Electric-Dispenser-20-SDL881235933-1-4b5dd.jpeg',
    name:'The Indus Valley Copper 8 liter Water Dispenser',
    strikedOffPrice:'4999',
    price: '2488',
    discount: "46%OFF",
},

{
    id:23,
    image_url: 'https://n2.sdlcdn.com/imgs/k/e/q/230X258_sharpened/Prestige-Regal-750-Watt-4-SDL557794757-1-eaf11.jpeg',
    name:'Prestige Express PEX 3.0 350 Watt 2 Jar Mixer Grinder',
    strikedOffPrice:'3445',
    price: '2411',
    discount: "15%OFF",
},

{
    id:24,
    image_url: 'https://n1.sdlcdn.com/imgs/j/n/5/230X258_sharpened/GE-Filtration-TDS-meter-for-SDL301364942-1-b17e1.jpeg',
    name:'Digital TDS Meter for Water Purity Test',
    strikedOffPrice:'699',
    price: '229',
    discount: "20%OFF",
},

{
    id:25,
    image_url: 'https://n4.sdlcdn.com/imgs/j/l/t/230X258_sharpened/Plastic-Tap-Dispenser-Blue-colour-SDL882642595-1-3bb56.jpeg',
    name:'Kitchen tap extension (Pack of 1) with Tightening Clamp ,Assorted Colors',
    strikedOffPrice:'499',
    price: '179',
    discount: "27%OFF",
},

{
    id:26,
    image_url: 'https://n4.sdlcdn.com/imgs/d/8/y/230X258_sharpened/Concord-1-8-Litre-1-SDL002549899-1-9f01c.webp',
    name: 'Concord TPSK 0818 1.8 Liter 1500 Watt Stainless Steel Electric Kettle',
    strikedOffPrice:'1199',
    price:'824',
    discount: "28%OFF",
},

{
    id:27,
    image_url: 'https://n1.sdlcdn.com/imgs/j/e/z/230X258_sharpened/Havells-Aqua-Plus-Black-1-SDL006490749-1-66c7f.webp',
    name:'Havells Aqua Plus-Black 1.2 Liter 1500 Watt Stainless ,Steel Electric Kettle',
    strikedOffPrice:'2998',
    price: '1499',
    discount: "15%OFF",
},

{
    id:28,
    image_url: 'https://n4.sdlcdn.com/imgs/j/v/x/230X258_sharpened/SDL150769155_imresizer-73bad.webp',
    name:'GOODFLAME 4 BURNER SS STAR (R) GAS STOVE WITH BRASS BURNER',
    strikedOffPrice: '8000',
    price: '6536',
    discount: "22%OFF",
},

{id:29,
    image_url: 'https://n2.sdlcdn.com/imgs/j/q/x/230X258_sharpened/Aryanveda-Insta-Glow-Micellar-Water-SDL827025758-1-5a978.png',
    name:'GE Filtration 9 inches Candle filter suitable for all water purifier+Sediment Filter,RO filter candle-Pack of 4 pcs candle filter',
    strikedOffPrice:'799',
    price: '299',
    discount: "45%OFF",
},

{
    id:30,
    image_url: 'https://n4.sdlcdn.com/imgs/j/d/v/230X258_sharpened/RO-Tap-Kent-Type-SDL606932130-1-380a2.jpeg',
    name: 'RO Tap Kent Type',
    strikedOffPrice: '850',
    price: '299',
    discount: "35%OFF",
},


{
    id:31,
    image_url: 'https://n1.sdlcdn.com/imgs/j/n/5/230X258_sharpened/GE-Filtration-TDS-meter-for-SDL301364942-1-b17e1.jpeg',
    name:'GE Filtration PH meter for testing the ph level/Digital LCD meter for measure accurate PH level/High Accuracy with 0.00-14.00ph-Pocket',
    strikedOffPrice:'1899',
    price: '519',
    discount: "30%OFF",
},

{
    id:32,
    image_url: 'https://n4.sdlcdn.com/imgs/j/l/t/230X258_sharpened/Plastic-Tap-Dispenser-Blue-colour-SDL882642595-1-3bb56.jpeg',
    name:'Kitchen tap extension (Pack of 1) with Tightening Clamp Assorted Colors by Trending Tail',
    strikedOffPrice: '499',
    price: '179',
    discount: "25%Off",
},
]
var cartData = JSON.parse(localStorage.getItem("cartitems")) || []

kitchenData.map(function(elem){
    var box1 = document.createElement("div");
    console.log(box1);

    var img = document.createElement("img");
    img.src=elem.image_url;

    var name = document.createElement("p");
    name.innerText=elem.name;

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class","price");

    var strikedOffPrice = document.createElement("p");
    strikedOffPrice.innerText= "Rs" + elem.strikedOffPrice;
    strikedOffPrice.style.textDecoration ="Line-through";

    var price = document.createElement('p');
    price.innerText = "Rs" + elem.price;
    price.setAttribute("id", "rs");

    var discount = document.createElement('p');
    discount.innerText = elem.discount;
    discount.style.border = "1px solid"

    var button = document.createElement("button");
    button.innerText="Add to cart";
    button.style.height = '30px';
    button.style.width = '120px';
    button.setAttribute("class", "cart");
     button.addEventListener("click", function(){
         addToCart(elem);
     })

    priceDiv.append(strikedOffPrice,price,discount);

    box1.append(img,name,priceDiv,button);

    document.querySelector("#bigbox").append(box1);
})

function addToCart(elem) {
    console.log(elem)
   cartData.push(elem);
    localStorage.setItem("cartitems", JSON.stringify(cartData));
    alert("item added to cart")
} 