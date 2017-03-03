require('../less/entry.less')
require('./tool/jqFP.js');
require('./tool/jqUI.js');
var manage = require('./container/Container.js')
var data = [
                ['js', 0.2, 'rgb(23, 44, 60)'],
                ['h5', 0.25, 'rgb(39, 72, 98)'],
                ['css', 0.1, 'rgb(153, 80, 84)'],
                ['rea', 0.35, 'rgb(217, 104, 49)'],
                ['jqu', 0.1, 'rgb(250, 179, 61)']
            ]

//选择jquery插件的方法fullpage,可以产生分页效果，但是一定要按照fullpage的要求给Dom添加类名.section
//这是移动端页面的第一步

manage 
        .init()
            .addPage('onePage')
         		.addComponent({
         			type : 'base',
         			width : 215,
         			height : 46,
         			center : true,
         			css : {
         				top : 0,
         				opacity : 0,
         				background:'url(../../src/img/groupOne/1.png)',
         				backgroundSize : '100% 100%'
         			},
         			animateIn : {
         				top : 126,
         				opacity : 1
         			},
         			animateOut : {
         				top : 0,
         				opacity : 0
         			}
         		})
         		.addComponent({
         			type : 'base',
         			width : 185,
         			height : 48,
         			center : true,
         			name : 'shake',
         			css : {
         				top : 220,
         				left : '-50%',
         				opacity : 0,
         				background:'url(../../src/img/groupOne/2.png)',
         				backgroundSize : '100% 100%'
         			},
         			animateIn : {
         				top : 220,
         				left : '50%',
         				opacity : 1
         			},
         			animateOut : {
         				top : 0,
         				opacity : 0
         			},
         			delay : 600
         		})
               .addComponent({
         			type : 'base',
         			width : 173,
         			height : 247,
         			css : {
         				position : 'absolute',
         				bottom : -173,
         				left : -247,
         				opacity : 0,
         				background:'url(../../src/img/groupOne/left.png)',
         				backgroundSize : '100% 100%'
         			},
         			animateIn : {
         				bottom : 0,
         				left : 0,
         				opacity : 1
         			},
         			animateOut : {
         				bottom : -173,
         				left : -247,
         				opacity : 0
         			},
         			delay : 1400
         		})
               .addComponent({
         			type : 'base',
         			width : 162,
         			height : 225,
         			css : {
         				position : 'absolute',
         				bottom : -162,
         				right : -225,
         				opacity : 0,
         				background:'url(../../src/img/groupOne/right.png)',
         				backgroundSize : '100% 100%'
         			},
         			animateIn : {
         				bottom : 0,
         				right : 0,
         				opacity : 1
         			},
         			animateOut : {
         				bottom : -162,
         				right : -225,
         				opacity : 0
         			},
         			delay : 2200
         		})
//*******************************************************************************************************
            .addPage('twoPage')
            	.addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			css : {
		         				position : 'absolute',
		         				top : 68,
		         				left : -252,
		         				opacity : 0,
		         				background:'url(../../src/img/groupTwo/title.png)',
		         				backgroundSize : '100% 100%'
		         			},
		         			animateIn : {
		         				top : 68,
		         				left:0,
		         				opacity : 1
		         			},
		         			animateOut : {
		         				top : 68,
		         				left: -252,
		         				opacity : 0
		         			}
		         		})
				.addComponent({
		         			type : 'base',
		         			width : 35,
		         			height : 35,
		         			css : {
		         				position : 'absolute',
		         				top : 80,
		         				left : 3,
		         				opacity : 0,
		         				background:'url(../../src/img/groupTwo/logo.png)',
		         				backgroundSize : '100% 100%'
		         			},
		         			animateIn : {
		         				opacity : 0.5
		         			},
		         			animateOut : {
		         				opacity : 0
		         			},
							delay : 1000
		         		})
                .addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			text : '核心理念',
		         			css : {
		         				position : 'absolute',
		         				top : 78,
		         				left : 96,
		         				opacity : 0,
		         				color : 'white',
		         				fontSize : 25
		         			},
		         			animateIn : {
		         				opacity : 1
		         			},
		         			animateOut : {
		         				opacity : 0
		         			},
							delay : 1000 
		         		})
				.addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			text : '渡一用实力让情怀落地',
							center : true,
		         			css : {
		         				position : 'absolute',
		         				top : 200,
		         				opacity : 0,
		         				color : 'orange',
		         				fontSize : 0,
								textAlign : 'center',
								fontWeight : 'bold'
		         			},
		         			animateIn : {
		         				opacity : 1,
								fontSize : 23
		         			},
		         			animateOut : {
		         				opacity : 0,
								fontSize : 0
		         			},
							delay : 1500 
		         		})
				.addComponent({
         			type : 'base',
         			width : 261,
         			height :168,
					center : true,
         			css : {
         				position : 'absolute',
         				bottom : 0,
         				opacity : 0,
         				background:'url(../../src/img/groupTwo/dialog.png)',
         				backgroundSize : '100% 100%'
         			},
         			animateIn : {
         				bottom : 210,
         				opacity : 1
         			},
         			animateOut : {
         				bottom : 0,
         				opacity : 0
         			},
         			delay : 1400
         		})
			   .addComponent({
		         			type : 'base',
		         			width : 261,
		         			height : 168,
		         			text : '2013年，慕课网的诞生引领中国IT职业 从教育进入新时代； 高质量实战课程、全新教学模式、实时 互动学习，以领先优势打造行业品',
							center : true,
		         			css : {
		         				position : 'absolute',
		         				bottom: 197,
		         				opacity : 0,
		         				color : 'black',
								textAlign : 'justify',
								lineHeight : '25px',
								fontWeight : 'bold',
								fontSize : 18,
		         			},
		         			animateIn : {
		         				opacity : 1,
								
		         			},
		         			animateOut : {
		         				opacity : 0,
		         			},
							delay : 1800 
		         		})
               .addComponent({
         			type : 'base',
         			width : 262,
         			height : 153,
					center : true,
         			css : {
         				position : 'absolute',
         				bottom : 0,
         				opacity : 0,
         				background:'url(../../src/img/groupTwo/people.png)',
         				backgroundSize : '100% 100%'
         			},
         			animateIn : {
         				bottom : 30,
         				opacity : 1
         			},
         			animateOut : {
         				bottom : 0,
         				opacity : 0
         			},
         			delay : 2200
         		})
