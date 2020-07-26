function addPreference(name, type, defaultValue) {
    console.log("addPreference: ", name, type, defaultValue);
    if (type == "select" && Array.isArray(defaultValue)) {
        var pref = document.createElement("select");
        pref.type = type;
        pref.name = name;
        pref.className = "preferences-form-field";
        pref.id = name + "-preference";

        // add options
        for (index in defaultValue) {
            pref.options[pref.options.length] = new Option(defaultValue[index], index);
        }
    } else {
        var pref = document.createElement("input");
        pref.type = type;
        pref.name = name;
        pref.className = "preferences-form-field";
        pref.id = name + "-preference";

        // set a default text value
        if (type == "text" && defaultValue != "") {
            var defaultText = document.createTextNode(defaultValue);
            pref.appendChild(defaultText);
        }
    }

    document.getElementById("preferences-form").appendChild(pref);
}

function processPreferences() {
    // select colorscheme
    var colorschemeOption = document.getElementById("colorscheme-preference");
    var selectedColorscheme = colorschemeOption.options[colorschemeOption.selectedIndex].text;

    for (const [key, value] of Object.entries(colorschemes[selectedColorscheme])) {
        document.documentElement.style.setProperty('--' + key, value);
    }
}

function createPreferences() {
    addPreference("first-text", "text", "hello");

    addPreference("colorscheme", "select", Object.keys(colorschemes));
}

window.addEventListener("load", function() {
    createPreferences()
});
