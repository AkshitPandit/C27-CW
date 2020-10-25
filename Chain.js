class Chain{
    constructor(bodyA , bodyB){
        var opt = {
            bodyA:bird.body,
            bodyB:clog.body,
            stiffness:0.01,
            length:50,
        }
    
        this.chain = Constraint.create(opt);
        World.add(world,this.chain);
    }

    display(){
        var caa = this.chain.bodyA.position;
        var nrc = this.chain.bodyB.position;

        strokeWeight(5);
        line(caa.x , caa.y , nrc.x , nrc.y); 
    }
}
