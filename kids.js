// document.querySelector("#h").innerText = "heads";


var kidsData = [ 
      {
        image_url:
          "https://n3.sdlcdn.com/imgs/j/r/6/230X258_sharpened/Kids-Cave-Dress-for-girls-SDL433221746-1-2c766.webp",
        name: "Dress for girls Regular fit Cut Out Peplum Sleeves Knee Length Dress",
        strikedprice: "MRP  Rs. 1,699",
        price: 799 ,
        offer: "53% OFF",
        rating: "3halfstar.png", 
        freq: "(33)",
      },
      {
          image_url:"https://n4.sdlcdn.com/imgs/j/y/p/230X258_sharpened/combo-pack-of-2-SDL890657267-1-c7f21.jpeg",
          name: " Dhoti Kurta For Boys Combo pack of 2",
          strikedprice: "MRP  Rs. 1,399",
          price: 439,
          offer: "69% OFF",
          rating:"3halfstar.png",
          freq: "(53)",
      },
     
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/v/g/Montello-Cotton-Best-Friends-Dress-SDL050011730-1-13c04.jpg",
        name: "Montello Cotton Dress set for Baby Girl Frock Top Jhabla and Full Length Pyjamas",
        strikedprice: "MRP  Rs. 899 ",
        price: 299,
        offer: "67% OFF",
        rating:"3halfstar.png",
        freq: "(67)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/k/e/6/Tales-Stories-Boys-Lycra-White-SDL183316223-1-62c4b.jpg",
        name: "Tales & Stories Boys Lycra White Solid Jeans",
        strikedprice: "MRP  Rs. 999",
        price: 875,
        offer: "12% OFF	",
        rating:"3halfstar.png",
        freq: "(55)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/x/j/SBN-GIRLS-YELLOW-BLACK-PARTY-SDL959930182-1-8f14e.jpeg",
        name: "SBN GIRLS YELLOW & BLACK PARTY FROCK",
        strikedprice: "MRP  Rs. 999",
        price: 319,
        offer: "68% OFF",
        rating:"3halfstar.png",
        freq: "(52)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/k/e/6/Tales-Stories-Boys-Lycra-Grey-SDL201308856-1-24043.jpg",
        name: "Tales & Stories Boys Lycra Grey Solid Jeans",
        strikedprice: "MRP  Rs. 999 ",
        price: 875,
        offer: "12% OFF",
        rating:"3halfstar.png",
        freq: "(55)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/b/5/4/large/Kaboos-Blue-Romper-SDL505765877-1-81724.JPG",
        name: "Kaboos Blue Romper",
        strikedprice: "MRP  Rs. 359",
        price: 179,
        offer: "50% OFF",
        rating:"3halfstar.png",
        freq: "(55)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/j/v/s/Boys-Festive-Party-Kurta-and-SDL539267794-1-c91bc.jpg",
        name: "Boys Festive & Party Kurta and Churidar Set",
        strikedprice: "MRP  Rs. 999",
        price: 359,
        offer: "64% OFF",
        rating:"fivestar.png",
        freq: "(155)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/i/9/2/230X258_sharpened/Naughty-Ninos-Girls-Maroon-Ruffled-SDL986177888-1-bc807.jpeg",
        name: "Naughty Ninos Girls Maroon Ruffled Dress",
        strikedprice: "MRP  Rs. 1,499",
        price: 699,
        offer: "53% OFF",
        rating:"fivestar.png",
        freq: "(85)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/s/u/230X258_sharpened/Mirrow-Trade-Girl-s-Ethnic-SDL419494320-1-0818d.webp",
        name: "Mirrow Trade Girl's Ethnic Wear Western Style Lehenga Choli Set",
        strikedprice: "MRP  Rs. 1,999",
        price: 519,
        offer: "74% OFF",
        rating:"fivestar.png",
        freq: "(89)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/j/x/z/NARPAVI-TRENDS-COLOUR-BLOCKED-BOYS-SDL714875247-1-b3628.jpg",
        name: "NARPAVI TRENDS COLOUR BLOCKED BOYS CLOTHING SET 3/4th (PACK OF 5)",
        strikedprice: "MRP  Rs. 1,299",
        price: 725,
        offer: "44% OFF",
        rating:"fivestar.png",
        freq: "(325)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/g/k/The-Creators-Cotton-Baby-Girl-SDL340959731-1-f17cf.jpeg",
        name: "The Creators Red , Yellow , Blue , Green and Black Cotton Baby Girl Frocks",
        strikedprice: "MRP  Rs. 999 ",
        price: 549,
        offer: "45% OFF",
        rating:"fivestar.png",
        freq: "(135)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/7/u/The-Best-Son-Kids-T-SDL402853828-1-77a28.jpeg",
        name: "The Best Son Kids T-Shirt",
        strikedprice: "MRP  Rs. 499",
        price: 309,
        offer: "38% OFF",
        rating:"fivestar.png",
        freq: "(05)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/q/1/MBLACK-SDL562246058-1-eb299.jpeg",
        name: "SBN Black Partywear Gown for Girls",
        strikedprice: "MRP  Rs. 999",
        price: 319,
        offer: "68% OFF",
        rating:"fivestar.png",
        freq: "(534)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/k/b/u/230X258_sharpened/KV-Fashion-Baby-Girls-Girls-SDL127482054-1-997d1.webp",
        name: "KV Fashion Baby Girls & Girls Red Velvet Semi Stitched lehenga Choli",
        strikedprice: "MRP  Rs. 1,999",
        price: 775,
        offer: "61% OFF",
        rating:"threeStar.png",
        freq: "(64)",
    },
    {
        image_url:"https://n2.sdlcdn.com/imgs/j/r/2/T4YOU-GIRLS-FANCY-STRAIGHT-KURTI-SDL597550218-1-c3ee9.jpg",
        name: "T4YOU GIRLS FANCY STRAIGHT KURTI",
        strikedprice: "MRP  Rs. 2,396",
        price: 469,
        offer: "80% OFF",
        rating:"threeStar.png",
        freq: "(95)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/j/s/v/large/T4YOU-PRINTED-KURTI-SDL267613870-1-08d09.jpg",
        name: "Fashion Dream Girl's Peplum Style Brown Chudidhar",
        strikedprice: "MRP  Rs. 2,196",
        price: 439,
        offer: "80% OFF",
        rating:"threeStar.png",
        freq: "(15)",
    },
    {
        image_url:"https://n2.sdlcdn.com/imgs/j/7/q/Ahhaaaa-Cotton-Blend-Kids-Ethnic-SDL733347511-1-14f72.jpg",
        name: "Ahhaa Cotton Blend Ethnic Waistcoat Shirt and Pant with Tie Set",
        strikedprice: "MRP  Rs. 2,999",
        price: 539,
        offer: "82% OFF",
        rating:"threeStar.png",
        freq: "(18)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/t/j/Mojua-Girls-Midi-Knee-Length-SDL503643377-1-c2f06.jpeg",
        name: "Mojua Girls Midi/Knee Length Party Dress (Red, 3/4 Sleeve)",
        strikedprice: "MRP  Rs. 1,599",
        price: 249,
        offer: "84% OFF",
        rating:"threeStar.png",
        freq: "(110)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/o/k/Hunny-Bunny-Girls-Plain-Navy-SDL132494308-1-3c6d6.jpg",
        name: "Hunny Bunny Girls Plain Navy Blue Front Buttoned Shirt Dress",
        strikedprice: "MRP  Rs. 1,099",
        price: 375,
        offer: "60% OFF",
        rating:"threeStar.png",
        freq: "(575)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/l/k/Ahhaaaa-Kids-Ethnic-Wear-Cotton-SDL027783014-1-74cd7.jpg",
        name: "Kids Ethnic Wear Cotton Blend Waistcoat Shirt and Trouser Set",
        strikedprice: "MRP  Rs. 749",
        price: 439,
        offer: "85% OFF",
        rating:"threeStar.png",
        freq: "(45)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/k/b/2/SFC-Midi-Knee-Length-Festive-SDL493676394-1-e1e09.jpg",
        name: "SFC Midi/Knee Length Festive/Wedding Dress (Multicolor, Haf Sleeve)",
        strikedprice: "MRP  Rs. 1159 ",
        price: 439,
        offer: "69% OFF",
        rating:"threeStar.png",
        freq: "(45)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/j/d/v/Sathiyas-Baby-Girls-Dresses-Pack-SDL389700527-1-30907.jpeg",
        name: "Sathiyas Green, Purple, Red, Pink and Yellow Baby Girls Dresses 5",
        strikedprice: "MRP  Rs. 1,399",
        price: 599,
        offer: "57% OFF",
        rating:"threeStar.png",
        freq: "(98)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/v/s/Boys-Festive-Party-Wedding-Kurta-SDL845576284-1-d0d63.jpg",
        name: "Boys Festive & Party, Wedding Kurta and Pyjama Set",
        strikedprice: "MRP  Rs. 1,199",
        price: 299,
        offer: "75% OFF",
        rating:"threeStar.png",
        freq: "(08)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/a/p/o/Dongli-Boys-Knitted-Fleece-Full-SDL376178506-1-684da.jpg",
        name: "Dongli Boys Knitted Fleece Full Sleeve 2pcs Combo",
        strikedprice: "MRP  Rs. 999",
        price: 419,
        offer: "58% OFF",
        rating:"threeStar.png",
        freq: "(35)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/s/7/Fashion-Dream-Girl-s-Long-SDL533138887-2-f07a8.jpeg",
        name: "Fashion Dream Girl’s Long Tulle Bridesmaid Skirt/Lehenga Choli",
        strikedprice: "MRP  Rs. 2499",
        price: 479,
        offer: "82% OFF",
        rating:"threeStar.png",
        freq: "(70)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/j/r/c/Fashion-Dream-Girl-s-Patola-SDL158991205-1-47aea.jpg",
        name: "Fashion Dream Girl's Patola Printed Rajastani Lehenga Choli",
        strikedprice: "MRP  Rs. 2,499 ",
        price: 519,
        offer: "79% OFF",
        rating:"fivestar.png",
        freq: "(86)",
    },
    {
        image_url:"https://n2.sdlcdn.com/imgs/k/b/d/NEW-COLLECTIONS-Jeans-BabaSuit-SDL328722987-1-a92e4.jpeg",
        name: "NEW COLLECTIONS Jeans BabaSuit",
        strikedprice: "MRP  Rs. 999",
        price: 349,
        offer: "65% OFF",
        rating:"fivestar.png",
        freq: "(34)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/h/m/7/J-D-Creation-Kids-Party-SDL445728907-1-3408c.jpeg",
        name: "J D Creation Kids Party wear Maroon Plain Dhoti for Boys",
        strikedprice: "MRP  Rs. 599  ",
        price: 289,
        offer: "52% OFF",
        rating:"fivestar.png",
        freq: "(97)",
    },
    {
        image_url:"https://n2.sdlcdn.com/imgs/j/n/y/SINI-MINI-Printed-Hooded-Neck-SDL294292053-1-be43f.jpg",
        name: "SINI MINI Printed Hooded Neck Casual Boys & Girls Sweatshirt",
        strikedprice: "MRP  Rs. 999",
        price: 359,
        offer: "64% OFF",
        rating:"fivestar.png",
        freq: "(796)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/r/c/Fashion-Dream-Girl-s-Designer-SDL606767542-1-a7432.jpg",
        name: "Fashion Dream Girl's Designer Top with Lehenga Skirt",
        strikedprice: "MRP  Rs. 1,999",
        price: 519,
        offer: "74% OFF",
        rating:"fivestar.png",
        freq: "(50)",
    },
    {
        image_url:"https://n2.sdlcdn.com/imgs/j/r/t/Hopscotch-Girls-Rayon-and-Polyester-SDL517613033-1-0c2f4.jpg",
        name: "Hopscotch Girls Rayon and Polyester 3/4Th Sleeves Gowns Green Color",
        strikedprice: "MRP  Rs. 3,689 ",
        price: 3599,
        offer: "2% OFF",
        rating:"fivestar.png",
        freq: "(25)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/v/j/Me-N-My-Latest-Fashion-SDL830343652-1-95603.jpg",
        name: "Me N My Latest Fashion Frock for Girls",
        strikedprice: "MRP  Rs. 699",
        price: 399,
        offer: "43% OFF",
        rating:"fivestar.png",
        freq: "(63)",
    },
    {
        image_url:"https://n2.sdlcdn.com/imgs/g/3/w/Generation-Next-Maroon-Indo-Western-SDL086836999-1-caaa8.jpeg",
        name: "Generation Next Maroon Indo Western For Boy",
        strikedprice: "MRP  Rs. 1,299",
        price: 319,
        offer: "75% OFF",
        rating:"3star.png",
        freq: "(69)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/j/r/w/Hopscotch-Girls-Polyester-Cotton-Polka-SDL400392158-1-409cf.jpg",
        name: "Hopscotch Girls Polyester, Cotton Polka Dots Sleeveless Dress in Red Color",
        strikedprice: "MRP  Rs. 1,929",
        price: 1048,
        offer: "46% OFF",
        rating:"3star.png",
        freq: "(764)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/j/u/m/PARI-FASHIONS-Midi-Knee-Length-SDL665862412-1-b46a8.jpg",
        name: "PARI FASHIONS Midi/Knee Length Festive/Wedding dress",
        strikedprice: "MRP  Rs. 1,250",
        price: 309,
        offer: "75% OFF",
        rating:"3star.png",
        freq: "(63)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/v/j/Fashion-Dream-Girl-s-Indo-SDL249525810-1-468e2.jpeg",
        name: "Fashion Dream Girl’s Indo Western Style Lehenga Choli",
        strikedprice: "MRP  Rs. 2,999 ",
        price: 599,
        offer: "80% OFF",
        rating:"3star.png",
        freq: "(55)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/h/m/g/GENERATION-NEXT-MULTI-COLOR-MODI-SDL255481606-1-9de1c.jpeg",
        name: "GENERATION NEXT MULTI COLOR MODI SET FOR BOYS",
        strikedprice: "MRP  Rs. 1,299",
        price: 349,
        offer: "73% OFF",
        rating:"3star.png",
        freq: "(55)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/x/r/BOYS-FESTIVE-WEAR-KURTA-AND-SDL570835545-1-24082.jpeg",
        name: "BOYS FESTIVE WEAR KURTA AND PAYJAMA SET",
        strikedprice: "MRP  Rs. 899",
        price: 239,
        offer: "73% OFF",
        rating:"3star.png",
        freq: "(553)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/s/u/Mirrow-Trade-Girl-s-Knee-SDL961182011-1-42b20.jpg",
        name: "Mirrow Trade Girl's Knee Length Dress",
        strikedprice: "MRP  Rs. 1,999",
        price: 319,
        offer: "84% OFF",
        rating:"3star.png",
        freq: "(85)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/v/g/Montello-Cotton-Cute-Dress-set-SDL034126764-1-c18f3.jpg",
        name: "Montello Cotton Cute Dress set for Baby Girl with Full sleeves2",
        strikedprice: "MRP  Rs. 899",
        price: 299,
        offer: "67% OFF",
        rating:"fivestar.png",
        freq: "(55)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/g/k/The-Creators-Cotton-Baby-Girl-SDL340959731-1-f17cf.jpeg",
        name: "The Creators Red , Yellow , Blue , Green and Black Cotton Baby Girl Frocks",
        strikedprice: "MRP  Rs. 999",
        price: 549,
        offer: "45% OFF",
        rating:"fivestar.png",
        freq: "(55)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/x/h/Ahhaaaa-Cotton-Floral-Print-Sleeveless-SDL038664322-1-b4759.jpg",
        name: "Ahhaaaa Cotton Floral Print Sleeveless Kurti-Sharara Set for Girls",
        strikedprice: "MRP  Rs. 2499",
        price: 699,
        offer: "70% OFF",
        rating:"3star.png",
        freq: "(1)",
    },
    {
        image_url:"https://n2.sdlcdn.com/imgs/j/v/v/Boys-Casual-T-shirt-Track-SDL626420951-1-50d84.jpg",
        name: "Boys Casual T-shirt Track Pants",
        strikedprice: "MRP  Rs. 1,999 ",
        price: 519,
        offer: "74% OFF",
        rating:"fivestar.png",
        freq: "(585)",
    },
    {
        image_url:"https://n1.sdlcdn.com/imgs/j/s/n/230X258_sharpened/Fashion-Dream-Girl-s-Ethnic-SDL085583346-1-f8206.jpeg",
        name: "Fashion Dream Girl’s Ethnic Wear Lehenga Choli",
        strikedprice: "MRP  Rs. 2,499",
        price: 519,
        offer: "79% OFF",
        rating:"fivestar.png",
        freq: "(4)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/i/c/r/Sathiyas-Set-of-5-Printed-SDL045337200-1-5994f.jpeg",
        name: "Sathiyasf 5 Printed Cotton Shirts and Shorts For 0-6 months Babies",
        strikedprice: "MRP  Rs. 799",
        price: 379,
        offer: "53% OFF",
        rating:"fivestar.png",
        freq: "(8)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/k/b/u/230X258_sharpened/AGRAYYANA-Gulab-Tafetta-Sattin-Semi-SDL385538873-1-908d0.jpeg",
        name: "AGRAYYANA Gulab Tafetta Sattin Semi-Stitched girl's Lehenga Choli",
        strikedprice: "MRP  Rs. 1,899",
        price: 539,
        offer: "72% OFF",
        rating:"fivestar.png",
        freq: "(84)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/k/y/230X258_sharpened/KIDS-Full-Sleeves-OMBRE-DYEING-SDL066310212-1-2935b.webp",
        name: "KIDS Full Sleeves OMBRE DYEING HOODED T-Shirt",
        strikedprice: "MRP  Rs. 1,199 ",
        price: 289,
        offer: "76% OFF",
        rating:"3star.png",
        freq: "(78)",
    },
    {
        image_url:"https://n3.sdlcdn.com/imgs/j/y/o/Fourfolds-Three-piece-Indo-Western-SDL428343390-1-a5f3d.jpeg",
        name: "Fourfolds Three piece Indo Western Stylish dress set with Jacquard Blazer",
        strikedprice: "MRP  Rs. 3,099",
        price: 1399,
        offer: "54% OFF",
        rating:"fivestar.png",
        freq: "(55)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/y/g/Li-l-Cupid-Sweatshirt-Hoodie-SDL242406737-1-b7be2.jpg",
        name: "Li'l Cupid Sweatshirt Hoodie Jacket with Zip Open For KIDS BOYS AND GIRLS",
        strikedprice: "MRP  Rs. 1,279 ",
        price: 749,
        offer: "41% OFF	",
        rating:"threeStar.png",
        freq: "(54)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/u/u/Arshia-Fashions-Girls-Kurti-and-SDL990332987-1-d3309.jpg",
        name: "Arshia Fashions Girls Kurti and Dhoti Set Girls Function Dress",
        strikedprice: "MRP  Rs. 2,799 ",
        price: 899,
        offer: "75% OFF",
        rating:"fivestar.png",
        freq: "(91)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/y/p/230X258_sharpened/combo-pack-of-2-SDL890657267-1-c7f21.jpeg",
        name: "Combo pack of 2",
        strikedprice: "MRP  Rs. 1,399",
        price: 439,
        offer: "69% OFF",
        rating:"3halfstar.png",
        freq: "(55)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/k/b/u/230X258_sharpened/AGRAYYANA-Gulab-Tafetta-Sattin-Semi-SDL385538873-1-908d0.jpeg",
        name: "AGRAYYANA Gulab Tafetta Sattin Semi-Stitched girl's Lehenga Choli",
        strikedprice: "MRP  Rs. 1,899",
        price: 539,
        offer: "72% OFF",
        rating:"fivestar.png",
        freq: "(55)",
    },
    {
        image_url:"https://n4.sdlcdn.com/imgs/j/k/y/230X258_sharpened/KIDS-Full-Sleeves-OMBRE-DYEING-SDL066310212-1-2935b.webp",
        name: "KIDS Full Sleeves OMBRE DYEING HOODED T-Shirt",
        strikedprice: "MRP  Rs. 1,199 ",
        price: 289,
        offer: "76% OFF",
        rating:"3star.png",
        freq: "(55)",
    },
   
  {
      image_url:"https://n3.sdlcdn.com/imgs/j/v/g/Montello-Cotton-Best-Friends-Dress-SDL050011730-1-13c04.jpg",
      name: "Montello Cotton Best Friends Dress set for Baby Girl with Full sleeves",
      strikedprice: "MRP  Rs. 899 ",
      price: 299,
      offer: "67% OFF",
      rating:"3halfstar.png",
      freq: "(559)",
  },

  {
    image_url:"https://n4.sdlcdn.com/imgs/j/y/p/230X258_sharpened/combo-pack-of-2-SDL890657267-1-c7f21.jpeg",
    name: "Combo pack of 2 Kids Clothing",
    strikedprice: "MRP  Rs. 1,399",
    price: 439,
    offer: "69% OFF",
    rating:"3halfstar.png",
    freq: "(35)",
},

