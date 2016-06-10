function Tiger(){
    this.energy = 30;
}

PlantEater.prototype.act = function(view) {
    var space = view.find(" ");
    if (this.energy > 60 && space)
        return {type: "reproduce", direction: space};
    var plant = view.find("*");
    if (plant && this.energy < 20)
        return {type: "eat", direction: plant};
    if (space)
        return {type: "move", direction: space};
};