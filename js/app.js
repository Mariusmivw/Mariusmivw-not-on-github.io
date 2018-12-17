const main = document.getElementById("main");
let scrollItems = [];
let prev;

class Color {
    constructor( /*hex(,alfa) | r,g,b(,a)*/ ) {
        if (arguments.length < 3) {
            const c = hex2rgb(arguments[0]);
            this.r = c.r;
            this.g = c.g;
            this.b = c.b;
            this.a = arguments[1] || c.a || 1;
        } else {
            this.r = arguments[0];
            this.g = arguments[1];
            this.b = arguments[2];
            this.a = arguments[3] || 1;
        }
    }
}

const hex2rgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: parseInt(result[4], 16) / 255
    } : null;
}

const addSection = (id, sectionName, title, color) => {
    const section = document.createElement("div");
    section.classList.add("section", sectionName);
    if (id) section.id = id;

    if (color) {
        section.style.setProperty("--r", color.r)
        section.style.setProperty("--g", color.g)
        section.style.setProperty("--b", color.b);
    }

    if (title) {
        const titleEl = document.createElement("h1");
        titleEl.classList.add("title");
        titleEl.innerHTML = title;
        section.append(titleEl);
    }
    main.append(section);
    scrollItems.unshift(section);
}

$(window).scroll(() => {
    const fromTop = $(window).scrollTop();
    console.log(fromTop);
    $(".current").removeClass("current");
    scrollItems.filter(function (i) {
        return $(i).offset().top < fromTop + window.innerHeight / 2;
    })[0].classList.add("current");
});
addSection("", "welcome", "Marius van Wijk", new Color("#E54849", 0.5));
addSection("", "welcome2", "Marius van Wijk", new Color("#DE9D36", 0.5));
addSection("", "welcome3", "Marius van Wijk", new Color("#729974", 0.5));
addSection("", "welcome4", "Marius van Wijk", new Color("#AB58A4", 0.5));
addSection("", "welcome5", "Marius van Wijk", new Color("#002D40", 0.5));

$(window).scroll();