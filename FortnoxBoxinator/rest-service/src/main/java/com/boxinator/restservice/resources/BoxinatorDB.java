package com.boxinator.restservice.resources;
import java.sql.*;
import java.util.ArrayList;

import com.mysql.cj.jdbc.MysqlDataSource;

public class BoxinatorDB
{
    public BoxinatorDB ()
    {

    }
    public static void createTable() throws SQLException
    {
        Connection connection = connectDB();
        System.out.println("Hi " + connection);
        String createTable = "CREATE TABLE IF NOT EXISTS boxinator("
                + "Name varchar(255),"
                + "Weight int,"
                + "BoxColour char(6),"
                + "Country varchar(255))";
        Statement statement = connection.createStatement();
        statement.execute(createTable);
        statement.close();
        connection.close();
    }
    public static ArrayList getAllBoxes() throws SQLException
    {
        Connection connection = connectDB();
        ArrayList <Box> arraylist = new ArrayList <Box>();
        System.out.println("Hi " + connection);
        String createTable = "CREATE TABLE IF NOT EXISTS boxinator("
                + "Name varchar(255),"
                + "Weight int,"
                + "BoxColour char(6),"
                + "Country varchar(255))";
        Statement statement = connection.createStatement();
        statement.execute(createTable);
        statement.close();
        connection.close();
        return arraylist;
    }
    private static Connection connectDB()
    {
        try {
            MysqlDataSource dataSource = new MysqlDataSource();
            dataSource.setUser("root");
            dataSource.setPassword("test123");
            dataSource.setServerName("localhost");
            dataSource.setDatabaseName("boxinatorDB");
            Connection connection = dataSource.getConnection();
            return connection;
        }catch(Exception e)
        {
            System.out.println(e.getMessage());
        }
        return null;
    }

}
