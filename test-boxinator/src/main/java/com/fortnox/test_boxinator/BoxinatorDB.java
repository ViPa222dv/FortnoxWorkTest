package com.fortnox.test_boxinator;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class BoxinatorDB 
{
	public void createTable() throws SQLException 
	{
		Connection connection = connectDB();
		String createTable = "CREATE TABLE IF NOT EXISTS boxinator"
				+ "Name varchar(255)"
				+ "Weight int"
				+ "BoxColour char(6)"
				+ "Country varchar(255)";
		Statement statement = connection.createStatement();
		statement.execute(createTable);
	}
	private static Connection connectDB()
	{
		try {
			
			return null;
		}catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
		return null;
	}
	
}
