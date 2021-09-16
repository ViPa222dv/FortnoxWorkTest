package com.boxinator.restservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.boxinator.restservice.resources.BoxinatorDB;

@SpringBootApplication
public class BoxinatorApplication {

	public static void main(String[] args) {
		BoxinatorDB boxDB = new BoxinatorDB();
		boxDB.createTable();
		SpringApplication.run(BoxinatorApplication.class, args);
	}

}
