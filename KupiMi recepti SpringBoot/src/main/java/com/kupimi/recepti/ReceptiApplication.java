package com.kupimi.recepti;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;


@SpringBootApplication
@EnableJpaAuditing
public class ReceptiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReceptiApplication.class, args);
    }

}
