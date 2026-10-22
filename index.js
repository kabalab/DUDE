(() => {
    let body = document.body;
    let params = new URLSearchParams(window.location.search);

    let animation = getParam(params,"type",false);
    let time = getParam(params,"time",true,true,5);
    let types = ["sin", "asin", "tan", "atan"];
    

    if (!types.includes(animation)) {
        return body.style.animation = `moveBackgroundSin ${time}s linear infinite`;
    }

    let amount = getParam(params, "amount", true, true, 201);
    let amplitude = getParam(params, "amplitude", true, false, 20);

    let values = [];

    for (let i = 0; i < amount; i++) {
        let x = (100 / (amount - 1)) * i;
        let value = (((360 / amount) * i) * Math.PI / 180);
        let y = amplitude;

        switch (animation){
            case "sin":
                y *= Math.sin(value);
                break;
            case "asin":
                y *= 1/Math.sin(value);
                break;        
            case "tan":
                y *= Math.tan(value);
                break;
            case "atan":
                y *= 1/Math.atan(value);
                break;
        }

        values.push({
            backgroundPosition: `${x}px ${y}px`,
            // offset: i / (amount - 1)
        });
    }

    document.body.animate(values, {
        duration: time * 1000,
        iterations: Infinity,
        easing: "linear"
    });


    function getParam(params, paramWanted, number = false, over0 = false, defaultValue = "NONE") {
        let thing = params.get(paramWanted);

        if (thing === null || thing.trim?.() === "") {
            return defaultValue !== "NONE" ? defaultValue : null;
        }

        if (number) {
            thing = Number(thing);
        }

        if (number && !Number.isFinite(thing)) {
            return defaultValue !== "NONE" ? defaultValue : null;
        }

        if (number && over0 && thing <= 0) {
            return defaultValue !== "NONE" ? defaultValue : null;
        }

        return thing;
    }
})();