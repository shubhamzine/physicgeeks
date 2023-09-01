let books = {
'java':['(Complete Reference Series) Herbert Schildt - Java_ The Complete Reference-McGraw-Hill Education (2021)','(Oxford higher education) Uttam Kumar Roy - Advanced Java programming-Oxford University Press (2015)','Tony Gaddis - Starting Out with Java_ From Control Structures through Objects-Addison-Wesley (2012)'],

'computer books':['11th_computer application','11th_computer science','11th_computer technology','12th_computer application','12th_computer science','12th_computer technology'],

'database':['Database System Concepts'],

'javascript':['Eric T. Freeman, Elisabeth Robson - Head First JavaScript Programming_ A Brain-Friendly Guide-O’Reilly Media (2014)']
}

window.onload = function()
{
var inp = document.getElementById('search_box');
    inp.addEventListener('focus',function(){
        inp.style.outline='2px groove red';
    });
   
};
function search()
{
   var search_string =  document.getElementById("search_box").value;
   for(var x in books)
   {
    if(x.slice(0,3) == search_string.slice(0,3))
    {
       
        for (var m of books[x])
        {
            var e = document.createElement("li");
            var ac = document.createElement('a');
            ac.setAttribute('href','dlcontrol?f='+m);
            ac.appendChild(document.createTextNode(m));
            e.appendChild(ac);
            document.getElementById('search_result').appendChild(e);
        }
    }
   }
}
function clear_search()
{
    var child = document.getElementById('search_result');
    if(child.hasChildNodes())
    {
    
    while(child.hasChildNodes())
    {
        child.removeChild(child.firstChild);
    }
}
}



