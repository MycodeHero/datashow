require('../../less/bar.less');
let componentBaseFactory = require('./componentBase.js');
let componentBarFactory = (config) => {
    let component = componentBaseFactory(config).addClass('componentBar');
    const data = config.data;
    data.forEach(function(ele, index){
        var itemWrapper = $('<div/>').addClass('itemWrapper').css({margin:'20px 0'});
        var text = $('<div/>').addClass('text').text(ele[0]);
        var wrapperInner = $('<div/>').addClass('wrapperInner').css({width:300 / 2 * ele[1]});
        var progressBar = $('<div/>').addClass('progressBar').css({background : ele[2]});
        var percent = $('<div/>').addClass('percent').text(ele[1] * 100 + '%').css({color:ele[2]});
        wrapperInner.append(progressBar);
        itemWrapper.append(text).append(wrapperInner).append(percent);
        component.append(itemWrapper);
    })
    return component;
}
module.exports = componentBarFactory;