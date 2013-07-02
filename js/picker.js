//Variables which are needed for the funcionality
var compatibleframeworks = 0;
var paidframeworks = 0;
var closedsource = 0;

//Hide the incompatible frameworks and show the compatible ones
function checkCompatibility() {
    //Reset the variables
    compatibleframeworks = 0;
    paidframeworks = 0;
    closedsource = 0;

    //Check the frameworks
    checkCompatibilityjQuery();
    checkCompatibilitySencha();
    checkCompatibilityMoSync();
    checkCompatibilityXamarin();
    checkCompatibilityNative();

    //If the user wants to see the untested frameworks, show the ones that would be compatible
    if (getChecked("untested") == true)
        checkCompatibilityUntested();
    else
        hideUntested();

    //If the user only wants to see the free frameworks, show them only.
    if (getChecked('freeonly'))
        showFreeOnly();
    //If the user only wants to see the open-source frameworks, show them only.
    if (getChecked('opensourceonly'))
        showOpenSourceOnly();

    //If there are no compatible frameworks, show the message that no frameworks were found.
    if (compatibleframeworks == 0) {
        hideElement("resulttable");
        slidedown("notcompatible");
    }
    else {
        showElement("resulttable");
        slideup("notcompatible");
    }
}

//Only show free frameworks
function showFreeOnly() {
    compatibleframeworks = compatibleframeworks - paidframeworks;
    hideElement('marmalade');
    hideElement('orubase');
}

//Only show open-source frameworks
function showOpenSourceOnly() {
    compatibleframeworks = compatibleframeworks - closedsource;
    hideElement('xamarin');
    hideElement('nativewp');
    hideElement('marmalade');
    hideElement('orubase');
}

//Show untested frameworks
function checkCompatibilityUntested() {
    showElement("rubyonrails");
    showElement("rubyonrailslabel");
    checkCompatibilityCodenameOne();
    checkCompatibilityEnyo();
    checkCompatibilityMarmalade();
    checkCompatibilityOrubase();
    checkCompatibilityRhoMobile();
}

//Hide untested frameworks
function hideUntested() {
    hideElement("codenameone");
    hideElement("enyo");
    hideElement("marmalade");
    hideElement("orubase");
    hideElement("rhomobile");
    hideElement("rubyonrails");
    hideElement("rubyonrailslabel");
}

//Check if Codename One is compatible
function checkCompatibilityCodenameOne() {

    if (getChecked("java") == false ||
        getChecked("Accelerometer") == true ||
        getChecked("Bluetooth") == true ||
        getChecked("Compass") == true) {
        hideElement('codenameone');
        return;
    }
    showElement('codenameone');
    compatibleframeworks++;
}

//Check if Enyo is compatible.
function checkCompatibilityEnyo() {

    if (checkCompatibilityCordova()) {
        hideElement('enyo');
        return;
    }
    showElement('enyo');
    compatibleframeworks++;
}

//Check if marmalade is compatible
function checkCompatibilityMarmalade() {

    if ((getChecked('html') == false && getChecked('cpp') == false) == true) {
        hideElement('marmalade');
        return;
    }
    showElement('marmalade');
    compatibleframeworks++;
    paidframeworks++;
    closedsource++;
}

//Check if Orubase is compatible
function checkCompatibilityOrubase() {

    if ((getChecked('csharp') == false || getChecked('html') == false) == true ||
        getChecked('Bluetooth') == true ||
        getChecked('Calendar') == true ||
        getChecked('Media') == true ||
        getChecked('File') == true) {
        hideElement('orubase');
        return;
    }
    showElement('orubase');
    compatibleframeworks++;
    paidframeworks++;
    closedsource++;
}

//Check if RhoMobile is compatible
function checkCompatibilityRhoMobile() {

    if (getChecked('rubyonrails') == false ||
        getChecked('Compass') == true) {
        hideElement('rhomobile');
        return;
    }
    showElement('rhomobile');
    compatibleframeworks++;
}