{
  image_url:"https://n3.sdlcdn.com/imgs/j/u/n/Care-in-Printed-Round-Neck-SDL385294235-3-5d956.JPG",
  name: "Care in Printed Round Neck Cotton White Color Sando Vest and Short Set Kids",
  strikedprice: "MRP  Rs. 599",
  price: 329,
  offer: "45% OFF",
  rating:"fivestar.png",
  freq: "(33)",
},
{
    image_url:"https://n4.sdlcdn.com/imgs/j/n/u/MashUp-Classic-Red-Shirt-for-SDL647648268-1-51614.jpg",
    name: "MashUp Classic Red Shirt for Young boys",
    strikedprice: "MRP  Rs. 530",
    price: 419,
    offer: "21% OFF",
    rating:"3star.png",
    freq: "(26)",
  },
  {
    image_url:"https://n3.sdlcdn.com/imgs/k/d/7/Girls-Pyjama-Set-SDL615748359-1-f0fb3.JPG",
    name: "Girls Pyjama Set",
    strikedprice: "MRP  Rs. 1,299",
    price: 309,
    offer: "76% OFF",
    rating:"3star.png",
    freq: "(69)",
  },
  {
    image_url:"https://n4.sdlcdn.com/imgs/j/d/3/Kothari-100-cotton-Printed-Trackpant-SDL727245495-1-7ca63.jpeg",
    name: "Kothari 100% cotton Printed Trackpant for Boys",
    strikedprice: "MRP  Rs. 999",
    price:  289 ,
    offer: "68% OFF",
    rating:"fivestar.png",
    freq: "(47)",
  },
  {
    image_url:"https://n1.sdlcdn.com/imgs/h/6/9/Disha-Ethnic-Style-Rayon-Printed-SDL620791269-1-b81bc.jpeg",
    name: "Disha Ethnic Style Rayon Printed Girls Lehenga Choli",
    strikedprice: "MRP  Rs. 1,289  ",
    price: 625,
    offer: "52% OFF",
    rating:"3halfstar.png",
    freq: "(55)",
  },
  
