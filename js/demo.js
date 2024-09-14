
        <script type="text/javascript" src="js/jquery.min.js"></script>

//Monday, October 11, 2021
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.write(currentDate.toLocaleDateString('en-us', options));

// 10/11/2021
$("#dt1").val(new Date().toLocaleDateString());


//2021 - Week 35
<script>
const day = new Date();
const MILLISECONDS_IN_WEEK = 604800000;
const firstDayOfWeek = 1; // monday as the first day (0 = sunday)
const startOfYear = new Date(day.getFullYear(), 0, 1);
startOfYear.setDate(
  startOfYear.getDate() + (firstDayOfWeek - (startOfYear.getDay() % 7))
);
const dayWeek = Math.round((day - startOfYear) / MILLISECONDS_IN_WEEK) + 1;
//yr = dayWeek==1?startOfYear.getFullYear():day.getFullYear()
yr = day.getFullYear()
txt =  yr + " - Week " + dayWeek
$("#wk").val(txt);
$("#wk").attr("title",txt);

$("#wk1").val(txt);
$("#wk1").attr("title",txt);
// => 37
</script>	



<script>
d1 = new Date();
d1.setDate(d1.getDate() - d1.getDay());
d2 = new Date();
d2.setDate(d1.getDate() +6); 
options = { year: 'numeric', month: 'long', day: 'numeric' };
document.write(d1.toLocaleDateString('en-us', options));
document.write(" - ");
options = { year: 'numeric', month: 'long', day: 'numeric' };
document.write(d2.toLocaleDateString('en-us', options));
</script>	


//scrolling headings with content
<script>
$(function(){
    $("#detail").on('scroll', function(e) { 
        var ele = $(e.currentTarget);
        var left = ele.scrollLeft();
        var top = ele.scrollTop();
        $("#titleleft").scrollTop(top);
        $("#titletop").scrollLeft(left);
    });
});
</script>


<!-- Dashboard relacement code


        <script type="text/javascript" src="js/jquery.min.js"></script>

        <link href="css/woff.css" rel="stylesheet" type="text/css">
        <link href="css/font.css" rel="stylesheet" type="text/css">

        <link rel="stylesheet" type="text/css" href="css/shared.5123.css">
        <link rel="stylesheet" type="text/css" href="css/component.5123.css">
        <link rel="stylesheet" type="text/css" href="css/av-theme.5123.css">

        <link rel="stylesheet" href="css/standard.css">
        <link rel="stylesheet" href="css/fonts.5123.css">
        <link rel="stylesheet" href="css/cbg_button.css">


<style> 
.MuiButton-root-active {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.04);
}
</style>

//use in debugger to grab page code for dropdowns / popups
setTimeout(function() {myWindow=window.open('','','width=1200,height=800');myWindow.document.write('<code>'+document.body.innerHTML+'</code>')},5000)






<script>
function writeDate(offset) {
	var d = new Date();
	d.setDate(d.getDate() + offset);
	var mm = d.getMonth() + 1;
	var dd = d.getDate();
	var yy = d.getFullYear();
	mm = mm<10?"0"+mm:mm
	dd = dd<10?"0"+dd:dd
	document.write(mm + '-' + dd + '-' + yy)
}
</script>

<script>writeDate(-5)</script>

<script>
function returnDate(offset) {
	var d = new Date();
	d.setDate(d.getDate() + offset);
	var mm = d.getMonth() + 1;
	var dd = d.getDate();
	var yy = d.getFullYear();
	mm = mm<10?"0"+mm:mm
	dd = dd<10?"0"+dd:dd
	return mm + '-' + dd + '-' + yy
}
</script>

<script>$(".demoDateCH1").val( returnDate(30) )</script>




<script>document.write(new Date().toLocaleDateString('en', {month:'long'}))</script> 					
<script>document.write(new Date().getFullYear())</script>

<script>document.write(new Date().toLocaleDateString('en', {month:'short'}))</script> 
<script>document.write(new Date().getFullYear())</script>				  



-->