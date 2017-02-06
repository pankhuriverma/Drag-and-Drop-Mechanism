var id;
var sum=0;
var price=new Array();
var names=new Array();
var i=0;
var price_=0;
var names_;

function allowdrop(ev)
{
	ev.preventDefault();
}

function drag(ev)
{
	id=ev.target.id;


}

function drop(ev)
{	sum=0;
	
	names[i]=document.getElementById(id).parentNode.nextSibling.nextSibling.children[0].innerText;
	price[i]=parseInt(document.getElementById(id).parentNode.nextSibling.nextSibling.children[1].innerText);
	var data=document.getElementById(id);
	ev.target.appendChild(data);
	namedisp();
	pricedisp();
	sumprice();
	i++;
}

function sumprice()
{

	for(var j=0;j<price.length;j++)
	{
		sum=sum+price[j];
	}

	document.getElementsByClassName('con23_2')[0].innerText=sum;

}

function pricedisp()
{	

	document.getElementsByClassName('con22_2')[0].children[i].innerHTML+=price[i];
	// document.getElementsByClassName('con22_2')[0].innerHTML.style.marginLeft="20px";
		
}

function namedisp()
{	
	
		
	document.getElementsByClassName('con22_1')[0].children[i].innerHTML+=names[i];
	// document.getElementsByClassName('con22_1')[0].innerHTML.style.marginLeft="20px";
		
	
	
	
}







