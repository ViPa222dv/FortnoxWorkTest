package com.restservice.boxinator.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoxinatorService {
    @Autowired
    private BoxRepository boxRepository;

    /*
        I had issues with making a backend using spring boot I could not figure out what made it not work, but I would
        have used these three sql commands if I managed to make it work.
        First query is to create the table if it does not already exist I would have used six columns one for the receiver,
        one for the weight, three for the rgb color and finally one for the colour. I was thinking about having auto
        incremented id, but thought it was not really necessary if I did the backend this way.


        String sqlCreate = "CREATE TABLE IF NOT EXISTS boxdb"
                    + "  (receiver           VARCHAR(255),"
                    + "   weight            INTEGER,"
                    + "   red          INTEGER,"
                    + "   green           INTEGER,"
                    + "   blue           INTEGER,"
                    + "   country     VARCHAR(255))";

         The second query is to GET all the data from the db and add it to a result set which I then would use to store
         the data in a object called box which I then would add to a array list.

        "Select * FROM boxDB"

        The third query would be used POST the data which has been input in the form.

        String sqlAddBox = "INSERT INTO boxdb (receiver, weight, red, green, blue, country) VALUES ("
                    + box.getReceiver() + "," + box.getWeight() + "," + box.getRed() + "," + box.getGreen()
                    + "," + box.getBlue() + "," + box.getCountry() + ")";
     */
    public Iterable<Box> getBoxes() {
        return boxRepository.findAll();
    }

    public void addBoxes(Box box) {
        boxRepository.save(box);
    }
}