var element = document.getElementById('main');
function generatePdf() {
    html2pdf(element,{
        margin:       0.5,
        filename:     'timeTable.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    });
}

var sbmt = document.getElementById('submitButton');
sbmt.addEventListener('click',generatePdf);

// var fun = function() {
//     document.body.style.backgroundColor = "yellow";
// }
// window.addEventListener('click',fun);

var input = document.querySelectorAll('input')
const arr=["orange","red","lightgreen","blue"]
function checkFilled() {
    var val=0;
    for (var i = 0;i < input.length; i++) 
    {
        if (input[i].value !== '') {
            input[i].style.background = "lightgreen";
        }
        val++;
    }
}
window.addEventListener('change',checkFilled);

function riset() {
    for(var i=0;i<input.length;i++) {
        input[i].value = '';
        input[i].style.background = 'white';
    }
}
var rst = document.getElementById('reset');
rst.addEventListener('click',riset);


//styling chage kijiye mast lagnelagega ,, ha abhi sochte hai 
//aisa kijiye ki reset type button na bana kar ek function bana dijiye uske sath ye bhi function run hoga
//rukiye 