{
    image_url:"https://n3.sdlcdn.com/imgs/j/q/1/Icable-Baby-Boys-and-Baby-SDL893177406-1-e879d.jpg",
    name: "Icable Baby Boys and Baby Girls Printed Rompers Organic Cotton",
    strikedprice: "MRP  Rs. 499",
    price: 199,
    offer: "60% OFF",
    rating:"fivestar.png",
    freq: "(510)",
  },

  {
    image_url:"https://n4.sdlcdn.com/imgs/j/w/y/Mirrow-Trade-Baby-Girl-s-SDL879147658-1-c4a70.jpg",
    name: "Mirrow Trade Baby Girl’s Tutu Style Flared Party Midi Dress",
    strikedprice: "MRP  Rs. 849",
    price: 499,
    offer: "59% OFF",
    rating:"3star.png",
    freq: "(15)",
  },

  {
    image_url:"https://n3.sdlcdn.com/imgs/j/t/g/BLUE-STRIPES-EMBROIDERED-FROCK-SDL668354566-1-181c5.jpg",
    name: "BLUE STRIPES EMBROIDERED FROCK FOR SMALL GIRL CHILD 5YEARS",
    strikedprice: "MRP  Rs. 561  ",
    price: 299 ,
    offer: "65% OFF",
    rating:"fivestar.png",
    freq: "(51)",
  },
  {
    image_url:"https://n4.sdlcdn.com/imgs/j/d/3/Kothari-100-cotton-Printed-Trackpant-SDL727245495-1-7ca63.jpeg",
    name: "Kothari 100% cotton Printed Trackpant for Boys",
    strikedprice: "MRP  Rs. 999",
    price:  289 ,
    offer: "68% OFF",
    rating:"fivestar.png",
    freq: "(47)",
  },
  {
    image_url:"https://n4.sdlcdn.com/imgs/j/y/p/230X258_sharpened/combo-pack-of-2-SDL890657267-1-c7f21.jpeg",
    name: "Combo pack of 2",
    strikedprice: "MRP  Rs. 1,399",
    price: 439,
    offer: "69% OFF",
    rating:"3halfstar.png",
    freq: "(35)",
},
{
    image_url:"https://n1.sdlcdn.com/imgs/j/r/c/Fashion-Dream-Girl-s-Patola-SDL158991205-1-47aea.jpg",
    name: "Fashion Dream Girl's Patola Printed Rajastani Lehenga Choli",
    strikedprice: "MRP  Rs. 2,499 ",
    price: 519,
    offer: "79% OFF",
    rating:"fivestar.png",
    freq: "(86)",
},
{
    image_url:"https://n2.sdlcdn.com/imgs/k/b/d/NEW-COLLECTIONS-Jeans-BabaSuit-SDL328722987-1-a92e4.jpeg",
    name: "NEW COLLECTIONS Jeans BabaSuit",
    strikedprice: "MRP  Rs. 999",
    price: 349,
    offer: "65% OFF",
    rating:"fivestar.png",
    freq: "(34)",
},
{
    image_url:"https://n3.sdlcdn.com/imgs/i/c/r/Sathiyas-Set-of-5-Printed-SDL045337200-1-5994f.jpeg",
    name: "Sathiyas 5Set Printed Cotton Shirts and Shorts- 0-6 months Babies",
    strikedprice: "MRP  Rs. 799",
    price: 279,
    offer: "53% OFF",
    rating:"fivestar.png",
    freq: "(46)",
},
{
    image_url:"https://n4.sdlcdn.com/imgs/k/b/u/230X258_sharpened/AGRAYYANA-Gulab-Tafetta-Sattin-Semi-SDL385538873-1-908d0.jpeg",
    name: "AGRAYYANA Gulab Tafetta Sattin Semi-Stitched girl's Lehenga Choli",
    strikedprice: "MRP  Rs. 1,899",
    price: 479,
    offer: "72% OFF",
    rating:"fivestar.png",
    freq: "(94)",
},
{
    image_url:"https://n2.sdlcdn.com/imgs/j/t/m/230X258_sharpened/Clothonics-kids-frock-SDL378386848-1-1d897.jpeg",
    name: "Little Kids - Cotton Blend Green Baby Girl Frock ( Pack of 1 )",
    strikedprice: "MRP  Rs. 599",
    price: 239,
    offer: "60% OFF",
    rating:"3star.png",
    freq: "(4)",
},
{
    image_url:"https://n1.sdlcdn.com/imgs/j/t/0/JGJ-Baby-Boy-s-Baby-SDL366352178-1-8ae96.jpg",
    name: "JGJ Baby Boy's & Girl's Jumbo The Elephant Dungaree(0-6months)",
    strikedprice: "MRP  Rs. 999 ",
    price: 279,
    offer: "72% OFF",
    rating:"fivestar.png",
    freq: "(52)",
},


    

];




