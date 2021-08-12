package com.restservice.boxinator.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/box")
public class BoxinatorController {
    private final BoxinatorService boxinatorService;

    @Autowired
    public BoxinatorController(BoxinatorService boxinatorService) {
        this.boxinatorService = boxinatorService;
    }
    //Get all current boxes in DB
    @GetMapping(path="/all_boxes")
    public @ResponseBody Iterable<Box> getBoxes() {
        return boxinatorService.getBoxes();
    }
    //Add a box to DB
    @PostMapping(path="/add_box")
    public @ResponseBody String addNewUser (@RequestParam String receiver, @RequestParam double weight, @RequestParam int red,
                                            @RequestParam int green, @RequestParam int blue, @RequestParam String country) {
        Box box = new Box();
        box.setTheName(receiver);
        box.setTheWeight(weight);
        box.setTheRed(red);
        box.setTheGreen(green);
        box.setTheBlue(blue);
        box.setTheCountry(country);
        boxinatorService.addBoxes(box);
        return "Saved";
    }
}