//*****************************************************************************************************************		   
            .addPage('threePage')
				.addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			css : {
		         				position : 'absolute',
		         				top : 68,
		         				left : -252,
		         				opacity : 0,
		         				background:'url(../../src/img/groupTwo/title.png)',
		         				backgroundSize : '100% 100%'
		         			},
		         			animateIn : {
		         				top : 68,
		         				left:0,
		         				opacity : 1
		         			},
		         			animateOut : {
		         				top : 68,
		         				left: -252,
		         				opacity : 0
		         			}
		         		})
				.addComponent({
		         			type : 'base',
		         			width : 35,
		         			height : 35,
		         			css : {
		         				position : 'absolute',
		         				top : 80,
		         				left : 3,
		         				opacity : 0,
		         				background:'url(../../src/img/groupTwo/logo.png)',
		         				backgroundSize : '100% 100%'
		         			},
		         			animateIn : {
		         				opacity : 0.5
		         			},
		         			animateOut : {
		         				opacity : 0
		         			},
							delay : 1000
		         		})
                .addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			text : '前端开发',
		         			css : {
		         				position : 'absolute',
		         				top : 78,
		         				left : 96,
		         				opacity : 0,
		         				color : 'white',
		         				fontSize : 25
		         			},
		         			animateIn : {
		         				opacity : 1
		         			},
		         			animateOut : {
		         				opacity : 0
		         			},
							delay : 1000 
		         		})
				 	.addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			text : '课程体系柱状图',
							center : true,
		         			css : {
		         				position : 'absolute',
		         				top : 220,
		         				opacity : 0,
		         				color : '#ff6357',
		         				fontSize : 0,
								textAlign : 'center',
								fontWeight : 'bold',
		         			},
		         			animateIn : {
		         				opacity : 1,
								fontSize : 23
		         			},
		         			animateOut : {
		         				opacity : 0,
								fontSize : 0
		         			},
							delay : 1500 
		         		})
					.addComponent({
						type:'bar',
						width : '200',
						center : true,
						css : {
							position:'absolute',
							bottom : 0,
							opacity : 0,
						},
						animateIn : {
							bottom : 210,
							opacity : 1
						},
						animateOut : {
							bottom : 0,
							opacity : 0
						},
						eventType : {

						},
						delay : 1800,
						data : data
					})
//********************************************************************************88
			.addPage('fourPage')
				.addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			css : {
		         				position : 'absolute',
		         				top : 68,
		         				left : -252,
		         				opacity : 0,
		         				background:'url(../../src/img/groupTwo/title.png)',
		         				backgroundSize : '100% 100%'
		         			},
		         			animateIn : {
		         				top : 68,
		         				left:0,
		         				opacity : 1
		         			},
		         			animateOut : {
		         				top : 68,
		         				left: -252,
		         				opacity : 0
		         			}
		         		})
				.addComponent({
		         			type : 'base',
		         			width : 35,
		         			height : 35,
		         			css : {
		         				position : 'absolute',
		         				top : 80,
		         				left : 3,
		         				opacity : 0,
		         				background:'url(../../src/img/groupTwo/logo.png)',
		         				backgroundSize : '100% 100%'
		         			},
		         			animateIn : {
		         				opacity : 0.5
		         			},
		         			animateOut : {
		         				opacity : 0
		         			},
							delay : 1000
		         		})
                .addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			text : '前端开发',
		         			css : {
		         				position : 'absolute',
		         				top : 78,
		         				left : 96,
		         				opacity : 0,
		         				color : 'white',
		         				fontSize : 25
		         			},
		         			animateIn : {
		         				opacity : 1
		         			},
		         			animateOut : {
		         				opacity : 0
		         			},
							delay : 1000 
		         		})
				 	.addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			text : '课程体系折线图',
							center : true,
		         			css : {
		         				position : 'absolute',
		         				top : 250,
		         				opacity : 0,
		         				color : '#ff6357',
		         				fontSize : 0,
								textAlign : 'center',
								fontWeight : 'bold',
		         			},
		         			animateIn : {
		         				opacity : 1,
								fontSize : 23
		         			},
		         			animateOut : {
		         				opacity : 0,
								fontSize : 0
		         			},
							delay : 1500 
		         		})
					.addComponent({
						type:'ploy',
						width : '200',
						center : true,
						css : {
							position:'absolute',
							bottom : 0,
							opacity : 0,
						},
						animateIn : {
							bottom : 180,
							opacity : 1
						},
						animateOut : {
							bottom : 0,
							opacity : 0
						},
						eventType : {

						},
						delay : 1800,
						data : data
					})
