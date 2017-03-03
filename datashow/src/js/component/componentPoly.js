require('../../less/ploy.less')
let componentBaseFactory = require('./componentBase.js');
let componentPolyFactory = (config) =>{
    let component = componentBaseFactory(config).addClass('componentPoly');
    let lineChart = $('<canvas width = 500 height = 500></canvas>').get(0);
    component.append(lineChart);
    let ctx = lineChart.getContext('2d');
    let lineChart1 = $('<canvas width = 500 height = 500 class="cover"></canvas>').get(0);
    component.append(lineChart1);
    let ctx1 = lineChart1.getContext('2d');
    let width = lineChart.width;
    let height = lineChart.height;
    const data = config.data;
    let len = config.data.length;
    ctx.beginPath();
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 3;
    //画格
    for(let i = 0; i <= 10; i++){
        let y = height / 10;
        ctx.moveTo(0, y * i);
        ctx.lineTo(width, y * i);
        ctx.stroke();
    }
    for(let i = 0; i <= 7; i++){
        let x = width/ (len + 1);
        ctx.moveTo(x * i + 1, 0);
        ctx.lineTo(x * i + 1, height);
        ctx.stroke();
    }
    //x轴中的数据
    data.forEach((ele, index)=>{
        let x = width / (len + 1);
        var text = $('<div/>').text(ele[0]).css({width:'20px', left: x * (index + 1)/ 2.5 - 10, textAlign:'center'}).addClass('xAttr');
        component.append(text);
    })
    //draw函数
    function draw(per){
        ctx1.clearRect(0, 0, width, height);
        ctx1.strokeStyle = 'red'
        ctx1.lineWidth = 2;
        //X轴画圈
        data.forEach((ele, index)=>{
            let x = width / (len + 1) * (index + 1);
            let y = height * (1 - ele[1] * per);
            ctx1.beginPath();
            ctx1.moveTo(x, y)
            ctx1.arc(x, y, 4 , 0 , Math.PI * 2, 0);
            ctx1.fill();
        });
        data.forEach((ele, index)=>{
            ctx1.beginPath();
            let x = width / (len + 1) * (index + 1);
            let y = height * (1 - ele[1] * per);
            ctx1.fillStyle = ele[2];
            ctx1.font = '30px Arial'
            ctx1.fillText(ele[0], x - 10, y - 10);
        })
        ctx1.beginPath();
        ctx1.fillStyle = 'rgba(255, 0, 0, 0.4)';
        ctx1.moveTo(width/(len + 1), height)
        data.forEach((ele, index)=>{
            let x = width / (len + 1) * (index + 1);
            let y = height * (1 - ele[1] * per);
            ctx1.lineTo(x, y)
            if(index == 4){
                ctx1.lineTo(x, height);
                ctx1.closePath();
                ctx1.stroke();
                ctx1.fill();
            }
        })
    }
    component.on('loadComponent', function(){
        let index = 0;
        for(var i = 0; i < 100; i ++){
            setTimeout(()=>{
                index += 0.01;
                draw(index)
            },i * 35)
        }
    })


    component.on('leaveComponent', function(){
        let index = 1;
        for(var i = 0; i < 100; i ++){
            setTimeout(()=>{
                index -= 0.01;
                draw(index)
            },i * 35)
        }
    })
    return component;
}
module.exports = componentPolyFactory;