/**
 * Created by marcusedwards on 2017-07-01.
 */

$(window).on('load', function(){

    function displayContents(err, text) {
        if (err) {
            alert('A problem occured during scanning.');
        } else {
            alert('Code successfully scanned: ' + text);
            scan();
        }
    }

    function scan() {

        QRScanner = window.QRScanner;

        QRScanner.scan(displayContents);
        QRScanner.show();
    }

    scan();
    window.setInterval(scanCheck,10);
});

function scanCheck(){
    if($("span:contains('Scan')").closest('a').hasClass('activated')){
        $('body').css('height','10%');
    }
    else if(($("span:contains('Home')").closest('a').hasClass('activated')) || ($("span:contains('Contact')").closest('a').hasClass('activated'))){
        $('body').css('height','100%');
    }
}