//***************************************************************************************************
            .addPage('fivePage')
				.addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			css : {
		         				position : 'absolute',
		         				top : 68,
		         				left : -252,
		         				opacity : 0,
		         				background:'url(../../src/img/groupTwo/title.png)',
		         				backgroundSize : '100% 100%'
		         			},
		         			animateIn : {
		         				top : 68,
		         				left:0,
		         				opacity : 1
		         			},
		         			animateOut : {
		         				top : 68,
		         				left: -252,
		         				opacity : 0
		         			}
		         		})
				.addComponent({
		         			type : 'base',
		         			width : 35,
		         			height : 35,
		         			css : {
		         				position : 'absolute',
		         				top : 80,
		         				left : 3,
		         				opacity : 0,
		         				background:'url(../../src/img/groupTwo/logo.png)',
		         				backgroundSize : '100% 100%'
		         			},
		         			animateIn : {
		         				opacity : 0.5
		         			},
		         			animateOut : {
		         				opacity : 0
		         			},
							delay : 1000
		         		})
                .addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			text : '前端开发',
		         			css : {
		         				position : 'absolute',
		         				top : 78,
		         				left : 96,
		         				opacity : 0,
		         				color : 'white',
		         				fontSize : 25
		         			},
		         			animateIn : {
		         				opacity : 1
		         			},
		         			animateOut : {
		         				opacity : 0
		         			},
							delay : 1000 
		         		})
				 	.addComponent({
		         			type : 'base',
		         			width : 252,
		         			height : 62,
		         			text : '课程体系饼图',
							center : true,
		         			css : {
		         				position : 'absolute',
		         				top : 250,
		         				opacity : 0,
		         				color : '#ff6357',
		         				fontSize : 0,
								textAlign : 'center',
								fontWeight : 'bold',
		         			},
		         			animateIn : {
		         				opacity : 1,
								fontSize : 23
		         			},
		         			animateOut : {
		         				opacity : 0,
								fontSize : 0
		         			},
							delay : 1500 
		         		})
					.addComponent({
						type:'pie',
						width : 200,
						height : 200,
						center : true,
						css : {
							position:'absolute',
							bottom : 0,
							opacity : 0,
						},
						animateIn : {
							bottom : 160,
							opacity : 1
						},
						animateOut : {
							bottom : 0,
							opacity : 0
						},
						eventType : {

						},
						delay : 1000,
						data : data
					})
//***************************************************************************************
            .addPage('sixPage')
				.addComponent({
         			type : 'base',
         			width : 215,
         			height : 46,
         			center : true,
					name : 'shake',
         			css : {
         				top : 0,
         				opacity : 0,
         				background:'url(../../src/img/groupThr/duyi.png)',
         				backgroundSize : '100% 100%'
         			},
         			animateIn : {
         				top : 300,
         				opacity : 1
         			},
         			animateOut : {
         				top : 0,
         				opacity : 0
         			}
         		})
				 .addComponent({
         			type : 'base',
         			width : 83,
         			height : 83,
         			css : {
						position : 'absolute',
						right : '50%',
						marginRight : '-83',			
         				top : 100,
         				opacity : 0,
         				background:'url(../../src/img/groupThr/share.png)',
         				backgroundSize : '100% 100%'
         			},
         			animateIn : {
						top : 0,
						right : 0,
         				opacity : 1
         			},
         			animateOut : {
						right : '50%',
         				top : 100,
         				opacity : 0
         			}
         		})
				 .addComponent({
         			type : 'base',
         			width : 14,
         			height : 20,
					center : true,
					name : 'jump',
         			css : {			
         				top : 80,
         				opacity : 0,
         				background:'url(../../src/img/groupThr/icon-top.png)',
         				backgroundSize : '100% 100%'
         			},
         			animateIn : {
        				opacity : 1
         			},
         			animateOut : {
         				opacity : 0
         			},
					eventType : {
						click :()=>{
							 manage.container.fullpage.moveTo(1)
						}
					}
         		})
		
.load();