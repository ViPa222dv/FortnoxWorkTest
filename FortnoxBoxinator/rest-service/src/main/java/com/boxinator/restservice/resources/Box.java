package com.boxinator.restservice.resources;

public class Box {
    private String theName;
    private int theWeight;
    private char theBoxColour;

    public String getTheName() {
        return theName;
    }
    public void setTheName(String theName) {
        this.theName = theName;
    }
    public int getTheWeight() {
        return theWeight;
    }
    public void setTheWeight(int theWeight) {
        this.theWeight = theWeight;
    }
    public char getTheBoxColour() {
        return theBoxColour;
    }
    public void setTheBoxColour(char theBoxColour) {
        this.theBoxColour = theBoxColour;
    }
    public Country getTheCountry() {
        return theCountry;
    }
    public void setTheCountry(Country theCountry) {
        this.theCountry = theCountry;
    }
    private Country theCountry;

    public enum Country {
        SWEDEN,
        CHINA,
        BRAZIL,
        AUSTRALIA
    }
    public Box (String name, int weight, char boxColour, Country country) {
        theName = name;
        theWeight = weight;
        theBoxColour = boxColour;
        theCountry = country;
    }
}