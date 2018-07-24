

//把後端的資料存進來，轉成json物件
// var xhr = new XMLHttpRequest();
// xhr.open('GET','http://localhost:8000/api/menus', true);
// xhr.send();

// var data;

// var onloadHandle = function(){

//   data = JSON.parse(JSON.parse(xhr.responseText).data);

//   console.log(data.length);
// }

// xhr.onload = onloadHandle;


// console.log('{{menu}}')

//動態產生菜單
var item_templates = "<li>{{num}}.{{title}}{{price}}<div class='addbtn_1' name_value={{name_value}} amount_value={{amount_value}} id={{id}}>+</div></li>";

var shoplist={};

shoplist.name="購物車";
shoplist.list=[];

// console.log(data)



$.ajax({
  url:"http://127.0.0.1:8000/api/menus",
  success: function(data){
    // 從views取回data
    var menu = JSON.parse(data['data']);

    for(var i=0;i<menu.length;i++) {
    var now_item;
    now_item = item_templates.replace("{{title}}",menu[i].fields.title)
                              .replace("{{num}}",i+1)
                              .replace("{{price}}"," $"+menu[i].fields.price)
                              .replace("{{id}}","menu_"+i)
                              .replace('{{name_value}}',menu[i].fields.title)
                              .replace("{{amount_value}}",menu[i].fields.price)
      $("#result").append(now_item);


        // $("#menu_"+i).click(function(){
        //   console.log(menu[i])
        //   console.log(menu[i].fields)
        //   console.log(menu[i].fields.title)
        //   name = menu[i].fields.title;
        //   price = menu[i].fields.price;
        //   shoplist.list.push({
        //   name: name,
        //   price: price
        //   });
        //   order_menu();
        // })

           $("#menu_"+i).click(function(i){
            price = $(this).attr('amount_value')
            name = $(this).attr('name_value')
            shoplist.list.push({
            name: name,
            price: price
      });
            order_menu();
    });


    };
  },
})




//這裡其實沒有用到ajax,只是不知道為何把ajax拿掉就不能動，所以暫時留著
// $.ajax(
// {
//   url: "http://localhost:8000/api/menus",


//   success: function(data){
//   console.log(123)
//   console.log(data)
//   for(var i=0;i<data.length;i++){
//     var now_item;
//     now_item = item_templates.replace("{{title}}",data[i].fields.title)
//                               .replace("{{num}}",i+1)
//                               .replace("{{price}}"," $"+data[i].fields.price)
//                               .replace("{{id}}","menu_"+i);


//         $("#result").append(now_item);
//   };

      
//       // for(var i=0;i<data.length;i++){
//       //     $("#"+"menu_"+i).click(function(){
//       //     name = data[i].fields.title;
//       //     price = data[i].fields.price;
//       //     shoplist.list.push({
//       //     name: name,
//       //     price: price
//       //     });
//       //     order_menu();
//       //   })
//       // };


// //用id選取
//    $("#menu_0").click(function(){
//       name = data[0].fields.title;
//       price = data[0].fields.price;
//       shoplist.list.push({
//         name: name,
//         price: price
//       });
//       order_menu();
//     });

//     $("#menu_1").click(function(){
//         name = data[1].fields.title;
//         price = data[1].fields.price;
//         shoplist.list.push({
//           name: name,
//           price: price
//       });
//       order_menu();
//     });

//     $('#menu_2').click(function(){
//         name = data[2].fields.title;
//         price = data[2].fields.price;
//         shoplist.list.push({
//           name: name,
//           price: price
//         });
//         order_menu();
//     });

//     $('#menu_3').click(function(){
//          name = data[3].fields.title;
//         price = data[3].fields.price;
//         shoplist.list.push({
//           name: name,
//           price: price
//         });
//         order_menu();
//         });
//     $('#menu_4').click(function(){
//          name = data[4].fields.title;
//         price = data[4].fields.price;
//         shoplist.list.push({
//           name: name,
//           price: price
//         });
//         order_menu();
//         });

  

// console.log(shoplist.list);

   

// //動態點餐，用
function order_menu(){
  $("#items_list").html("");

  var item_html = "<li id={{id}} class='buy_item'>{{num}}.{{name}}<div class='price'>{{price}}</div><div class='del_btn'>X</div></li>";
  var total_html="<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";

  var total_price = 0;
  for(i=0;i<shoplist.list.length;i++){
    var item=shoplist.list[i];
    total_price+=parseInt(item.price);
    var current_item_html=item_html.replace("{{num}}",i+1)
                                   .replace("{{name}}",item.name)
                                   .replace("{{id}}","buyitem_"+i)
                                   .replace("{{price}}",item.price);
    $("#items_list").append(current_item_html);
    $("#"+"buyitem_"+i).click(function(id){
        remove_item("buyitem_"+i);
      });
    }

    var current_total_html = total_html.replace("{{price}}",total_price);
    $("#items_list").append(current_total_html);
}

// //刪除菜單
function remove_item(id){
  shoplist.list.splice(id,1);
  order_menu();
}

   

//     }
//   }
// );

// //以上都是包在ajax裡面，雖然沒什麼必要，之後再改






















