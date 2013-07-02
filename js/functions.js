//Perform when the page is loaded
$(document).ready(function () {
    hideUntested();
    hideElement('notcompatible');

    jQuery.extend(jQuery.fn.dataTableExt.oSort, {
        "alt-string-pre": function (s) {
            if ($(s).find('img').length == 0) return s.match(/alt="(.*?)"/)[1].toLowerCase();
            return $(s).find('img').attr('alt');
        },

        "alt-string-asc": function (a, b) {
            return ((a < b) ? -1 : ((a > b) ? 1 : 0));
        },

        "alt-string-desc": function (a, b) {
            return ((a < b) ? 1 : ((a > b) ? -1 : 0));
        }
    });

    $('#resulttable').dataTable({
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": true,
        "bSort": true,
        "bInfo": false,
        "bAutoWidth": true,
        "bFilter": false,
        "aoColumns": [{ "bSortable": true }, { "bSortable": true, "sType": "alt-string" }, { "bSortable": true, "sType": "alt-string" }, { "bSortable": true }, { "bSortable": true }, { "bSortable": true }, { "bSortable": false }, { "bSortable": true, "sType": "alt-string" }, { "bSortable": true, "sType": "alt-string" }, { "bSortable": false }]
    });

    //Hide the screenshot if the modal is closed.
    $(this).bind('reveal:close', function () {
        hideScreenshot();
    });
});

//Hide the specified element
function hideElement(element) {
    $('#' + element).hide();
}

//Make the element visible
function setVisible(element) {
    if (document.getElementById) { // DOM3 = IE5, NS6 
        document.getElementById(element).style.visibility = 'visible';
    }
    else {
        if (document.layers) { // Netscape 4 
            document.getElementById(element).visibility = 'visible';
        }
        else { // IE 4 
            document.getElementById(element).style.visibility = 'visible';
        }
    }
}

//Show the specified element
function showElement(element) {
    $('#' + element).show();
    setVisible(element);
}

//Hide the element with an effect
function slideup(element) {
    $('#' + element).slideUp('slow', function () {
        // Animation complete.
    });
}

//Show the element with an effect
function slidedown(element) {
    $('#' + element).slideDown('slow', function () {
        // Animation complete.
    });
    setVisible(element);
}

//Get if the checkbox is checked
function getChecked(element) {
    return document.getElementById(element).checked;
}
