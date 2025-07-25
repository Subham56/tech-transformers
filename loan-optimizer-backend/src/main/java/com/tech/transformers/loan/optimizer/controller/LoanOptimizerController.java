package com.tech.transformers.loan.optimizer.controller;

import com.tech.transformers.loan.optimizer.enums.LoanProductType;
import com.tech.transformers.loan.optimizer.model.LoanApplicant;
import com.tech.transformers.loan.optimizer.model.LoanProduct;
import com.tech.transformers.loan.optimizer.model.Loans;
import com.tech.transformers.loan.optimizer.repository.LoanApplicantRepository;
import com.tech.transformers.loan.optimizer.repository.LoanProductRepository;
import com.tech.transformers.loan.optimizer.service.ApplicantService;
import com.tech.transformers.loan.optimizer.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/optimizer/loan")
public class LoanOptimizerController {
    @Autowired
    private LoanProductRepository loanProductRepository;

    @Autowired
    private LoanApplicantRepository loanApplicantRepository;

    @Autowired
    private LoanService loanService;

    @Autowired
    private ApplicantService applicantService;

    @GetMapping("/applicants")
    public List<LoanApplicant> getAllLoanApplicants(){
        return loanApplicantRepository.findAll();
    }

    @GetMapping("/products")
    public List<LoanProduct> getAllLoanProducts(){
        return loanProductRepository.findAll();
    }

    @PostMapping("/all")
    public List<Loans> getLoansList(@RequestBody LoanApplicant loanApplicant){
        return loanService.getAllLoanOptions(applicantService.saveApplicant(loanApplicant));
    }

    @PostMapping("/home")
    public Loans getAllHomeLoans(@RequestBody LoanApplicant loanApplicant){
        return loanService.getAllHomeLoanOptions(applicantService.saveApplicant(loanApplicant));
    }

    @PostMapping("/gold")
    public Loans getAllGoldLoans(@RequestBody LoanApplicant loanApplicant){
        return loanService.getAllGoldLoanOptions(applicantService.saveApplicant(loanApplicant));
    }

    @PostMapping("/personal")
    public Loans getAllPersonalLoans(@RequestBody LoanApplicant loanApplicant){
        return loanService.getAllPersonalLoanOptions(applicantService.saveApplicant(loanApplicant));
    }

    @PostMapping("/education")
    public Loans getAllEducationLoans(@RequestBody LoanApplicant loanApplicant){
        return loanService.getAllEducationLoanOptions(applicantService.saveApplicant(loanApplicant));
    }

    @PostMapping("/credit")
    public Loans getAllCreditCardLoans(@RequestBody LoanApplicant loanApplicant){
        return loanService.getAllCreditCardLoanOptions(applicantService.saveApplicant(loanApplicant));
    }

    @PostMapping("/business")
    public Loans getAllBusinessLoans(@RequestBody LoanApplicant loanApplicant){
        return loanService.getAllBusinessLoanOptions(applicantService.saveApplicant(loanApplicant));
    }
}
