// JavaScript Document
var brand=3;

/*
inhouse=-1
partner=0
cisco=3
ringcentral=9
avaya=5
twilio=6


Used in:
   index.htm
   calabrio.htm
   agent.htm
   mytime/index.html

*/
var pathName = window.location.pathname;
var uiType="new";
var partner=false;

var backgroundColour="#a6182d";
var logoUrl="branding/newCalabrioLogo.png";
var themeTitle="Calabrio ONE";
var themeCopyright="&copy; 2008-2024 Calabrio, Inc. All rights reserved.";
var themeIcon="branding/newfavicon.ico";
var menuColor="rgb(255,255,255)";


if (brand==-1) {
	brand= window.localStorage.getItem('brand')?window.localStorage.getItem('brand'):0;
} else {
	partner=true;
}

function branding() {
	$(".c1-name").html("Calabrio&nbsp;One&nbsp;");


	
	if(brand==0) {
		//newCalabrioTheme();
	    backgroundColour="#a6182d";
	    logoUrl="branding/newCalabrioLogo.png";
	    themeTitle="Calabrio ONE";
	    themeCopyright="&copy; 2008-2024 Calabrio, Inc. All rights reserved.";
	    themeIcon="branding/newfavicon.ico";
	    menuColor="rgb(255,255,255)";
	} else if(brand==1) {
		//oldCalabrioTheme();
        backgroundColour="#a6182d";
        logoUrl="branding/CalabrioLogo.svg";
        themeTitle="Calabrio ONE";
        themeCopyright="&copy; 2008-2024 Calabrio, Inc. All rights reserved.";
        themeIcon="branding/favicon.ico";
		menuColor="rgb(255,255,255)";
	} else if(brand==2) {
		//govSuiteTheme();
		backgroundColour="#a6182d";
        logoUrl="branding/govsuite.png";
        themeTitle="Calabrio ONE";
        themeCopyright="&copy; 2008-2024 Calabrio, Inc. All rights reserved.";
        themeIcon="branding/newfavicon.ico";
		menuColor="rgb(255,255,255)";
	} else if(brand==3) {
		//ciscoWebexTheme();
		$(".c1-name").html("Webex&nbsp;WFO&nbsp;");
		backgroundColour="#000000";
        logoUrl="branding/ciscoLogo.png";
        themeTitle="Cisco Webex WFO";
        themeCopyright="&copy; 2008-2024 All rights reserved.";
        themeIcon="branding/ciscoBlack.ico";
		menuColor="rgb(255,255,255)";
	} else if(brand==4) {
		//amazonTheme();
		backgroundColour="#607794";
        logoUrl="branding/amazonLogo.png";
        themeTitle="Amazon WFO by Calabrio";
        themeCopyright="&copy; 2008-2024 All rights reserved.";
        themeIcon="branding/amazonFavicon.ico";
		menuColor="rgb(255,255,255)";
	} else if(brand==5) {
		//avayaTheme();
		backgroundColour="#da291c";
        logoUrl="branding/avayaLogo.png";
        themeTitle="Avaya WFO by Calabrio";
        themeCopyright="&copy; 2008-2024 All rights reserved.";
        themeIcon="branding/avayaFavicon.png";
		menuColor="rgb(255,255,255)";
	} else if(brand==6) {
		//twilioTheme();
		backgroundColour="#0f1025";
        themeTitle="Twilio WFO by Calabrio";
        themeCopyright="&copy; 2008-2024 All rights reserved.";
        logoUrl="branding/twilio.png";
        themeIcon="branding/twilioFlexFavicon.png";
		menuColor="rgb(255,255,255)";
	} else if(brand==7) {
		//ujetTheme();
		backgroundColour="#3498DB";
        themeTitle="ujet WFO by Calabrio";
        themeCopyright="&copy; 2008-2024 All rights reserved.";
        logoUrl="branding/ujetLogo.png";
        themeIcon="branding/ujetfavicon.ico";
		menuColor="rgb(255,255,255)";
	} else if(brand==8) {
		//deloitteTheme();
        backgroundColour="#000000";
        logoUrl="branding/deloitteLogo.png";
        themeTitle="Deloitte WFO by Calabrio";
        themeCopyright="&copy; 2008-2024 All rights reserved.";
        themeIcon="branding/deloittefavicon.ico";
		menuColor="rgb(255,255,255)";	
	} else if(brand==9) {
		//ringcentralTheme()
		backgroundColour="#ffffff";
        logoUrl="branding/rcLogo.png";
        themeTitle="RingCX";
        themeCopyright="&copy; 2008-2024 All rights reserved.";
        themeIcon="branding/rcFavicon.png";
		menuColor="rgba(0,0,0,0.87)";
	} else if(brand==10) {
		//accentureTheme();
		backgroundColour="#ffffff";
        logoUrl="branding/accenture.png";
        themeTitle="Accenture WFM by Calabrio";
        themeCopyright="&copy; 2008-2024 All rights reserved.";
        themeIcon="branding/accenture.ico";
		menuColor="rgba(0,0,0,0.87)";
	} else {
		brand=0;
		//newCalabrioTheme();
	    backgroundColour="#a6182d";
	    logoUrl="branding/newCalabrioLogo.png";
	    themeTitle="Calabrio ONE";
	    themeCopyright="&copy; 2008-2024 Calabrio, Inc. All rights reserved.";
	    themeIcon="branding/newfavicon.ico";
	    menuColor="rgb(255,255,255)";
	}
	window.localStorage.setItem('brand',brand)
	
	setThemeNewUI(backgroundColour,logoUrl,themeTitle,themeCopyright,themeIcon,menuColor)
}


    // Swaps the Calabrio Logo for the supplied logo URL and updates
    // the menu bar background colour for the New UI

   function setThemeNewUI(backgroundColour,logoUrl,themeTitle,themeCopyright,themeIcon,menuColor){
       if(window.location.toString().indexOf("mytime")==-1) {
		
			$("#topmenu").toggleClass("bg-brand", false);
			$("#topmenu").css("background-color", backgroundColour);

			$("#logodiv").css('background-image', "url('"+logoUrl+"')"); 
			$("#logodiv").toggleClass("bg-brand-logo", false);
			$("#logodiv").css("z-index", 999);
			$("#logodiv").css("width", 180);
			$("#logodiv").css('background-repeat', 'no-repeat');  
			$("#logodiv").css('background-position', 'center center');     

			$("#logo").toggleClass("bg-brand", false);
			$("#logo").toggleClass("bg-brand-logo", false);
			$("#logo").css("background-color", backgroundColour);
			$("#logo").css("width", 180);
			$("#logo").css("margin-left", 0);

			$("#favicon").attr("href",themeIcon);

			if(logoUrl=="branding/CalabrioLogo.svg") {
	//			$("#logo").css("background-color", "#000");			
				$("#logodiv").css('background-position', 'left center');     
			}


 	    $(".c1-navbar").css("color",menuColor);
	    $(".c1-navbar").css("border-left-color",menuColor);
	    if(menuColor=="rgb(255,255,255)") {
	   		$(".c1-user-menu").css("border-left-color","rgba(255,255,255,0.5)");
		}
	   	if(menuColor=="rgba(0,0,0,0.87)"){
	   		$("#topmenu").css("border-bottom-color","rgba(0,0,0,0.2)");			
	   		$(".c1-user-menu").css("border-left-color","rgba(0,0,0,0.2)");
	   		$("#topmenu").css("border-bottom-width",1);	
	   		$("#topmenu").css("height",48);	
	   		$("#topmenu").css("overflow","hidden");	
	   		$("#topmenu").css("border-bottom-style","solid");	
			$(".c1-navbar-wrapper").css("overflow","hidden");
			$(".c1-navbar-submenu").css("top",47);
		}	   
	    $("#topmenu").css("visibility","visible");
		   
		   
			document.title = themeTitle;
        } else {   
			// Mytime
			var navBarLogo=document.getElementById('logo');
			var navLogoDiv=navBarLogo.children[0];
			var navBarDiv=navBarLogo.parentNode;
			// Set colour
			navLogoDiv.style.backgroundColor=backgroundColour;
			// Set Logo
			navLogoDiv.style.backgroundImage="url("+logoUrl+")";
			// Get rid of the ::before transform skewed element...
			// Remove the classes on the <a>
			navBarLogo.classList.remove(navBarLogo.classList[1]);
			navBarLogo.classList.remove(navBarLogo.classList[0]);
			// Put back only the style elements we want
			navBarLogo.style.flex="0 0 auto";
			navBarLogo.style.width="168px";
			navBarLogo.style.height="48px";
			if(logoUrl=="branding/CalabrioLogo.svg") {
				navBarLogo.style.width="177px";		
			}
			navBarLogo.style.display="flex";
			navBarLogo.style.zIndex="1";
			navBarLogo.style.position="relative";
			navBarLogo.style.alignItems="center";
			// Change the main bar background colour
			navBarDiv.style.backgroundColor=backgroundColour;
			// Update the title
			document.title = themeTitle;
			
			// Update the Copyright notice
			// Update the favicon
			//        changeFavicon(themeIcon);
			$("#favicon").attr("href",themeIcon);

			$("#topmenu").toggleClass("bg-brand", false);
			$("#logodiv").toggleClass("bg-brand-logo", false);
			$("#logodiv").css("z-index", 999);
			$("#logodiv").css("width", 168);
			$("#logodiv").css('background-repeat', 'no-repeat');  
			$("#logodiv").css('background-position', 'center center');     
			$("#innerNavBar").css("background-color", backgroundColour);

			$("#logo").css('backgroundImage', "url('"+logoUrl+"')");     

			if(menuColor!="rgb(255,255,255)") {
				$(".nav").css("color",menuColor);
			}
			if(menuColor=="rgba(0,0,0,0.87)"){
				$("#innerNavBar").css("border-bottom-color","rgba(0,0,0,0.2)");			
				$("#innerNavBar").css("border-bottom-width",1);	
				$("#innerNavBar").css("border-bottom-style","solid");	
			}	   
			$("#innerNavBar").css("visibility","visible");
			$("#hdr").css("visibility","visible");
		}

    }
	

      // Update the title
      function updatePageTitle() {
        const currentUrl = new URL(window.location.href);
        const mParam = currentUrl.searchParams.get('m');
        let postFixTitle = '';

        const titleMap = {
          'recordings': 'Interactions',
          'recordingcontrols': 'Recording Controls',
          'contactqueue': 'Contact Queue',
          'wfm/people': 'WFM',
          'analytics-ce_sentiment': 'Analytics',
          'botanalytics': 'Bot Analytics',
          'agentexplorer': 'Agent Explorer',
          'reporting': 'Reporting',
          'dataexplorer': 'Data Explorer',
          'admin': 'Application Management'
        };

        if (mParam in titleMap) {
          postFixTitle = `-${titleMap[mParam]}`;
        }
        document.title = `${themeTitle}${postFixTitle}`;
      }
