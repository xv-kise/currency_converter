var box1 = document.getElementById("textbox1");
var result = document.getElementById("result");
var alphabet_money = //アルファベットに対応する通貨記号一覧
{"A":"₳", "B":"฿", "C":"¢", "D":"₫", "E":"€", "F":"₣", "G":"₲", "K":"₭", "L":"₺",
    "M":"₥", "N":"₦", "O":"¤", "P":"₽", "S":"$", "T":"₮", "W":"₩", "Y":"¥"}

function changelabel(label, next_text){ //未使用
    let text = document.getElementById(label);
    text.innerHTML = next_text;
}
function conv_currency(text){ //通貨記号に変換する関数
    const original = text;
    var result = [];
    for (var loop = 0; loop < original.length; loop++) {
        i = original.charAt(loop); //その文字の変換先が入る変数
        if (i == "\n") {//改行への対応
            i = "<br>" 
        }
        if (i.toUpperCase() in alphabet_money) {
            i = alphabet_money[i.toUpperCase()];
        }
        result.push(i);
    }
    result = result.join("");
    return result;
}
function convert_and_display(){//結果を表示する関数
    result.innerHTML = "";
    let resultb = document.createElement("b");
    resultb.textContent = conv_currency(box1.value);
    result.appendChild(resultb);
}
