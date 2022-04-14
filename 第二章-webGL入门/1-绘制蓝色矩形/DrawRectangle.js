function main(params) {
    var canvas = document.getElementById('example')

    if(!canvas){
        console.log('error');
    }

    var ctx = canvas.getContext('2d')
    ctx.fillStyle = 'rgba(0,0,255,1)'
    ctx.fillRect(120, 10, 150, 150)
}