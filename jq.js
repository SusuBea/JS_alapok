$(function(){

    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenykezeles1();
    esemenykezeles2();
  

  
  });

  function elemekElerese1() {
    const ELEM = $("section h2")
    const TARTALOM = ELEM.html()
    console.log(TARTALOM)
}


function elemekElerese2(){
    const ELEM = $("#ide")
    ELEM.html("<p>Jó reggelt!</p>")
}

function elemekElerese3(){
    const ELEM = $(".ide")
    ELEM.html("<p>Jó reggelt!</p>")
}

function elemekElerese4(){
    const ELEM = $(".lista")
    for (let index = 0; index < 5; index++) {
        let vel = Math.floor(Math.random()*21+10)
        ELEM.append(vel, ", ")

        
    }

}

function elemekFormazasa1(){
    const ELEM = $(".lista")
    ELEM.addClass("formazott")


}

function esemenykezeles1(){
    const ELEM = $(".lista")
    ELEM.on("click", function(){
        const TARTALOM = ELEM.html()
        $(".kattintasutan").html(TARTALOM)
        $(".kattintasutan").addClass("formazott")
      
    })

}

function esemenykezeles2(){
    const ELEM = $(".feladat")
    ELEM.html("<button>OK</button>")
    const GOMB = $(".feladat button").on("click", function(){
        ELEM.append("<div><img src='tree.jpg' class='tree'></div>")
        esemenykezeles3();
    })
   
}

function esemenykezeles3(){
    const ELEM = $(".feladat  img")
    console.log(ELEM)
    ELEM.on("mouseenter", function(){
        ELEM.addClass("meretezes")



})
}


