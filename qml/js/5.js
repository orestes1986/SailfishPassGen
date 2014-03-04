
function hsore(str, noChar){
   // console.log("Hey HSORE " + str);
    var crpt = new Array;
    crpt[0] = 0;
    crpt[1] = 0;
    crpt[2] = 0;
    crpt[3] = 0;
    var k = 0;
    var outPtt = "";
    while (str[k]){
        var l = 0;
        while (str[l]){
            crpt[0] += Math.abs((Math.pow(str.charCodeAt(l), (1/2))*l) - (Math.pow(str.charCodeAt(k), (1/9)))*k);
            crpt[1] += Math.abs((Math.pow(str.charCodeAt(l), (1/3))*l) - (Math.pow(str.charCodeAt(k), (1/5)))*k);
            crpt[2] += Math.abs((Math.pow(str.charCodeAt(l), (1/9))*l) - (Math.pow(str.charCodeAt(k), (1/3)))*k);
            crpt[3] += Math.abs((Math.pow(str.charCodeAt(l), (1/5))*l) - (Math.pow(str.charCodeAt(k), (1/2)))*k);
            l++;
        }
        k++;
    }
    var crpttt = 0;
    for (var i = 0; i < crpt.length; i++){
        for (var j = 0; j < crpt.length; j++){
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
        for (var i = 0; i < crpt.length; i++) {
            for (var j = 0; j < crpt.length; j++) {
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
    var numFlag = false;
    for (var n = 0; n < 4; n++){
        if((crpt[n] > 48) && (crpt[n] < 57)){
            numFlag = true;
        }
    }
    if(numFlag == false){
        while((crpt[3] < 48) || (crpt[3] > 57)){
            if (crpt[3] < 48){
                crpt[3] += 8;
            } else if (crpt[3] > 57){
                crpt[3] -= 8;
            }
        }
    }
    var capFlag = false;
    for (var n = 0; n < 3; n++){
        if((crpt[n] > 65) && (crpt[n] < 90)){
            capFlag = true;
        }
    }
    if(capFlag == false){
        while((crpt[2] < 65) || (crpt[2] > 90)){
            if (crpt[2] < 65){
                crpt[2] += 20;
            } else if (crpt[2] > 90){
                crpt[2] -= 20;
            }
        }
    }
    var flag = false;
    while (flag == false){
        flag = true;
        for (var n = 0; n < noChar.length; n++){
            for(var m = 0; m < crpt.length; m++){
               if (String.fromCharCode(Math.round(crpt[m])) == noChar[n]){
                    console.log("Found it!!! " + String.fromCharCode(Math.round(crpt[m])));
                    flag = false;
                    if (crpt[m] < 126){
                        crpt[m]++;
                    } else if (crpt[m] == 125){
                        crpt[m] -= 25;
                    } else {
                        crpt[m]--;
                    }
                }
            }
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

    for (var f = 0; f < 17; f++) {
        console.log("Crpt " + f + ": " + crpt[f]);
        outPtt += String.fromCharCode(Math.round(crpt[f]));
    }

    /*console.log("crpt: " + crpt);*/
    console.log("outPtt: " + outPtt);
    return outPtt;
}
function func(us, prov, times, leng, notWant) {

    if (us == ""){
        us = "User's insignia";
    }
    if (prov == ""){
        prov = "Service/Provider insignia";
    }
    if ((!(isFinite(times))) || (times == "")) {
            times = 1;
    }
    if ((!(isFinite(leng))) || (leng == "")) {
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