//Check if native is an option.
function checkCompatibilityNative() {

    if (getChecked("java") == false ||
        getChecked("csharp") == false) {
        hideElement('nativeandroid');
        hideElement('nativewp');
        return;
    }
    showElement('nativeandroid');
    showElement('nativewp');
    compatibleframeworks++;
    closedsource++;
}

//Check if Xamarin is compatible
function checkCompatibilityXamarin() {

    if (getChecked("csharp") == false) {
        hideElement('xamarin');
        return;
    }
    showElement('xamarin');
    compatibleframeworks++;
    closedsource++;
}

//Check if MoSync is compatible
function checkCompatibilityMoSync() {

    if ((getChecked('html') == false && getChecked('cpp') == false) == true ||
        getChecked('Calendar') == true) {
        hideElement('mosync');
        return;
    }
    showElement('mosync');
    compatibleframeworks++;
}

//Check if Cordova frameworks are compatible
function checkCompatibilityCordova() {
    if (getChecked('html') == false ||
        getChecked('Bluetooth') == true ||
        getChecked('Calendar') == true ||
        getChecked('Push') == true)
        return true;

    return false;
}

//Check if Sencha is compatible
function checkCompatibilitySencha() {

    if (checkCompatibilityCordova()) {
        hideElement('sencha');
        return;
    }
    showElement('sencha');
    compatibleframeworks++;
}

