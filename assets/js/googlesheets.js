var $form = $('form#contactForm'),
            url = 'https://script.google.com/macros/s/AKfycbyOHXy-cKd80hw1axokwNX3kcMbJnr3m-EUELz4Y6uazPw5K-Em/exec'
        $('#submit-form').on('click', function(e) {
          e.preventDefault();
          var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $form.serializeObject()
          }).success(
            // do something
          );
        })