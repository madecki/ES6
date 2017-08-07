function slider(config) {
    let defaults = {
        speed: 500,
        pause: 3000,
        easing: "linear"
    };

    const options = Object.assign({}, defaults, config);

    console.log(options);
}

slider({
    easing: "ease-in-out",
    pause: 2000,
    fn() {

    }
});