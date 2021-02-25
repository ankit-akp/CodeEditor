let html = document.getElementById('html');
let css = document.getElementById('css');
let js = document.getElementById('js');
let op = document.getElementById('op').contentWindow.document;
function run() {

    addEventListener("keyup", () => {
        op.open();
        op.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>");
        op.close();
    })
}

run(); 