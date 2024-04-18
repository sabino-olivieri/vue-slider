const { createApp } = Vue;

createApp({
    data() {
        return {

            images: [
                {
                    image: "img/01.webp",
                    title: "Marvel's Spiderman Miles Morale",
                    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
                },
                {
                    image: "img/02.webp",
                    title: "Ratchet & Clank: Rift Apart",
                    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
                },
                {
                    image: "img/03.webp",
                    title: "Fortnite",
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: "img/04.webp",
                    title: "Stray",
                    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
                },
                {
                    image: "img/05.webp",
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                },
            ],

            currentIndex: 0,
            timeNext: false,
            timePrev: false

        }
    },

    created() {
        this.autoPlay();
    },

    methods: {

        nextImage: function () {
            console.log(this.currentIndex);
            this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
        },

        prevImage: function () {
            console.log(this.currentIndex);
            this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
        },

        autoPlay: function () {
            this.timeNext = setInterval(this.nextImage, 3000);
        },

        playPause: function () {

            if (this.timeNext != false) {

                this.resetTime();

            } else if (this.timePrev != false) {

                this.resetTime();

            } else {
                this.autoPlay();
            }
        },

        reversePlay: function () {
            if (this.timeNext != false) {

                this.resetTime();
                this.timePrev = setInterval(this.prevImage, 3000);
                
            } else if (this.timePrev != false) {

                this.resetTime();
                this.autoPlay();
            }
        },

        resetTime: function () {

            if (this.timeNext != false) {

                clearInterval(this.timeNext);
                this.timeNext = false;

            } else if (this.timePrev != false) {
                clearInterval(this.timePrev);
                this.timePrev = false;
            }
        }

    }
}).mount("#app")


