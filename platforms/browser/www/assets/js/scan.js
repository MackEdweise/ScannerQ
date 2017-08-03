/**
 * Created by marcusedwards on 2017-07-01.
 */



$(window).on('load', function(){
    var scan_content = 0 ;

    // var database = firebase.database();
    //
    // var firebase = require('firebase').initializeApp({
    //
    // });


    function displayContents(err, text) {
        if (err) {
            alert('A problem occured during scanning.');
            scan_content = 0 ;
        } else {

            alert('Code successfully scanned: ' + text);

            // firebase.database().ref('lines/Wilfrid Laurier University/Bookstore/' + text).set({
            //     username: "lmao"
            // });


            var fDB = firebase.database().ref();

            var dataKey = fDB.child('lines/Wilfrid Laurier University/Bookstore').push().key;
            var updates = {};
            updates['lines/Wilfrid Laurier University/Bookstore/'+ dataKey]= {key:text};
            fDB.update(updates);

            scan_content = text;
            scan();
        }
    }

    function scan() {
        QRScanner = window.QRScanner;

        QRScanner.useFrontCamera(function(err, status){
            err && console.error(err);
            console.log(status);
        });

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