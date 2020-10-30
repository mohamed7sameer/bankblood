// Extra small devices (portrait phones, less than 576px)
const xs = 575.98
// Small devices (landscape phones, less than 768px)
const sm = 767.98
// Medium devices (tablets, less than 992px)
const md = 991.98
// Large devices (desktops, less than 1200px)
const lg = 1199.98

const xImg = '../assets/imgs/'


const topNav = document.getElementById("top-nav")
const navbar = $(".navbar")

$("#slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    arrows: false,
    dots: true
})



$(".co-slider-2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    rtl: true,
    // arrows: false,
    dots: false,
    nextArrow: "#mo-blog .btns-arrows .btn-arrow-left",
    prevArrow: "#mo-blog .btns-arrows .btn-arrow-right",
    responsive: [
        {
          breakpoint: md,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
            breakpoint: sm,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
      ],
})



new WOW().init({
});



















const iconMap = xImg+"img_map.svg"
function initMap() {
  const myLatLng = {
    lat: 24.734360,
    lng: 46.701763
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatLng,
    disableDefaultUI: true,
    gestureHandling: "none"
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "اكتب هنا ما تشاء",
    icon: iconMap
  });
}










function _funMainSelect1(a,b,x){
  let option  = `<option disabled selected>${a}</option>`;
  $(b).empty();
  $(b).append(option);
  for(let i in x) {
    option = `<option>${i}</option>`;
    $(b).append(option);
  }
}


function _funMainSelect2(a,b,x=0,y,z){
  let option  = `<option disabled selected>${a}</option>`;
  $(b).empty();
  $(b).append(option);
  if(x == 0){
  }else{
    for(let i in x[y][z]){
      option = `<option>${x[y][z][i]}</option>`
      $(b).append(option);
    }
  }
    
}


function funMainSelect(a,b,c,z){
  // let governorate = countries.ar.egypt.governorate
  _funMainSelect1(b[0], b[1], a)
  _funMainSelect2(c[0], c[1])
  $(b[1]).on("change",function(){
    let y = $(b[1]).val()
    // let z = "cities"
    _funMainSelect2(c[0],c[1],a,y,z)
  })
}





function mAutoComplete(x){
  $(x).addClass("dropdown")
  $(x + " input").addClass("dropdown-toggle")
  $(x + " ul").addClass("dropdown-menu")
  $(x + " ul li").addClass("dropdown-item")
  $(x + " ul li").on("click",function(){
    $(x + " input").val(this.innerText)
    
  })
  $(x + " input.dropdown-toggle").on("keyup",function(){
    // $(x  + " .dropdown-menu").show()
    $(x + " .dropdown-menu").css("padding","0px")
    let val = $(x + " input.dropdown-toggle").val()
    let list = document.querySelectorAll(x + " .dropdown-menu .dropdown-item")
    for(let i = 0; i < list.length; i++){
      if(list[i].innerText.includes(val)){
        list[i].style.display = "block"
      }else{
        list[i].style.display = "none"
      }
    }
  })
}






