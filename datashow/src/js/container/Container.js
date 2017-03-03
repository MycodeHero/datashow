
let componentBaseFactory = require('../component/componentBase.js');
let componentBarFactory = require('../component/componentBar.js')
let componentPolyFactory = require('../component/componentPoly.js');
let componentPieFactory = require('../component/componentPie.js')
let manage = {
    init(name = 'wrapper'){
        this.container = $('<div/>').addClass(name).hide();
        $(document.body).append(this.container);
        return this;
    },
    addPage(name = 'section'){
        this.page = $('<div class="section"/>').addClass(name);
        this.container.append(this.page);
        this.page.append(this.addComponent({
            type : 'base',
            width : '100%',
            height : 30,
            text : '黑龙江大学家属楼 web coffee',
            css : {
                position : 'absolute',
                bottom : -30,
                background:'rgba(0, 0, 0, 0.5)',
                color:'white',
                textAlign:'center',
                lineHeight:'30px',
                zIndex : 999,
                opacity : 0
            },
            animateIn : {
                opacity : 1,
                bottom : 0
            },
            animateOut : {
                opacity : 0,
                bottom : -30
            }
        }))
        return this;
    },
    addComponent(config = {}){
        let component = null;
        switch(config.type){
            case 'base' : 
                component = componentBaseFactory(config);
                break;
            case 'bar' : 
                component = componentBarFactory(config);
                break;
            case 'ploy' : 
                component = componentPolyFactory(config);
                break;
            case 'pie' :
                component = componentPieFactory(config);
                break;
        }
        this.page.append(component);
        return this;
    },
    load(){
        this.container.show();
        this.container.fullpage({
            sectionsColor:['#ff6357', 'white', 'yellow', 'deeppink'],

            //在向上滑的时候，触发onLeave事件#ff6357

            onLeave : (index, nextIndex, direction) => {
                //页面触发，组件回归原位
                $('.section').eq(index - 1).trigger('pageLeave');
            },

            //在页面加载的时候，触发afterLoad事件

            afterLoad : (archor, index) => {
                //页面触发，组件到达终位
                $('.section').eq(index - 1).trigger('pageLoad');
            }
        })
        $('.section').on('pageLeave', function(){
            //将该页面的全部组件进行离场
            $(this).find('.componentBase').trigger('leaveComponent');
        });

        $('.section').on('pageLoad', function(){
            //将该页面的全部组件进行出场
            $(this).find('.componentBase').trigger('loadComponent')

        })
        $('.section').eq(0).trigger('pageLoad');
    }
}
module.exports = manage