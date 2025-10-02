var box1 = document.getElementById("textbox1");
var alphabet_money = //アルファベットに対応する通貨記号一覧（ここになければそのまま返される）
{"A":"₳", "B":"฿", "C":"¢", "D":"₫", "E":"€", "F":"₣", "G":"₲", "K":"₭", "L":"₺",
    "M":"₥", "N":"₦", "O":"¤", "P":"₽", "S":"$", "T":"₮", "W":"₩", "Y":"¥"}

function changelabel(next_text){ //ラベルを変える関数（汎用）
    var text = document.getElementById("display");
    text.innerHTML = next_text;
}
function conv_currency(){ //通貨記号に変換する関数
    const original = box1.value;
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