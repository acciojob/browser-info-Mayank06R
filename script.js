//your JS code here. If required.
// Get the browser name and version
        var userAgent = navigator.userAgent;
        var browserName = navigator.appName;
        var fullVersion = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);

        // Display the browser information
        var browserInfoDiv = document.getElementById('browser-info');
        browserInfoDiv.textContent = "You are using " + browserName + " version " + fullVersion;