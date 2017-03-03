require('../../less/componentBase.less')
let componentBaseFactory = (config) => {
    let Id = (Math.random() * 100 + '').replace('.', '_');
    let component = $('<div/>').attr('id', Id);
    component.addClass('componentBase')
    config.name ? component.addClass(config.name) : '';
    config.text ? component.text(config.text) : '';
    config.width ? component.css({'width': config.width}): '';
    config.height ? component.css({'height' : config.height}) : '';
    if(config.center){
        component.css({position : 'absolute', 'left' : '50%',  marginLeft : -(config.width)/2})
    }
    config.css ? component.css(config.css) : '';
    for(var type in config.eventType){
        component.on(type, config.eventType[type]);
    }
    component.on('loadComponent', function(){
        config.animateIn ? component.delay(config.delay ? config.delay : 0).animate(config.animateIn, function(){
            component.addClass('load').removeClass('leave');
        }) : '';
    })

    component.on('leaveComponent', function(){
        config.animateOut ? component.animate(config.animateOut, function(){
            component.addClass('leave').removeClass('load');
        }) : '';
    })
    return component;
}
module.exports = componentBaseFactory;