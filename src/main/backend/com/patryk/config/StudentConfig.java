package com.patryk.config;

import com.patryk.model.Student;
import com.patryk.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;

@Configuration
public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {

            Student mariam = new Student(
                    "Stefan",
                    "stefix6833@gmail.com",
                    LocalDate.of(2000, Month.JANUARY, 5)

            );
            Student alex = new Student(
                    "Alex",
                    "alex@gmail.com",
                    LocalDate.of(2004, Month.JANUARY, 5)

            );
            Student Tom = new Student(
                    "Tomek",
                    "tomczyk_21@gmail.com",
                    LocalDate.of(2004, Month.JANUARY, 5)

            );

//            repository.saveAll(
//                    List.of(mariam, alex, Tom)
//            );
        };
    }
}
