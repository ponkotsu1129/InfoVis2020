class Vec3
{
    constructor(x,y,z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v)
    {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    sum()
    {
        return this.x + this.y + this.z;
    }

    min()
    {
        return Math.min(this.x,this.y,this.z)
    }

    max()
    {
        return Math.max(this.x,this.y,this.z)
    }

    mid()
    {
        if(this.x > this.y)
        {
            if(this.x <= this.z){return this.x;}
            else if(this.y > this.z){return this.y;}
            else{return this.z;} 
        }
        else
        {
            if(this.y <= this.z){return this.y;}
            else if(this.z < this.x){return this.x;}
            else{return this.z;}
        }
    }
}

function AreaOfTriangle(v0,v1,v2)
{
    var ax = v1.x - v0.x;
    var ay = v1.y - v0.y;
    var az = v1.z - v0.z;
    var bx = v2.x - v0.x;
    var by = v2.y - v0.y;
    var bz = v2.z - v0.z;
    var tmp1 = Math.pow(ay*bz-az*by,2);
    var tmp2 = Math.pow(az*bx-ax*bz,2);
    var tmp3 = Math.pow(ax*by-ay*bx,2);
    return 0.5*Math.sqrt(tmp1+tmp2+tmp3);
}