// ***** dropdown menu part *****

var dropdown = document.getElementsByClassName("dropdown-btn1");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
this.classList.toggle("active");
var dropdownContent = document.querySelector(".dropdown-box1");
if (dropdownContent.style.display === "block") {
dropdownContent.style.display = "none";
} else {
dropdownContent.style.display = "block";
}
});
} 

var dropdown = document.getElementsByClassName("dropdown-btn2");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
this.classList.toggle("active");
var dropdownContent = document.querySelector(".dropdown-box2");
if (dropdownContent.style.display === "block") {
dropdownContent.style.display = "none";
} else {
dropdownContent.style.display = "block";
}
});
} 

var dropdown = document.getElementsByClassName("dropdown-btn3");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
this.classList.toggle("active");
var dropdownContent = document.querySelector(".dropdown-box3");
if (dropdownContent.style.display === "block") {
dropdownContent.style.display = "none";
} else {
dropdownContent.style.display = "block";
}
});
} 

var dropdown = document.getElementsByClassName("dropdown-btn4");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
this.classList.toggle("active");
var dropdownContent = document.querySelector(".dropdown-box4");
if (dropdownContent.style.display === "block") {
dropdownContent.style.display = "none";
} else {
dropdownContent.style.display = "block";
}
});
} 

var dropdown = document.getElementsByClassName("dropdown-btn5");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
this.classList.toggle("active");
var dropdownContent = document.querySelector(".dropdown-box5");
if (dropdownContent.style.display === "block") {
dropdownContent.style.display = "none";
} else {
dropdownContent.style.display = "block";
}
});
} 