function newAccountPage(){

  $( "#date-of-birth" ).datepicker({
    changeYear: true,
    changeMonth: true,
    autoSize: true,
    dateFormat: "yy-mm-dd",
    dayNames: [ "الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت" ],
    dayNamesMin:  [ "الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت" ],
    duration: "slow",
    firstDay: 6,
    hideIfNoPrevNext : true,
    maxDate : null,
    minDate : null,
    monthNames: [ "يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر" ],
    monthNamesShort  : [ "يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر" ],
    showAnim: "fold",
    showMonthAfterYear: true,
    yearRange: "1900:2015",
    // altFormat: "yy-mm-dd"
  });

  


    
  $( "#last-donation-date" ).datepicker({
    changeYear: true,
    changeMonth: true,
    autoSize: true,
    dateFormat: "yy-mm-dd",
    dayNames: [ "الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت" ],
    dayNamesMin:  [ "الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت" ],
    duration: "slow",
    firstDay: 6,
    hideIfNoPrevNext : true,
    maxDate : null,
    minDate : null,
    monthNames: [ "يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر" ],
    monthNamesShort  : [ "يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر" ],
    showAnim: "fold",
    showMonthAfterYear: true,
    yearRange: "2000:2020",
    // altFormat: "yy-mm-dd"
  });



  const countries = {
    ar: {
      egypt : {
        governorate: {
          "الإسكندرية" : {cities:["الإسكندرية","برج العرب","برج العرب الجديدة"]},
          "الإسماعيلية" : {cities:["الإسماعيلية","فايد","القنطرة شرق","القنطرة غرب","التل الكبير","أبو صوير المحطة","القصاصين الجديدة"]},
          "أسوان" : {cities:["أسوان","أسوان الجديدة","دراو","كوم أمبو","نصر النوبة","كلابشة","إدفو","الرديسية","البصيلية","السباعية","أبو سمبل السياحية"]},
          "أسيوط" : {cities:["أسيوط","أسيوط الجديدة","ديروط","منفلوط","القوصية","أبنوب","أبو تيج","الغنايم","ساحل سليم","البداري","صدفا"]},
          "الأقصر" : {cities:["الأقصر","الأقصر الجديدة","طيبة الجديدة","الزينية","البياضية","القرنة","أرمنت","الطود","إسنا"]},
          "البحر الأحمر" : {cities:["الغردقة","رأس غارب","سفاجا","القصير","مرسى علم","الشلاتين","حلايب"]},
          "البحيرة" : {cities:["دمنهور","كفر الدوار","رشيد","إدكو","أبو المطامير","أبو حمص","الدلنجات","المحمودية","الرحمانية","إيتاي البارود","حوش عيسى","شبراخيت","كوم حمادة","بدر","وادي النطرون","النوبارية الجديدة"]},
          "بني سويف" : {cities:["بني سويف","بني سويف الجديدة","الواسطى","ناصر","إهناسيا","ببا","سمسطا","الفشن"]},
          "بورسعيد" : {cities:["بورسعيد","بورفؤاد"]},
          "جنوب سيناء" : {cities:["الطور","شرم الشيخ","دهب","نويبع","طابا","سانت كاترين","أبو رديس","أبو زنيمة","رأس سدر"]},
          "الجيزة" : {cities:["الجيزة","السادس من أكتوبر","الشيخ زايد","الحوامدية","البدرشين","الصف","أطفيح","العياط","الباويطي","منشأة القناطر","أوسيم","كرداسة","أبو النمرس"]},
          "الدقهلية" : {cities:["المنصورة","طلخا","ميت غمر","دكرنس","أجا","منية النصر","السنبلاوين","الكردي","بني عبيد","المنزلة","تمي الأمديد","الجمالية","شربين","المطرية","بلقاس","ميت سلسيل","جمصة","محلة دمنة","نبروه"]},
          "دمياط" : {cities:["دمياط","دمياط الجديدة","رأس البر","فارسكور","كفر سعد","الزرقا","السرو","الروضة","كفر البطيخ","عزبة البرج","ميت أبو غالب"]},
          "سوهاج" : {cities:["سوهاج","سوهاج الجديدة","أخميم","أخميم الجديدة","البلينا","المراغة","المنشأة","دار السلام","جرجا","جهينة الغربية","ساقلتة","طما","طهطا"]},
          "السويس" : {cities:["السويس"]},
          "الشرقية" : {cities:["الزقازيق","العاشر من رمضان","منيا القمح","بلبيس","مشتول السوق","القنايات","أبو حماد","القرين","ههيا","أبو كبير","فاقوس","الصالحية الجديدة","الإبراهيمية","ديرب نجم","كفر صقر","أولاد صقر","الحسينية","صان الحجر القبلية","منشأة أبو عمر"]},
          "شمال سيناء" : {cities:["العريش","الشيخ زويد","رفح","بئر العبد","الحسنة","نخل"]},
          "الغربية" : {cities:["طنطا","المحلة الكبرى","كفر الزيات","زفتى","السنطة","قطور","بسيون","سمنود"]},
          "الفيوم" : {cities:["الفيوم","الفيوم الجديدة","طامية","سنورس","إطسا","إبشواي","يوسف الصديق"]},
          "القاهرة" : {cities:["القاهرة"]},
          "القليوبية" : {cities:["بنها","قليوب","شبرا الخيمة","القناطر الخيرية","الخانكة","كفر شكر","طوخ","قها","العبور","الخصوص","شبين القناطر"]},
          "قنا" : {cities:["قنا","قنا الجديدة","أبو تشت","نجع حمادي","دشنا","الوقف","قفط","نقادة","قوص","فرشوط"]},
          "كفر الشيخ" : {cities:["كفر الشيخ","دسوق","فوه","مطوبس","بلطيم","مصيف بلطيم","الحامول","بيلا","الرياض","سيدي سالم","قلين","سيدي غازي","برج البرلس","مسير"]},
          "مطروح" : {cities:["مرسى مطروح","الحمام","العلمين","الضبعة","النجيلة","سيدي براني","السلوم","سيوة"]},
          "المنوفية" : {cities:["شبين الكوم","مدينة السادات","منوف","سرس الليان","أشمون","الباجور","قويسنا","بركة السبع","تلا","الشهداء"]},
          "المنيا" : {cities:["المنيا","المنيا الجديدة","العدوة","مغاغة","بني مزار","مطاي","سمالوط","المدينة الفكرية","ملوي","دير مواس"]},
          "الوادي الجديد" : {cities:["الخارجة","باريس","موط","الفرافرة","بلاط"]},
        }
      }
    }
  }





  funMainSelect(countries.ar.egypt.governorate,["المحافظة", "#governorate"],["المدينة", "#cities"],"cities")
  mAutoComplete(".m-auto-complet")
  
}









function donationRequestAjax(){
  let site = "'https://cors-anywhere.herokuapp.com/http://ipda3-tech.com/blood-bank/api/v1/donation-requests?api_token=W4mx3VMIWetLcvEcyF554CfxjZHwdtQldbdlCl2XAaBTDIpNjKO1f7CHuwKl&page=1'"
  let xhttp = new XMLHttpRequest()
  xhttp.open('GET',site)
  xhttp.send()
  xhttp.onreadystatechange = function(){ 
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText)
    } 
  }
}



const classSticky = "mo-fixed"
$(window).on('scroll', function() {
  const x = $(window).scrollTop()
  if (x >= topNav.offsetHeight) {
    if(!navbar.hasClass(classSticky)){
      navbar.addClass(classSticky)
      navbar.css({
        "position" : "fixed",
        "top" : "0px",
        "left" : "0px",
        "width" : "100%"
      })
    }
  } else{
    if(navbar.hasClass(classSticky)){
      navbar.removeClass(classSticky)
      navbar.css({
        "position" : "",
        "top" : "",
        "left" : "",
        "width" : ""
      })
    }
  } 
});