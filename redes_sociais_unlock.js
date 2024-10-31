<script>/*<![CDATA[*/
var buttonTimes = {
    'Sbutton1': 10000, // 10 segundos
    'Sbutton2': 10000, // 10 segundos
    'Sbutton3': 10000, // 10 segundos
    'Sbutton4': 10000,  // 10 segundos
    'Sbutton5': 1000  // 10 segundos
};

function show(buttonId, verifyingId, downloadButtonId) {
    var time = buttonTimes[buttonId] || 10000; // Padrão para 10000ms se não especificado
    document.getElementById(buttonId).style.display = "none";
    document.getElementById(verifyingId).style.display = "";
    setTimeout(function() {
        document.getElementById(verifyingId).style.display = "none";
        document.getElementById(downloadButtonId).style.display = "";
    }, time);
}
/*]]>*/</script>