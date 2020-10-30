function moLoader(){

    

    let data = ""
    let a = .1
    let b = .1
    let c = 44
    let d = 22
    let e = -22
    let f = 36

    for(let i = 0 ; i<arguments.length; i++){
        data += `
        <i style="animation: rotate 1s infinite cubic-bezier(0.09, 0.6, 0.8, 0.03); transform-origin: 50% 100% 0; position: absolute; display: inline-block; top: 50%; left: 50%; border: solid 6px transparent; border-bottom: none; animation-timing-function: cubic-bezier(0.09, ${a}, ${b}, 0.03); width: ${c}px; height: ${d}px; margin-top: ${e}px; margin-left: ${e}px; border-top-left-radius: ${f}px; border-top-right-radius: ${f}px; border-color: ${arguments[i]}"> </i>
        `
        a = a + .2
        b = b + .1
        c = c + 14 
        d = d + 7
        e = e - 7
        f = f + 6
    }

    let elementLoader = document.createElement("div")
    let elementLoaderId = document.createAttribute("id")
    elementLoaderId.value = "mo-loader"
    let elementLoaderStyle = document.createAttribute("style")
    elementLoaderStyle.value = "position:fixed; top: 0px; left: 0px; height: 100%; width: 100%; background: white; display: flex; justify-content: center; align-items: center; z-index: 99999;"
    elementLoader.setAttributeNode(elementLoaderId)
    elementLoader.setAttributeNode(elementLoaderStyle)
    document.body.appendChild(elementLoader)
    elementLoader.innerHTML = `
         <div class="mo-spiner" style="animation: rotate 10s infinite linear; position: relative; display: block; margin: auto; width: 142px; height: 142px;">
         ${data}
         </div>
    `


    let elementStyleForMoLoader = document.createElement("style")
    let elementStyleForMoLoaderId = document.createAttribute("id")
    elementStyleForMoLoaderId.value = "style-for-mo-loader"
    elementStyleForMoLoader.setAttributeNode(elementStyleForMoLoaderId)
    document.head.appendChild(elementStyleForMoLoader)
    elementStyleForMoLoader.innerHTML = `
     @keyframes rotate{
         to {
             transform: rotate(360deg)
         }
    `
    
    


    
    onload = function(){
        let opacity = 1
        let x = setInterval(function(){
            if(opacity > 0){
                opacity = opacity - .01
                document.querySelector("#mo-loader").style.opacity = opacity
            }else{
                clearInterval(x)
                document.querySelector("#style-for-mo-loader").remove()
                document.querySelector("#mo-loader").remove()
                document.querySelector("#script-loader").remove()
            }
        },1)

     
    }
    
}

moLoader("rgb(45,62,80)","rgb(45,62,80)","rgb(45,62,80)","rgb(167,14,17)","rgb(167,14,17)","rgb(45,62,80)","rgb(45,62,80)","rgb(45,62,80)")

