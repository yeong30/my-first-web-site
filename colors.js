let Links ={
    setColors : function(color){
        var a_list = document.querySelectorAll('a');
        var i= 0;
        while(i < a_list.length){
            a_list[i].style.color=color;
            i = i+1;
        }
    }
}
let Body= {

    setColors :   function (color){
        $( "a" ).css( "color",color );
    },
    setBackground: function (color){
        $( "body" ).css( "backgroundColor", color );
    },
}

function nightDayHandler(self){
    if(self.value==='night'){
        Body.setBackground('black');
        
        Body.setColors('blue');

        self.value='day';



    }else{                    
        Body.setBackground('pink');
        Body.setColors('green');
        self.value='night';
    }
}       