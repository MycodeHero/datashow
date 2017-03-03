require('../../less/pie.less');
let componentBaseFactory = require('./componentBase.js');
let componentPieFactory =(config)=>{
    let component = componentBaseFactory(config).addClass('componentPie');
    const data = config.data;
    //
    let oPie= $('<canvas width = 500 height = 500/>').get(0);
    component.append(oPie);
    let ctx = oPie.getContext('2d');
    let r = oPie.width/2;
    //画饼图
    ctx.fillStyle = 'orange'
    ctx.beginPath();
    ctx.arc(r, r, r, 0, Math.PI * 2, 0);
    ctx.fill();


    let ocav = $('<canvas width = 500 height = 500/>').get(0);
    component.append(ocav)
    let oct = ocav.getContext('2d');
    let rTrue = r / 2.5;
    let allPi = 2 * Math.PI;
    let eAngle = 1.5*Math.PI;
    let staAngle = 1.5*Math.PI
    data.forEach((ele, index)=>{
        oct.beginPath();
        eAngle += allPi * ele[1];
        oct.moveTo(r, r);
        oct.arc(r, r, r, staAngle, eAngle, 0);
        oct.fillStyle = ele[2];
        oct.fill();
        let justAngle = (eAngle - staAngle) / 2 + staAngle;
        let text = $('<div/>').text(ele[0]).addClass('oText');
        $('.oText').css('position', 'absolute')
        let trueX = Math.abs(rTrue * Math.cos(allPi -justAngle));
        let trueY = Math.abs(rTrue * Math.sin(allPi - justAngle));
        if((justAngle >= 3 * Math.PI && justAngle < 3.5 * Math.PI) || (justAngle > 1.5*Math.PI && justAngle < 2 * Math.PI)){
            text.css({top : rTrue - trueY - 15, color : ele[2]});
        }else if(justAngle >= 2 * Math.PI && justAngle < 3 * Math.PI){
            text.css({position : "absolute", bottom : rTrue - trueY - 15, color : ele[2]});
        }
        
        if(justAngle >= 1.5 * Math.PI && justAngle < 2.5 * Math.PI){
            text.css({position : "absolute", left : rTrue + trueX + 3, color : ele[2]});
        }else if(justAngle >= 2.5 * Math.PI && justAngle < 3.5 * Math.PI){
            text.css({position : "absolute", right : rTrue + trueX + 3, color : ele[2]});
        }
        staAngle = eAngle;
        component.append(text);
    })

    var tcav = $('<canvas width = 500 height = 500/>').get(0);
    component.append(tcav);
    var ctx1 = tcav.getContext('2d');
    ctx1.fillStyle = 'orange'

    function draw(percent){
        ctx1.clearRect(0, 0, 500, 500)
        ctx1.beginPath();
        ctx1.moveTo(r, r)
        ctx1.arc(r, r, r, Math.PI * 3.5, Math.PI * 1.5 + Math.PI * 2 * percent , 1);
        ctx1.fill();
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
    return component
}
module.exports = componentPieFactory;