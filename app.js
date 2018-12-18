// import Vue from "vue";
Vue.component("sect", {
    props: ["data"],
    template: "\n  <div class=\"section\" :style=\"{background: 'rgba(' + data.color[0] + ',' + data.color[1] + ',' + data.color[2] + ',0.5)'}\">\n    <h1 v-if=\"data.title\" class=\"title\">{{data.title}}</h1>\n    <div class=\"content\" v-html=\"data.content\" v-if=\"data.content\"></div>\n  </div>\n  "
});
Vue.directive("scroll", {
    inserted: function (el, binding) {
        var f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener("scroll", f);
            }
        };
        window.addEventListener("scroll", f);
    }
});
var app = new Vue({
    el: "#app",
    data: {
        currentColor: [138, 43, 226],
        sections: [
            {
                index: 0,
                name: "welcome",
                title: "",
                color: [229, 72, 73],
                current: false,
                content: "<h1>Marius van Wijk</h1><h3>Portfolio</h3>"
            },
            {
                index: 1,
                name: "project1",
                title: "Skills",
                color: [175, 21, 61],
                current: false,
                content: ""
            },
            {
                index: 2,
                name: "ending",
                title: "WOW!",
                color: [175, 21, 61],
                current: false,
                content: ""
            }
        ]
    },
    computed: {
        sortedSections: function () {
            return this.sections.sort(function (a, b) {
                return a.index - b.index;
            });
        }
    },
    methods: {
        current: function (index) {
            var cur = this.sections.find(function (a) {
                return a.index == index;
            });
            cur.current = true;
            this.currentColor = cur.color;
            this.sections.some(function (a) {
                return a.index == index // skip if just set to true
                    ? false
                    : a.current // set to false, and end loop
                        ? !(a.current = false)
                        : false;
            });
        },
        handleScroll: function () {
            var cur = [].find.call(document.getElementsByClassName("section"), function (el) {
                return el.getBoundingClientRect().bottom >= window.innerHeight / 2;
            });
            var index = [].indexOf.call(document.getElementsByClassName("section"), cur);
            console.log(index);
            this.current(index);
        }
    }
});
app.handleScroll();
