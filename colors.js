var Link ={
    setColor: function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css('color', color);     // jquery
    }
} 
var Body = {
    setColor: function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function(color){
        // document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color);
    }            
}

function NightDayHandler(self){
    var target =document.querySelector('body');
    if(self.value==='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';
        night_day.value='day';
        Link.setColor('yellow');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='night';
        night_day.value='night';
        Link.setColor('blue');
    }
}