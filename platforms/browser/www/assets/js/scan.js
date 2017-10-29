/**
 * Created by marcusedwards on 2017-10-28.
 */

function registerScan(text){

    var uid = firebase.auth().currentUser.uid;

    firebase.database().ref('users/'+uid).once('value').then(function (snapshot) {

        var lineName = snapshot.val().line;
        var dataKey = firebase.database().ref().child(lineName).push().key;
        var updates = {};
        updates[lineName + '/' + dataKey]= {key:text, rem:dataKey};
        firebase.database().ref().update(updates);

        var oldNum = $('#size-tag').text();
        var newNum = (parseInt(oldNum) + 1);
        newNum = newNum.toString();
        $('#size-tag').text(newNum);

        firebase.database().ref('leadmeUsers/' + uid).once('value').then(function (snapshot) {
            var leadmeId = snapshot.val();
            var leadId = text;
            console.log('scanned data for connection:');
            console.log(leadId);
            console.log(leadmeId);
            console.log(lineName);

            $.post('http://gentle-forest-16873.herokuapp.com/leadmeData',
                {
                    lead:leadId,
                    user:leadmeId,
                    location:lineName
                })
                .done(function(){
                    alert('Code successfully scanned!');
                });
        });
    });
}

function scan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if(!result.cancelled)
            {
                if(result.format == "QR_CODE")
                {

                    var value = result.text;
                    registerScan(value);
                }
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            "preferFrontCamera" : true
        }
    );
}