//Check if jQuery is compatible
function checkCompatibilityjQuery() {

    if (checkCompatibilityCordova()) {
        hideElement('jquery');
        return;
    }
    showElement('jquery');
    compatibleframeworks++;
}
//Show the performance for native apps
function showPerformanceNative() {
    emptyPerformanceModal();
    var table = createTable(aStartup, aLogin, aCalc, wpStartup, wpLogin, wpCalc);
    setModalTitlePerformance("Native");
    setPerformanceTable(table)
}
//Show the performance for jQuery apps
function showPerformancejQuery() {
    emptyPerformanceModal();
    var table = createTable(ajQueryStartup, ajQueryLogin, ajQueryCalc, wpjQueryStartup, wpjQueryLogin, wpjQueryCalc);
    setModalTitlePerformance("jQuery");
    setPerformanceTable(table)
}
//Show the performance for Sencha apps
function showPerformanceSencha() {
    emptyPerformanceModal();
    var table = createTable(aSenchaStartup, aSenchaLogin, aSenchaCalc, wpSenchaStartup, wpSenchaLogin, wpSenchaCalc);
    setModalTitlePerformance("Sencha");
    setPerformanceTable(table)
}
//Show the performance for Xamarin apps
function showPerformanceXamarin() {
    emptyPerformanceModal();
    var table = createTable(aXamarinStartup, aXamarinLogin, aXamarinCalc, "-", "-", "-");
    setModalTitlePerformance("Xamarin");
    setPerformanceTable(table)
}
//Show the performance for MoSync apps
function showPerformanceMoSync() {
    emptyPerformanceModal();
    var table = createTable(aMoSyncStartup, aMoSyncLogin, aMoSyncCalc, wpMoSyncStartup, wpMoSyncLogin, wpMoSyncCalc);
    setModalTitlePerformance("MoSync");
    setPerformanceTable(table)
}
//Show the popup when there is no data.
function showPerformanceUnknown() {
    emptyPerformanceModal();
    setModalTitlePerformance("unknown");
    $('.modalBody').append("There is no known data");
    $('#myModal').reveal();
    $("#performancetable").tablesorter();
}
//Show the popup when there is no data.
function showGraphicsUnknown() {
    emptyPerformanceModal();
    setModalTitleGraphics("unknown");
    $('.modalBody').append("This framework was not tested.");
    $('#myModal').reveal();
}
//Show the popup for the jQuery graphics.
function showGraphicsjQuery() {
    emptyPerformanceModal();
    setModalTitleGraphics("jQuery");
    $('.modalBody').append("The default jQuery mobile theme is styled like an iOS app. There are various themes available. For Windows Phone you can use: <a href=\"https://github.com/sgrebnov/jqmobile-wp8-theme\">jqmobile-wp8-theme</a>" +
        "<br/> For Android you have multiple options: " +
        "<div id=\"screenshot\" style=\"visibility:hidden\"></div>" +
    createjQueryGraphicsTable());
    $('#myModal').reveal();
    $('#androidtable').dataTable({
        "aaSorting": [[1, "asc"]],
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": true,
        "bSort": true,
        "bInfo": false,
        "bAutoWidth": true,
        "bFilter": false,
        "aoColumns": [{ "bSortable": true }, { "bSortable": true, "sType": "alt-string" }, { "bSortable": true, "sType": "alt-string" }, { "bSortable": true, "sType": "alt-string" }, { "bSortable": true, "sType": "alt-string" }, { "bSortable": true, "sType": "alt-string" }, ]
    });
    hideElement('screenshot');
}
//Show the popup for the Sencha graphics.
function showGraphicsSencha() {
    emptyPerformanceModal();
    setModalTitleGraphics("Sencha");
    $('.modalBody').append("The Windows Phone stylesheet is correct, the Android version doesn't look native. Can be solved with CSS editing.");
    $('#myModal').reveal();
}
//Show the popup for the MoSync graphics.
function showGraphicsMoSync() {
    emptyPerformanceModal();
    setModalTitleGraphics("MoSync");
    $('.modalBody').append("The elements are loaded natively, but not all components are available.");
    $('#myModal').reveal();
}
//Show the popup for the Xamarin graphics.
function showGraphicsXamarin() {
    emptyPerformanceModal();
    setModalTitleGraphics("Xamarin");
    $('.modalBody').append("The GUI of Xamarin is designed for every platform. Only the backend code can be shared. This means the GUI always looks like a native app.");
    $('#myModal').reveal();
}
//Show the popup for the Native
function showGraphicsNative() {
    emptyPerformanceModal();
    setModalTitleGraphics("Native");
    $('.modalBody').append("This is the native look.");
    $('#myModal').reveal();
}
//Show the popup for the Enyo
function showGraphicsEnyo() {
    emptyPerformanceModal();
    setModalTitleGraphics("Enyo");
    $('.modalBody').append("Enyo uses its own look. This can be modified with CSS.");
    $('#myModal').reveal();
}
//Show the popup for the Orubase
function showGraphicsOrubase() {
    emptyPerformanceModal();
    setModalTitleGraphics("Orubase");
    $('.modalBody').append("Orubase uses is part native, part webapp. The look of the part that loads from the web has visual bugs in Android and Windows Phone. This was the case in version 1.1.0.69.");
    $('#myModal').reveal();
}
//Show the popup for the Orubase
function showGraphicsRhoMobile() {
    emptyPerformanceModal();
    setModalTitleGraphics("RhoMobile");
    $('.modalBody').append("RhoMobile implements a webbrowser component and shows native buttons which don't look right with the platform.");
    $('#myModal').reveal();
}
//Set the title of the dialog
function setModalTitlePerformance(title) {
    $('.modalTitle').append("Performance " + title);
}
//Set the title of the dialog
function setModalTitleGraphics(title) {
    $('.modalTitle').append("Graphics " + title);
}
//Empty the dialog.
function emptyPerformanceModal() {
    $('.modalTitle').empty();
    $('.modalBody').empty();
}
//Set the content of the dialog
function setPerformanceTable(table) {
    $('.modalBody').append(table);
    $('#myModal').reveal();
    $("#performancetable").tablesorter({
        sortList: [[0, 0]],

        textExtraction: function (s) {
            if ($(s).find('img').length == 0) return $(s).text();
            return $(s).find('img').attr('alt');
        }

    });
}
function showScreenshot(image) {
    
    $('#screenshot').html("<a href=\"javascript:hideScreenshot()\"><img src=\"img/" + image + ".png\"  style=\"max-width:520px\"></a>");
    slidedown('screenshot');
}
function hideScreenshot() {
    slideup('screenshot');
}
//Create the table with the specified data.
function createTable(androidStartup, androidLogin,androidCalc,winpStartup,winpLogin,winpCalc) {
    return "<table style=\"width: 100%\" id=\"performancetable\" class=\"tablesorter\">" +
    "<thead>" +
        "<tr>" +
            "<th>Name</th>" +
    "<th>Startup</th>" +
    "<th>HTTP POST login</th>" +
    "<th>Calculation</tdth>" +
    "</tr>" +
    "</thead>" +
    "<tbody>" +
    "<tr>" +
    "<td>Android</td>" +
    "<td>" + androidStartup + "</td>" +
    "<td>" + androidLogin + "</td>" +
    "<td>" + androidCalc + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Windows Phone</td>" +
    "<td>" + winpStartup + "</td>" +
    "<td>" + winpLogin + "</td>" +
    "<td>" + winpCalc + "</td>" +
    "</tr>" +
    "</tbody>" +
    "</table>";

}
function createjQueryGraphicsTable() {
    return "<table style=\"width: 100%\" id=\"androidtable\" class=\"tablesorter\"><thead>	<tr>\n" +
"		<th class=\"header\">Name</th>\n" +
"		<th class=\"header\">enathu</th>\n" +
"		<th class=\"header\">jjoe64</th>\n" +
"		<th class=\"header\">zeickan</th>\n" +
"		<th class=\"header\">vezquex</th>\n" +
"		<th class=\"header\">zmyaro</th>\n" +
"	</tr>\n" +
"</thead><tbody>	<tr>\n" +
"		<td>Dark</td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Light</td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Button</td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Text field</td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Checkbox</td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Radio button</td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Slider</td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Toggle button</td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Text</td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Tabs</td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Drop down</td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/cross.png\" alt=\"0\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"		<td><img src=\"img/check.png\" alt=\"1\"></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Screenshot</td>\n" +
"		<td><a href=\"javascript:showScreenshot(\'enathu\')\"><img src=\"img/screen.png\" alt=\"3\"></a></td>\n" +
"		<td><a href=\"javascript:showScreenshot(\'jjoe64\')\"><img src=\"img/screen.png\" alt=\"3\"></a></td>\n" +
"		<td><a href=\"javascript:showScreenshot(\'zeickan\')\"><img src=\"img/screen.png\" alt=\"3\"></a></td>\n" +
"		<td><a href=\"javascript:showScreenshot(\'vezquex\')\"><img src=\"img/screen.png\" alt=\"3\"></a></td>\n" +
"		<td><a href=\"javascript:showScreenshot(\'zmyaro\')\"><img src=\"img/screen.png\" alt=\"3\"></a></td>\n" +
"	</tr>\n" +
"	<tr>\n" +
"		<td>Download</td>\n" +
"		<td><a href=\"https://github.com/enathu/jqmobile-android-holo-light-theme\" target=\"_blank\">\n" +
"                                <img src=\"img/download.png\" alt=\"4\"></a></td>\n" +
"		<td><a href=\"https://github.com/jjoe64/jquery-mobile-android-theme\" target=\"_blank\">\n" +
"                                <img src=\"img/download.png\" alt=\"4\"></a></td>\n" +
"		<td><a href=\"https://github.com/zeickan/Holo-Holo-Theme\" target=\"_blank\">\n" +
"                                <img src=\"img/download.png\" alt=\"4\"></a></td>\n" +
"		<td><a href=\"http://vezquex.com/projects/holo-css/index.html\" target=\"_blank\">\n" +
"                                <img src=\"img/download.png\" alt=\"4\"></a></td>\n" +
"		<td><a href=\"https://github.com/zmyaro/holo-web\" target=\"_blank\">\n" +
"                                <img src=\"img/download.png\" alt=\"4\"></a></td>\n" +
"	</tr>\n" +
"</tbody></table>";
}