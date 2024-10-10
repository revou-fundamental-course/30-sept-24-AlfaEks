// Program Konversi Suhu

//const inputsuhu = document.getElementById("inputsuhu");
//const result = document.getElementById("result");
//let temp

//function konversi() {
    //temp = Number (inputsuhu.value);
    //temp = temp * 9 / 5 + 32;
    //result.textContent = temp + "°F";
//}

console.log("Java");

function konversi() {
    const inputsuhu = document.getElementById('inputsuhu').value;

    if (inputsuhu == '') {
        alert('Mohon input angka');
    } else {
        calculate(inputsuhu);
    }  
}

function calculate(value) {
    let result = parseInt(value) * 9 / 5 + 32;
    document.getElementById('hasilsuhu').value = result;
    document.getElementById('kalkulasi').value = value + ' x 9 / 5 + 32 = ' + result;
}

function reset() {
    document.getElementById('inputsuhu').value = '';
    document.getElementById('hasilsuhu').value = '';
    document.getElementById('kalkulasi').value = '';
}