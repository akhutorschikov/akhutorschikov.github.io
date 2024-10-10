$(document).ready(function(){
    var selection = getUrlParameter('select');
    
    var selectEl = $('#subject select')
    selectEl.on('change', function() {
        toggleAppVersion(selectEl.val())
    });
    
    if (selection != false) {
        selectEl.val(selection)
        toggleAppVersion(selection)
    }
});

var toggleAppVersion = function getUrlParameter(val) {
    if (val == "support" || val == "bug") {
        $('#appversion').show().find('input').prop('required', true);
    } else {
        $('#appversion').hide().find('input').prop('required', false);
    }
};
