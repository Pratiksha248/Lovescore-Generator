prompt("Your name:");
prompt("Your partner's name:");
var n=Math.random();
n=n*100;
n=Math.floor(n)+1;
if(n>=80)
{
    alert("Duo lovescore: "+n+"%"+'\n'+"You love each other like Kanye loves Kanye!");
}
else if(n>=40 && n<80)
{
    alert("Duo lovescore: "+n+"%"+'\n'+"You better work out together.");
}
else
{
    alert("Duo lovescore: "+n+"%"+'\n'+"You go together like oil and water..");
}