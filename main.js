document.getElementById('output').style.visibility = 'hidden';

document.getElementById('weightInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let pounds = e.target.value;
    document.getElementById('gramsOutput').innerHTML = pounds/0.0022046;
    document.getElementById('kgOutput').innerHTML = pounds/2.2046;
    document.getElementById('ounceOutput').innerHTML = pounds*16;
});