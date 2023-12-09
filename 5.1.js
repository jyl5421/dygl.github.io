
function add()
{
	t2.style.display='block';
}
function deleteRow(btnDelete){
	var currentIndex=btnDelete.parentNode.parentNode.rowIndex;
	var table1=document.getElementById("table1");
	table1.deleteRow(currentIndex);
}
function queding()
{
	var table1=document.getElementById("table1");
	var row=table1.insertRow(1);
	var 海报_=row.insertCell(0);
	var 影视名称_=row.insertCell(1);
	var 影视类别_=row.insertCell(2);
	var 上映时间_=row.insertCell(3);
	var 影视热评_=row.insertCell(4);
	var deleteCell=row.insertCell(5);
	海报_.innerHTML=document.getElementById("海报").value;
	影视名称_.innerHTML=document.getElementById("影视名称").value;
	影视类别_.innerHTML=document.getElementById("影视类别").value;
	上映时间_.innerHTML=document.getElementById("上映时间").value;
	影视热评_.innerHTML=document.getElementById("影视热评").value;
	deleteCell.innerHTML="<button onclick='deleteRow(this)'>删除</button>&nbsp;&nbsp;<button onclick='edit(this)'>修改</button>";
	t2.style.display='none';
}
//有点问题，不太会
// function edit(btnEdit) {
// 	var mytable=document.getElementById("table1");
// 	indexx=btnEdit.parentNode.parentNode.rowIndex;
// 	document.getElementById("影视名称").value=mytable.rows[indexx].cells[1].innerHTML;
// 	document.getElementById("影视类别").value=mytable.rows[indexx].cells[2].innerHTML;
// 	document.getElementById("上映时间").value=mytable.rows[indexx].cells[3].innerHTML;
// 	document.getElementById("影视热评").value=mytable.rows[indexx].cells[4].innerHTML;
// 	add();
// 	queding();
// 	deleteRow(this);
// }