var dropdown = document.getElementsByClassName("dropdown-btn6");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
this.classList.toggle("active");
var dropdownContent = document.querySelector(".dropdown-box6");
if (dropdownContent.style.display === "block") {
dropdownContent.style.display = "none";
} else {
dropdownContent.style.display = "block";
}
});
} 

var dropdown = document.getElementsByClassName("dropdown-btn7");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
this.classList.toggle("active");
var dropdownContent = document.querySelector(".dropdown-box7");
if (dropdownContent.style.display === "block") {
dropdownContent.style.display = "none";
} else {
dropdownContent.style.display = "block";
}
});
} 


var dropdown = document.getElementsByClassName("dropdown-btn8");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
this.classList.toggle("active");
var dropdownContent = document.querySelector(".dropdown-box8");
if (dropdownContent.style.display === "block") {
dropdownContent.style.display = "none";
} else {
dropdownContent.style.display = "block";
}
});
} 

// **** end of dropdown menu ****

// **** mapping of the images ****

window.addEventListener("load", function(){
    displayKidsData(kidsData);
});

    var cartArr = JSON.parse(localStorage.getItem("cartitems")) || [];     

function displayKidsData(kidsData)
{
    document.querySelector("#kidspage").innerHTML = "";
        
    kidsData.map(function mapping(elem){
        var box = document.createElement("div");
    box.setAttribute("id", "zoom");

        var image = document.createElement("img");
        image.src = elem.image_url;
    image.setAttribute("id", "imagesp")

        var name = document.createElement("p");
        name.innerText = elem.name;
    name.setAttribute("class","itemname");

    // price tag part
        var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class","pricediv");

        var striked = document.createElement("p");
        striked.innerText = elem.strikedprice;
    striked.setAttribute("class", "striked");

        var price = document.createElement("p");
        price.innerText = "Rs"+" " +elem.price;
    price.setAttribute("class", "itemprice");

        var btn = document.createElement("button");
        btn.innerText = elem.offer
    btn.setAttribute("class", "btn");
    
        priceDiv.append(striked, price, btn);
    // price tag end 
    
    // rating tag part 
        var ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class", "ratingDiv");
        var review = document.createElement("img");
    review.setAttribute("class", "itemreview");
        review.src = elem.rating;
        var freq = document.createElement("p");
        freq.innerText = elem.freq;
    freq.setAttribute("class", "itemfreq");

    ratingDiv.append(review, freq);
    // rating part end 

        var cartbtn = document.createElement("button");
        cartbtn.innerText = "Add to Cart"
    cartbtn.setAttribute("class", "cartbtn");

    cartbtn.addEventListener("click", function(){
        addToCart(elem)
    });

        box.append(image, name, priceDiv, ratingDiv, cartbtn);

        document.querySelector("#kidspage").append(box);


        // cart button function *******************


        function addToCart(elem)
        {
            // console.log(elem);
            cartArr.push(elem);
            // console.log(cartArr);
            localStorage.setItem("cartitems", JSON.stringify(cartArr));
            alert("Item added to the cart");
        }

    });
}



// sorting **********************


 
function handlePriceSort()
{
    var selected = document.querySelector("#filter").value;
    // console.log("im in");
    if(selected == "htl")
    {
        console.log(selected)
        kidsData.sort(function (a,b){
            return b.price - a.price;
        });
        console.log(kidsData);
        displayKidsData(kidsData);
    }
    if(selected == "lth")
    {
        console.log(selected)
        kidsData.sort(function (a,b){
            return a.price - b.price;
        });
        console.log(kidsData);
        displayKidsData(kidsData);
    }
}












// var image = document.createElement("img");
// image.src = "3halfstar.png";
// document.querySelector("#kidspage").append(image);




// {
//     image_url:"",
//     name: "",
//     strikedprice: "",
//     price: ,
//     offer: "",
//     rating:"",
//   },











