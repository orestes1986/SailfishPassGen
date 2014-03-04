function hsore(str, noChar){
   // console.log("Hey HSORE " + str);
    var crpt = new Array([]);
    crpt[0] = 0;
    crpt[1] = 0;
    crpt[2] = 0;
    crpt[3] = 0;
    var k = 0;
    var j = 0;
    var outPtt = "";
    while (str[k]){
        var l = 0;
        while (str[l]){
            crpt[0] += Math.abs(str.charCodeAt(l) - str.charCodeAt(k));
            crpt[1] += Math.abs(str.charCodeAt(l) + str.charCodeAt(k));
            crpt[2] += Math.abs(str.charCodeAt(l) + str.charCodeAt(l));
            crpt[3] += Math.abs(str.charCodeAt(k) + str.charCodeAt(k));
            l++;
        }
        k++;
    }
    var crpttt = 0;
    for (var i = 0; i < crpt.length; i++){
        for (j = 0; j < crpt.length; j++){
            crpttt += crpt[j];
        }
        crpt[crpt.length] = crpt[i] + crpttt;
        if (crpt.length > 16){
         break;
        }
    }
    for (var m = 0; m < crpt.length; m++){
        while ((crpt[m] < 33) || (crpt[m] > 126)){

            if (crpt[m] > 1000){
                crpt[m] = crpt[m] / 10;
            } else if (crpt[m] > 126){
                crpt[m] = crpt[m] / 1.5;
            }
            if (crpt[m] < 33){
                crpt[m] = crpt[m] * 1.5;
            }
        }
    }
    var adddinng = 40;
    var removing = 20;
    for (var g = 0; g < crpt.length; g++) {
        for (i = 0; i < crpt.length; i++) {
            for (j = 0; j < crpt.length; j++) {
                if ((Math.abs(crpt[i] - crpt[j]) < 11) && (i != j)){
                    if (i > j){
                        if (i > 80){
                            i -= 10;
                        }else{
                            i += 10;
                        }
                    } else {
                        if (j > 80){
                            j -= 10;
                        }else{
                            j += 10;
                        }
                    }
                    crpt[i] -= 2;
                }
            }
        }
    }
    for (m = 0; m < crpt.length; m++){
        while ((crpt[m] < 33) || (crpt[m] > 126)){
            if (crpt[m] > 1000){
                crpt[m] = crpt[m] / 10;
            } else if (crpt[m] > 126){
                crpt[m] = crpt[m] / 1.5;
            }
            if (crpt[m] < 33){
                crpt[m] = crpt[m] * 1.5;
            }
        }
    }
    var numFlag = false;
    for (var n = 0; n < 4; n++){
        if((crpt[n] > 48) && (crpt[n] < 57)){
            numFlag = true;
        }
    }
    if(numFlag === false){
        while((crpt[3] < 48) || (crpt[3] > 57)){
            if (crpt[3] < 48){
                crpt[3] += 8;
            } else if (crpt[3] > 57){
                crpt[3] -= 8;
            }
        }
    }
    var posit = new Array([]);
    numFlag = 0;
    var repeat = 0;
    var repeatA = 0;
    while (numFlag < 4){
        repeat++;
        console.log("repeat: " + repeat);
        if (repeat > 5){
            break;
        }
        console.log("numflag: " + numFlag);
        posit = new Array([]);
        numFlag = 0;
        for(m = 0; m < crpt.length; m++){
            if ((crpt[m] > 48) && (crpt[m] < 57)){
                console.log("numflag: " + crpt[m]);
                numFlag++;
                posit[posit.length - 1] = m;
            } else if (m == (posit[posit.length - 1] + 3)) {
                repeatA = 0;
                while ((crpt[m] < 48) || (crpt[m] > 57)){
                    repeatA++;
                    console.log("repeatA: " + repeatA);
                    if (repeatA > 5){
                        break;
                    }
                    if(crpt[m] < 48){
                        crpt[m] += 10;
                    } else {
                        crpt[m] -= 10;
                    }
                }
            }
        }
    }
    var capFlag = false;
    for (n = 0; n < 3; n++){
        if((crpt[n] > 65) && (crpt[n] < 90)){
            capFlag = true;
        }
    }
    if(capFlag === false){
        while((crpt[2] < 65) || (crpt[2] > 90)){
            if (crpt[2] < 65){
                crpt[2] += 20;
            } else if (crpt[2] > 90){
                crpt[2] -= 20;
            }
        }
    }
    var flag = false;
    while (flag === false){
        flag = true;
        for (n = 0; n < noChar.length; n++){
            for(m = 0; m < crpt.length; m++){
               if (String.fromCharCode(Math.round(crpt[m])) === noChar[n]){
                    console.log("Found it!!! " + String.fromCharCode(Math.round(crpt[m])));
                    flag = false;
                    if (crpt[m] < 126){
                        crpt[m]++;
                    } else {
                        crpt[m]--;
                    } if (crpt[m] == 125){
                        crpt[m] -= 10;
                    }
                }
            }
        }
    }
    for (var f = 0; f < 17; f++) {
        console.log("Crpt " + f + ": " + crpt[f]);
        outPtt += String.fromCharCode(Math.round(crpt[f]));
    }

    /*console.log("crpt: " + crpt);*/
    console.log("outPtt: " + outPtt);
    return outPtt;
}
function func(us, prov, times, leng, notWant) {

    if (us === ""){
        us = "User's insignia";
    }
    if (prov === ""){
        prov = "Service/Provider insignia";
    }
    if ((!(isFinite(times))) || (times === "")) {
            times = 1;
    }
    if ((!(isFinite(leng))) || (leng === "")) {
            leng = 50;
    }

    var strum =  us + prov + times + leng;
    console.log(strum);

    console.log("Hey Func " + strum);
    console.log("times : " + times);
    for (var j = 0; j <= times; j++){
        strum = hsore(strum, notWant);
    }
    var shtring = "";
    if(leng < strum.length){
        for (var i = 0; i< leng; i++){
            shtring += strum[i];
        }
    } else {
        shtring = strum;
    }
    console.log("my string: " + shtring);
    return shtring;
}
