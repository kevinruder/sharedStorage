Schema = {};
Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    }
});


Schema = {};
Schema.spaceSearch = new SimpleSchema({
    Items: {
        type: [String],
        label: "What do you need stored ?",
        max: 50

    },
    Space:{
        type:Number,
        label:"You need this much space",
        autoValue:function(){

            var Items = this.siblingField("Items").value;
            var space_needed = 0;

            var k;

            for(k in Items){

                space_needed += 10;
                console.log(space_needed);

            }


        }
    }
});


var foos = new Mongo.Collection( null );
for ( var i = 0; i < 100; i++ ) {
    foos.insert({ "chair": "chair" });
}


