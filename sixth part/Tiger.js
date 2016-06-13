function Tiger(){
    this.energy = 30;
}

Tiger.prototype.act = function(view) {
    var space = view.find(" ");
    if (this.energy > 60 && space)
        return {type: "reproduce", direction: space};
    var animal = view.find("o");
    if (animal && this.energy < 20)
        return {type: "eat", direction: animal};
    if (space)
        return {type: "move", direction: space};
};