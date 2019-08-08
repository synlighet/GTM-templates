<script src="https://apis.google.com/js/platform.js?onload=renderOptIn" async defer></script>
<script>  
// orderID -> DataLayer
// mail -> #div selector
 window.renderOptIn = function() {

   window.gapi.load('surveyoptin', function() {

     window.gapi.surveyoptin.render(

       {
         "merchant_id": "126917538",

         "order_id": "{{orderID}}",

         "email": "{{email}}",

         "delivery_country": "NO",

         "estimated_delivery_date": "2019-09-01"
       });

    });

 }
  document.write(window.renderOptIn());

</script>
