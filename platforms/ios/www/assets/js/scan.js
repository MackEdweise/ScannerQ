/**
 * Created by marcusedwards on 2017-07-01.
 */

$(window).on('load', function(){
    var scan_content = 0 ;

    function displayContents(err, text) {
        if (err) {
            alert('Scan attempt not successful. Please try again.');
            scan_content = 0 ;
        } else {
            alert('Code successfully scanned: ' + text);

            var uid = firebase.auth().currentUser.uid;

            firebase.database().ref('users/'+uid).once('value').then(function (snapshot) {

                var lineName = snapshot.val().line;
                var dataKey = firebase.database().ref().child(lineName).push().key;
                var updates = {};
                updates[lineName + '/' + dataKey]= {key:text};
                firebase.database().ref().update(updates);

                var oldNum = $('#size-tag').text();
                var newNum = (parseInt(oldNum) + 1);
                newNum = newNum.toString();
                $('#size-tag').text(newNum);
            });

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
    setInterval(function(){
        if($('#scan-header').length > 0){
            $('body').css('height','50%');
        }
        else{
            $('body').css('height','100%');
        }
    },100);
});