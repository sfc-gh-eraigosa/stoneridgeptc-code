
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
      
      
      gadgets.util.registerOnLoadHandler(mainLoader);
