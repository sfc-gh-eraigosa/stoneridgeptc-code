
      // this page is found on : http://stoneridgeptc-code.googlecode.com/svn/stoneridgeptc-code-widgets/stoneridgeptc-test5.xml
      // Get userprefs
      var prefs = new gadgets.Prefs();

      // debug flag. When its value is non-zero, debugging messages are displayed      
      var debug = 1;
      // The string containing debugging messages
      var debug_html = "";
      
      /*
      
      */
      function mainLoader()
      {
      	printdebug("mainLoader executed");
      }
      
      
      // Outputs debug messages if debug flag has a non-zero value
      function printdebug(msg) {      
        if (debug) {
          debug_html += msg;
          // Write debug HTML to div
          document.getElementById("debug_div").innerHTML = debug_html;
        }
      }
      
      function getRecentAnnouncements(count, page) 
  	  {  
  	  
	  	  //not sure if there is a limit in the getAnnouncements() function, but I'm dealing with less than 500 posts right now
	  	  var allAnnouncements = page.getAnnouncements({max:500});
	  	  var sortedSet = allAnnouncements.sort(announcement_sort_desc);
	  	  return sortedSet.slice(0,count);
  	  }

  	var announcement_sort_asc = function (announcement1, announcement2) {
  	  var date1 = announcement1.getDatePublished();
  	  var date2 = announcement2.getDatePublished();
  	  if (date1 > date2) return 1;
  	  if (date1 < date2) return -1;
  	  return 0;
  	};
  	
      gadgets.util.registerOnLoadHandler(mainLoader);
