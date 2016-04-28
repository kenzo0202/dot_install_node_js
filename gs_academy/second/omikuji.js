    var omikuji = function(){
              //分岐処理
    //1= 大吉、2=中吉、3=小吉,4=吉、5=凶、6=大凶
    //＊ #viewに対して文字を表示する
    //* いい結果には赤とか明るい色、悪い結果は闇な感じ
    //イメージを使ってもOK
    var kuji = Math.floor(Math.random() * 6 + 1);
    if (kuji == 1){
        var area =document.getElementById("omikuji")
        area.innerHTML="大吉";
        area.style.backgroundColor='red';
    }else if (kuji == 2){
        var area =document.getElementById("omikuji")
        area.innerHTML="中吉";
        area.style.backgroundColor='red';
    }else if (kuji == 3){
        var area =document.getElementById("omikuji")
        area.innerHTML="小吉";
        area.style.backgroundColor='pink';
    }else if (kuji == 4){
        var area =document.getElementById("omikuji")
        area.innerHTML="吉";
        area.style.backgroundColor='pink';
    }else if (kuji == 5){
        var area =document.getElementById("omikuji")
        area.innerHTML="凶";
        area.style.backgroundColor='purple';
    }else if (kuji == 6){
        var area =document.getElementById("omikuji")
        area.innerHTML="大凶";
        area.style.backgroundColor='purple';
    }
    
        }
        
    setInterval(omikuji,1000);