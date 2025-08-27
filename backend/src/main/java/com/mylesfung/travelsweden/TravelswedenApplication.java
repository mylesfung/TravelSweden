package com.mylesfung.travelsweden;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class TravelswedenApplication {

	public static void main(String[] args) {
		SpringApplication.run(TravelswedenApplication.class, args);
	}

}



