/**
 * http://usejsdoc.org/
 */
global.name='GLOBAL';
var trainer={
		name:'Nag',
		doTeach:function(){
			console.log(this.name+" teaching JS");
			var that=this;
			function learn(){
				console.log('learning js from '+that.name);
			}
			return learn;
		}
};

var learn=trainer.doTeach();
var participant={name:'Hexagon'};
learn.call(participant);









