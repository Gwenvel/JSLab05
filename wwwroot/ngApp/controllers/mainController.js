class MainController 
{
    constructor() 
    {
         // create/initialize an array
         /*let pets = [ "dog", "cat", "bird" ];
         this.message = pets;

         let list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
         this.message = this.sum(list);

         this.message = this.combine([ "dog", "cat", "pony" ]);
         
         let total = 10;
         this.message = this.getArray(total);

         let list = [ 2, 2, 2 ];
         this.message = this.multiply(list);*/

         let nums = this.getNums(10);
         let total = this.getTotal(nums);

         //this.message = this.getNums;
         this.message = total;


        
    }
    /*sum(nums)
    {
        let add=0;
        for (var index = 0; index < nums.length; index++)
        {
            add += nums[index];   
        }
        return add;
    }
    combine(a)
    {
        let words="";
        for (var index = 0; index < a.length; index++) {
            words += a[index] + " ";
            
        }
        return words
    }
    getArray(b)
    {
        let made=[];
        let result="";
        for (var index = 0; index <= b; index++) {
            made[index] = index;  
        }
        for (var newone = 0; newone < made.length; newone++) {
            result += made[newone] + ", ";  
        }
        return result;
    }
    multiply(c)
    {
        let product=1;

        for (var index = 0; index < c.length; index++) {
            product *= c[index];  
        }
        return product;
    }*/
    getNums(count)
    {
        let result="";
        let random=[];
        for (var index = 0; index < count; index++) {
            random[index] = Math.floor((Math.random()*count)+1);
        }
        return random;
        /*for (var newone = 0; newone < made.length; newone++) {
            result += made[newone] + " ";  
        }
        return result;*/
    }
    getTotal(d)
    {
        let sum=0;

        for (var index = 0; index < d.length; index++) {
            sum += d[index];
        }
        return sum;
    }

}