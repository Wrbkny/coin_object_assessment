
let coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random())
    },
    /* 1. Randomly set your coin object's "state" property to be either 
       0 or 1: use "this.state" to access the "state" property on this object.*/

    toString: function () {
        coin.flip()
        if (this.state === 0) {
            document.body.append('heads ')
        } else {
            document.body.append('tails ')
        }

        /* 2. Return the string "Heads" or "Tails", depending on whether
          "this.state" is 0 or 1. */
    },
    toHTML: function () {
        coin.flip()
        let image = document.createElement('img');

        if (this.state === 0) {
            image.src = "./images/face_up.jpeg"
            document.body.append(image)
        } else {
            image.src = "./images/face_down.jpeg"
            document.body.append(image)
        }

    }
};

//return image;
/* 3. Set the properties of this image element to show either face-up
   or face-down, depending on whether this.state is 0 or 1.*/

//function display20Flips() {
    
    //for (let counter = 0; counter <= 20; counter=+1) {
       // toString () 
        
   // }
        
    //}

    /*Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)*/

