package com.restservice.boxinator.resources;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Box {

    public enum Country {
        sweden,
        china,
        brazil,
        australia
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String theName;
    private double theWeight;
    private int theRed;
    private int theGreen;
    private int theBlue;
    private Country theCountry;

    public String getTheName() {
        return theName;
    }
    public void setTheName(String theName) {
        this.theName = theName;
    }
    public double getTheWeight() {
        return theWeight;
    }
    public void setTheWeight(double theWeight) {
        this.theWeight = theWeight;
    }
    public int getTheRed() {
        return theRed;
    }
    public void setTheRed(int theRed) {
        this.theRed = theRed;
    }
    public int getTheGreen() {
        return theGreen;
    }
    public void setTheGreen(int theGreen) {
        this.theGreen = theGreen;
    }
    public int getTheBlue() {
        return theBlue;
    }
    public void setTheBlue(int theBlue) {
        this.theBlue = theBlue;
    }
    public Country getTheCountry() {
        return theCountry;
    }

    //Since I get a string from the json I need to turn it into country enum.
    public void setTheCountry(String theCountry) {
        if(theCountry == "sweden") {
            this.theCountry = Box.Country.sweden;
        }
        else if(theCountry == "china") {
            this.theCountry = Box.Country.china;
        }
        else if(theCountry == "brazil") {
            this.theCountry = Box.Country.brazil;
        }
        else {
            this.theCountry = Box.Country.australia;
        }
    }

    public Box () {

    }
    public Box (String name, double weight, int red, int green, int blue, Country country) {
        this.theName = name;
        this.theWeight = weight;
        this.theRed = red;
        this.theGreen = green;
        this.theBlue = blue;
        this.theCountry = country;
    }
}