function item1() 
{
    if(array1.value==""||array2.value==""||array3.value=="")
    {
        alert("Please fill all the fields");
    }
    else
    {
        var array=[array1.value,array2.value,array3.value];
        var apple=array[0];
            
        if(apple==1)  
        {
            alert("Array Elements are  "+array+". The First Array Element is  "+apple+". It is a neither Prime nor Composite Number");
            return false;
                
        }
        else if(apple==2)
        {
            alert("Array Elements are  "+array+". The First Array Element is  "+apple+". It is a Prime Number");
            return true;
        }
        else
        {
            for(var x=2;x<apple;x++)
            {
                if(apple % x == 0)
                {
                    alert("Array Elements are  "+array+". The First Array Element is  "+apple+". It is not a Prime Number");
                    return false;
                }
                else
                {
                    alert("Array Elements are  "+array+". The First Array Element is  "+apple+". It is a Prime Number");
                    return true;
                }
                    
                
            }
                
        }
    } 
}
function item2()
{
    var array = document.getElementById("arr2").value;
    var apple = 1;
    var orange = 0;
    var item;
    if(array=="")
    {
        alert("Field must be filled");
    }
    else
    {
    for (var i =0; i<array.length; i++)
    {
        for (var j = 1; j<array.length; j++)
        {
            if (array[i] == array[j])
            orange++;
            if (apple<orange)
            {
                apple=orange;
                item = array[i];
            }
        }
        orange=0;
    }
    alert(item+" appeared " +apple +" times ");
    }
}
function item3()
{
    var string = document.getElementById("str").value;
    var upp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var loo = 'abcdefghijklmnopqrstuvwxyz';
    var item = [];
    if(string=="")
    {
        alert("Field must be filled");
    }
    else
    {
    for(var i=0;i<string.length;i++)
    {
        if(upp.indexOf(string[i])!== -1)
        {
            item.push(string[i].toLowerCase());
        }
        else if(loo.indexOf(string[i])!== -1)
        {
            item.push(string[i].toUpperCase());
        }
        else
        {
            item.push(string[i]);
        }
    }
    alert(item.join(''));
    }
}
function item4()
{

        var arr=document.getElementById("arr3").value;
        var sum = 0,
        i = arr.length;
        while(i--)
        sum += arr[i]*arr[i];
        alert("Sum of Square =  " +sum);
}
function item5()
{
    for (var i=0;i<=15;i++)
    {
        if(i==0)
        {
            document.write(i+ " (even) ");
            document.write('<br/>');
        }
        else if(i%2==0)
        {
            document.write(i+ " (even) ");
            document.write('<br/>');
        }
        else
        {
            document.write(i+ " (odd) ");
            document.write('<br/>');
        }
    }
}
function item6()
{
    var apple = document.getElementById("text").value;
    var orange = apple.length;
    if(apple=="")
    {
        alert("Field must be filled");
    }
    else
    {
    if(orange>5)
    {
        alert("The String is larger than specified size. It is truncated to 5. The truncated string is " +(apple.substring(0,5))+ "......");
    }
    else
    {
        alert("The String is of normal size. The String is " +apple);
    }
    }
}
function findLarge(apple,orange)
{
    var apple = parseInt(document.getElementById("number1").value);
    var orange = parseInt(document.getElementById("number2").value);
    if(apple>orange)
    {
        alert("The first number is "+apple+ ". The second number is "+orange+". The largest number is "+apple);
    }
    else
    {
        alert("The first number is "+apple+ ". The second number is "+orange+". The largest number is "+orange);
    }
}
function item8()
{
    var fruits=[a1.value,a2.value,a3.value];
    var x;
    if(a1.value==""||a2.value==""||a3.value=="")
    {
        alert("Please fill all the fields");
    }
    else
    {
    for(x in fruits)
    {
        document.write(fruits[x]+"<br>");
    }
    var a = fruits.sort();
    document.write("The Sorted form is "+a);
    }
}
function item9()
{
    let array = ["J","Ja","Jav","Java","Javas","Javasc","Javascr","Javascri","Javascrip","Javascript"];
    for(let char of array)
    {
      document.write(char);
      document.write('<br/>');
    }
}
function item10()
{
    var a,b,c;
    for(a=1;a<=5;a++)
    {
        for(b=1;b<a;b++)
        {
            c=c+("*");
        }
    document.write(c);
    document.write('<br/>');
    c='';
    }
}