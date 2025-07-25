package com.tech.transformers.loan.optimizer;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LoanOptimizerApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(LoanOptimizerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println(" ..... ***** Welcome Tech Transformers ***** ..... ");
		System.out.println(" ***** ..... TT Loan Optimizer Application ..... ***** ");
	}
}
