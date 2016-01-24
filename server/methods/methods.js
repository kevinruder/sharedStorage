/**
 * Created by Kevin on 12/01/2016.
 */
Meteor.methods({

    sendEmail: function(doc) {
        // Important server-side check for security and data integrity
        check(doc, Schema.contact);

        // Build the e-mail text
        var text = "Name: " + doc.name + "\n\n"
            + "Email: " + doc.email + "\n\n\n\n"
            + doc.message;

        this.unblock();

        // Send the e-mail
        Email.send({
            to: "kevinruder@ymail.com",
            from: doc.email,
            subject: "Website Contact Form - Message From " + doc.name,
            text: text
        });
    },

    calculateSpace: function(doc) {
        // Important server-side check for security and data integrity
        // Build the e-mail text

        console.log("THIS METHOD WAS RUN");

   }


});

