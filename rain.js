var Rain=function(){
	this.v=[];
	this.x=[];
	this.y=[];
	this.time=[];
}
Rain.prototype.num=100;
Rain.prototype.init=function(){
	var bornTime;
	for(var i=0;i<this.num;i++){
		var that=this;
		// bornTime=setTimeout(function(){
			that.v[i]=(Math.random()+1)*3+10;
			that.x[i]=document.body.clientWidth*Math.random()+1;
			that.y[i]=0;
			// this.time[i]=document.body.clientHeight/this.v[i]*Math.random()+1;
			that.time[i]=document.body.clientHeight/that.v[i];
		// },20);
		
		// console.log(this.v[i]);
		// console.log(this.x[i]);
		// console.log(this.y[i]);
		// console.log(this.t[i]);
	}
	// clearTimeout(bornTime);
}
// rain.prototype.born
// rain.prototype.draw=function(){
	// ctx.clearRect(0,0,can.width,can.height);
	
// }
Rain.prototype.move=function(){
	for(var i=0;i<this.num;i++){
		this.reborn(i);
		ctx.beginPath();
		this.y[i]=this.y[i]+this.v[i];
		// console.log(this.y[i]);
		if(walkerX<this.x[i]&&this.x[i]<walkerX+150&&can.height-250<this.y[i]&&this.y[i]<can.height){
			rains++;
			step=20;
			console.log(rains);
			this.v.splice(i, 1);
			this.x.splice(i, 1);
			this.y.splice(i, 1);
			this.time.splice(i, 1);
			this.born();
		}
		ctx.moveTo(this.x[i],this.y[i]+this.v[i]);
		ctx.lineTo(this.x[i]-1,this.y[i]+20);
		ctx.lineTo(this.x[i]+1,this.y[i]+20);
		ctx.closePath();
		ctx.stroke();
	}
}
Rain.prototype.reborn=function(which){
	this.time[which]--;
	if(this.y[which]>can.height&&this.time[which]<=0){
		this.v[which]=(Math.random()+1)*3+10;
		this.x[which]=document.body.clientWidth*Math.random()+1;
		this.y[which]=0;
		this.time[i]=document.body.clientHeight/this.v[i];
	}
}
Rain.prototype.born=function(){
	this.v[100]=(Math.random()+1)*3+10;
	this.x[100]=document.body.clientWidth*Math.random()+1;
	this.y[100]=0;
	// this.time[i]=document.body.clientHeight/this.v[i]*Math.random()+1;
	this.time[100]=document.body.clientHeight/this.v[i];
}